import React, { useState } from 'react'
import '../../assets/login.css'
import logo from '../../assets/images/sn.png'
import { Link, useNavigate } from 'react-router-dom'


import authService from '../../utils/auth'



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(email, password);
      if (response && response.token) {
        navigate('/your-desired-route'); // Replace '/your-desired-route' with the actual route you want to navigate to
      } else {
        alert('Login failed. Please check your email and password.');
      }
    } catch (error) {
      alert('An error occurred during login. Please try again.');
    }
  };
  return (

    <div className='loginBody'>
   
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img className='logoimg' src={logo} alt="logo" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">



              <main className='main'>
                <form className='theform' onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                      placeholder="Enter a valid email address"  value={email}  onChange={(e) => setEmail(e.target.value)} />
                    <label className="form-label" htmlFor="form3Example3"></label>
                  </div>


                  <div className="form-outline mb-3">
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                      placeholder="Enter password"   value={password}  onChange={(e) => setPassword(e.target.value)}/>
                    <label className="form-label" htmlFor="form3Example4"></label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">

                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                      <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                      </label>
                    </div>

                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg btnlog"
                    >Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?  
                    <Link to='/Signup' className="link-danger"> Register</Link></p>
                    


                  </div>

                </form>
              </main>

            </div>
          </div>
        </div>

        <footer>
          <ul>
            <li>Welcome to WordOnTheStreet</li>
          </ul>


        </footer>
      </section>

   

    </div>

  )
}





