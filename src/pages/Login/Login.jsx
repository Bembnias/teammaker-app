import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BSImage from '../../img/bs-wallpaper.jpg'
import Logo from '../../img/teammaker-logo.svg'
import { loginUser } from '../../api'

import { setAuthInfo } from '../../redux/auth/authReducer'

import FormInput from '../../components/FormInput'
import Alert from '../../components/Alert'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputsInfo = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Invalid email address!",
      label: "E-mail",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "••••••••••",
      errorMessage: "Invalid password!",
      label: "Password",
      pattern: `^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$`,
      required: true,
    }
  ]

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await loginUser(formData)
      dispatch(setAuthInfo(response.data))
      response.status === 200 && setAlert({ msg: "Successfuly logged in!", type: "green" })
      response.status === 200 && setTimeout(() => {
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
    <div className='relative flex flex-row min-h-[calc(100vh-4rem)] w-full'>
      { alert && <Alert alertMsg={alert.msg} alertType={alert.type} /> }
      <section className='w-full lg:w-1/2 dark-linear-gradient'>
        <div className='w-2/3 mx-auto'>
          <h2 className='text-white text-center font-semibold text-4xl mt-5 lg:mt-10'>Sign in</h2>
          <form className='w-full mb-10' onSubmit={onSubmit}>
            {inputsInfo.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={formData[input.name]}
                onChange={onChange}
              />
            ))}
            <button type="submit" className='button-primary w-full'>
              {loading ? <span>Submit <i className='bx bx-loader-alt bx-spin'></i></span> : <span>Submit</span> }
            </button>
            <Link to={'/register'}>
              <p className='text-secondary-dark text-sm text-right mt-2'>Don't have an account? <span className="text-primary">Create new one</span> here</p>
            </Link>
          </form>
        </div>
      </section>
      <section className='hidden lg:block relative w-1/2 bg-image-centered' style={{ backgroundImage: `url(${BSImage})` }}>
        <div className='absolute top-0 bg-primary-dark w-full h-full bg-opacity-60'>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/2 mx-auto">
            <img className='w-full' src={Logo} alt="teammaker logo" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login