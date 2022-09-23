
import { useState } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import slides_1 from './img/slides-1.jpg';
import slides_2 from './img/slides-2.jpg';
import slides_3 from './img/slides-3.jpg';
var Dislay;
const Login = () => {
  const [email,setemail] = useState(null)
  const [password, setpassword] = useState('');
  const [ispending,setispending] = useState(false)
  
   
  


const handlesubmit = (e)=>{
e.preventDefault();


setispending(true);

axios
.post('http://localhost:5000/login',

{password:password,
  email:email
}

)
.then((res)=>{
    console.log(res.data.message);
    Dislay = res.data.message
  setispending(false);
  setpassword('');
});

  


  }
  

  
    return ( 

<main>
    <div className="container">

      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                  <h2 className="text-center small">{Dislay}</h2>
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p className="text-center small">Enter your username & password to login</p>
                  </div>

                  <form className="row g-3 needs-validation" novalidate
                  onSubmit={handlesubmit}>

                    <div className="col-12">
                      <label for="yourUsername" className="form-label">Username</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" className="form-control" id="yourUsername" required
                        value={email} onChange ={(e)=>setemail(e.target.value)} />
                        <div className="invalid-feedback">Please enter your username.</div>
                      </div>
                    </div>

                    <div><label for="Picture" className="form-label">Picture Password</label></div>
              
                    <div className="d-flex justify-content-center py-4">
              <div  className="logo d-flex align-items-center w-auto">
                <img src={slides_1} alt="" value="ken1" onClick={(e)=>setpassword(`${password}ken1`)}/>
                  <span className="d-none d-lg-block"></span>
                </div>
              </div>
              
              <div className="d-flex justify-content-center py-4">
              <div  className="logo d-flex align-items-center w-auto">
                <img src={slides_2} alt="" value="ken2" onClick={(e)=>setpassword(`${password}ken2`)}/>
                  <span className="d-none d-lg-block"></span>
                </div>
              </div>

              <div className="d-flex justify-content-center py-4">
              <div  className="logo d-flex align-items-center w-auto">
                <img src={slides_3} alt="" value="ken3" onClick={(e)=>setpassword(`${password}ken3`)}/>
                  <span className="d-none d-lg-block"></span>
                </div>
              </div>


                    

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                        <label className="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div className="col-12">
                    { !ispending && <button className="btn btn-primary w-100" type="submit">Login</button>}
                    { ispending && <button className="btn btn-primary w-100" type="submit">Login ...</button>}
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Don't have account? <Link to='/'>Create an account</Link></p>
                    </div>
                  </form>

                </div>
              </div>

              <div className="credits">
                
                
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  </main>


     );
}
 
export default Login;