const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

   
    firstname:{
        type: String,
        required: true,
        lowercase: true,
        
         
       },
   
       lastname:{
        type: String,
        required: true,
        lowercase: true,
        
         
       },
   

       middlename:{
        type: String,
        lowercase: true,
        
         },

     gender:{
            type: String,
            lowercase: true,
            
             },
   
   
    email:{
         type: String,
         required: true,
         unique:true,
         lowercase: true,
         
          
        },
    
    password:{
       type: String,
       required:true,
       
    }

});







const User = mongoose.model('User',userSchema);

module.exports = User