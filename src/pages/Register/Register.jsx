import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LolImage from '../../img/lol-wallpaper.png'
import Logo from '../../img/teammaker-logo.svg'
import countries from './countryList'
import { registerUser } from '../../api'

import { setAuthInfo } from '../../redux/auth/authReducer'

import FormInput from '../../components/FormInput'
import Alert from '../../components/Alert'

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
    birthday: "",
    country: ""
  })
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputsInfo = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 4-18 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{4,18}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "E-mail",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "••••••••••",
      errorMessage: "Password should be 8 or more characters and include at least 1 capital letter and 1 number!",
      label: "Password",
      pattern: `^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "••••••••••",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: formData.password,
      required: true,
    },
  ]

  let { confirmPassword, ...userCredentials } = formData

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await registerUser(userCredentials)
      dispatch(setAuthInfo(response.data))
      response.status === 201 && setAlert({ msg: "Account created!", type: "green" })
      response.status === 201 && setTimeout(() => {
        navigate('/choose-a-game')
      }, 1000)
    } catch (error) {
      setLoading(false)
      setAlert({ msg: error.response.data, type: "red" })
      setTimeout(() => {
        setAlert(null)
      }, 3500)
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='relative flex flex-row h-full lg:min-h-[calc(100vh-4rem)] w-full'>
      { alert && <Alert alertMsg={alert.msg} alertType={alert.type} /> }
      <section className='w-full lg:w-1/2 dark-linear-gradient'>
        <div className='w-2/3 mx-auto'>
          <h2 className='text-white text-center font-semibold text-4xl mt-5 lg:mt-10'>Create an account</h2>
          <form className='w-full mb-10' onSubmit={onSubmit}>
            {inputsInfo.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={formData[input.name]}
                onChange={onChange}
              />
            ))}
            <div className='mb-6 mt-6 flex flex-row gap-x-6'>
              <div className='w-1/2'>
                <label className="block mb-2 text-base font-medium text-white">Birthday</label>
                <input name="birthday" type="date" className="bg-black border border-secondary-dark text-secondary-dark text-sm rounded-lg focus:border-primary block w-full p-3" onChange={onChange}/>
              </div>
              <div className='w-1/2'>
                <label className="block mb-2 text-base font-medium text-white">Country</label>
                <select name="country" className="bg-black border border-secondary-dark text-secondary-dark text-sm rounded-lg focus:border-primary block w-full p-3" onChange={onChange}>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>{country.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit" className='button-primary w-full'>
              {loading ? <span>Submit <i className='bx bx-loader-alt bx-spin'></i></span> : <span>Submit</span> }
            </button>
            <Link to={'/login'}>
              <p className='text-secondary-dark text-sm text-right mt-2'>Already have an account? <span className="text-primary">Login</span> here</p>
            </Link>
          </form>
        </div>
      </section>
      <section className='hidden lg:block relative w-1/2 bg-image-centered' style={{ backgroundImage: `url(${LolImage})` }}>
        <div className='absolute top-0 bg-primary-dark w-full h-full bg-opacity-60'>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/2 mx-auto">
            <img className='w-full' src={Logo} alt="teammaker logo" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register