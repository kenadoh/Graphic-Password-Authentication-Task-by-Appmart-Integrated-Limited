const User = require('../model/user');
const UserSchema = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signup_post = async (req,res) =>{
    
    //Validation
    try{
    const {firstname, lastname, middlename,gender,email,password} =req.body;
  if(!firstname|| firstname ==null){
 return res.status(200).json ({
    "errcode":"01",
    "message": "first name cannot be empty"

})
  }
  
  if(!lastname|| lastname ==null){
    return res.status(200).json ({
       "errcode":"02",
       "message": "last name cannot be empty"
       
   })
     }

     if(!gender|| gender ==null){
        return res.status(200).json ({
           "errcode":"03",
           "message": "gender cannot be empty"
           
       })
    }

     if(!email|| email ==null){
        return res.status(200).json ({
           "errcode":"04",
           "message": "email cannot be empty"
           
       })
    }
       
    

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (!email.match(validRegex)) {
           return res.status(200).json ({
                "errcode":"05",
                "message": "Please provide valid email"
            })      
      
        } 

     const passw=  /^[A-Za-z]\w{7,14}$/;
    if(!password.match(passw)) {
        return res.status(200).json ({
             "errcode":"06",
             "message": "Please provide valid password"
         })      
   
     } 


 


  // Check if user exits
    const finduser = await UserSchema.findOne({email});
    if (finduser){
        return res.status(200).json ({
            "errcode":"07",
            "message": "Please email exits"

     })
  } 
// hash password
  const salt = await bcrypt.genSalt();
  const passwordhash = await bcrypt.hash(password, salt)

/// genrate jwt

const maxage = 3 * 24 * 60 * 60; // 3days
 const token = jwt.sign({ firstname, lastname, middlename,gender,email}, 'nodejs authentication secret', {
expiresIn: maxage
})
 

// insert user into db

 
    const user = await User.create({firstname, lastname, middlename,email, gender,"password":passwordhash});
if(!user){
    return res.status(200).json ({
        "errcode":"08",
        "message": "Unable to create account"

 })
}



return res.status(200).json ({
    "code":"00",
    "message": "User Successfully created",
    "token": token,
    
})


  }
  catch (err){
    console.log(err);
    return res.status(200).json ({
        "errcode":"09",
        "message": err

 });
  }
  
  }
  
  module.exports.login_post = async (req,res) =>{
    const {email,password} =req.body;
  

    try{
        

const user = await UserSchema.findOne({email});

if (!user){
    
    return res.status(200).json ({
        "errcode":"10",
        "message": "user not register"
    })
    
}

const authen= await bcrypt.compare(password,user.password)

if (!authen){
    return res.status(200).json ({
        "errcode":"11",
        "message": "invalid password"
    })


}


/// genrate jwt
var firstname =user.firstname
var lastname =user.lastname
var middlename =user.middlename
var emaild = user.email

const maxage = 3 * 24 * 60 * 60; // 3days
 const logintoken = jwt.sign({firstname,lastname,middlename,emaild}, 'nodejs authentication secret', {
    expiresIn: maxage
})

return res.status(200).json ({
    "code":"00",
    "message": "Login successful",
    "token": logintoken

})






}


catch(err){
        console.log(err);
        return res.status(200).json ({
            "errcode":"12",
            "message": err
     
        })
}  
}

