import {Link} from 'react-router-dom'
import { useState } from 'react';

import axios from "axios";
import slides_1 from './img/slides-1.jpg';
import slides_2 from './img/slides-2.jpg';
import slides_3 from './img/slides-3.jpg';
import './css/style.css';
import './vendor/bootstrap/css/bootstrap.min.css';

var Display;


function Home() {
  const [firstname,setfirstname] = useState(null)
  const [lastname,setlastname] = useState(null)
  const [middlename,setmiddlename] = useState(null)
  const [email,setemail] = useState(null)
  const [gender,setgender] = useState('Male')
  const [ispending,setispending] = useState(false)
  const [password, setpassword] = useState('');
  
  

const handlesubmit = (e)=>{
e.preventDefault();



setispending(true);

axios
.post('http://localhost:5000/signup',
 {"firstname":firstname,
  "lastname":lastname,
  "middlename":middlename,
  "email":email,
  "gender":gender,
  "password":password})
.then((res)=>{
  

    console.log(res.data.message);
    Display = res.data.message
  setispending(false);
  setfirstname('');
    setlastname('');
    setmiddlename('');
    setemail('');
    setgender('Male');
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
                    <h2 className="text-center small">{Display}</h2>
                    <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                    <p className="text-center small">Enter your personal details to create account</p>
                  </div>

                  <form className="row g-3 needs-validation" novalidate 
                  onSubmit={handlesubmit}>
                    <div className="col-12">
                      <label for="firstname" className="form-label">First Name</label>
                      <input type="text" name="name" className="form-control" id="firstname" required
                       value={firstname} onChange ={(e)=>setfirstname(e.target.value)}/>
                      <div className="invalid-feedback">Please, enter your first name!</div>
                    </div>
 
                    <div className="col-12">
                      <label for="lastname" className="form-label">Last Name</label>
                      <input type="text" name="name" className="form-control" id="lastname" required
                       value={lastname} onChange ={(e)=>setlastname(e.target.value)}/>
                      <div className="invalid-feedback">Please, enter your last name!</div>
                    </div>


                    <div className="col-12">
                      <label for="middlename" className="form-label">Middle Name</label>
                      <input type="text" name="name" className="form-control" id="middlename" 
                       value={middlename} onChange ={(e)=>setmiddlename(e.target.value)}/>
                      <div className="invalid-feedback">Please, enter your middle name!</div>
                    </div>


                    <div className="col-12">
                      <label for="gender" className="form-label">Gender</label>
                      <select className="form-control" id="gender" >
                       <option value="male"> Male</option>
                       <option value="female">Female</option>
                       onChange ={(e)=>setgender(e.target.value)}
                      </select>
                      <div className="invalid-feedback">Please, select a gender!</div>
                    </div>


                    <div className="col-12">
                      <label for="Email" className="form-label">Email</label>
                      <input type="email" name="email" className="form-control" id="Email" required 
                      value={email} onChange ={(e)=>setemail(e.target.value)}/>
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
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
                        <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                        <label className="form-check-label" for="acceptTerms">I agree and accept the <Link to='/'>terms and conditions</Link></label>
                        <div className="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div>
                    <div className="col-12"> 
                     { !ispending && <button className="btn btn-primary w-100" type="submit">Create Account</button>}
                     { ispending && <button disabled className="btn btn-primary w-100" type="submit">Create Accounting...</button>}
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Already have an account? <Link to='/login'>Log in</Link></p>
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

export default Home;