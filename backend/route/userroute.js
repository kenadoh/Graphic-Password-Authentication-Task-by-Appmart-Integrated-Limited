const {Router}= require('express');
const usercontrol =require('../controller/usercontroller')
const router =Router();


router.post('/signup',usercontrol.signup_post);
router.post('/login',usercontrol.login_post);
module.exports =router;