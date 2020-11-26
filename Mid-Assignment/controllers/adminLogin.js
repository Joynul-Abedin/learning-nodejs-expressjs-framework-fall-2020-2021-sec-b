var express = require('express');
var userModel = require.main.require('./model/adminModel');
var mysql = require('mysql');
var router = express.Router();


router.get('/', (req, res)=>{
	res.render('login/index');
});



 router.post('/', (req, res)=>{

	user = {
		'userName'	: req.body.uname,
		'password' 	: req.body.pwd
	}
	userModel.validate(user, function(result){
		if(result.length > 0){
			req.session.name = req.body.uname;
			res.cookie('user', req.body.user);
			res.redirect('/usercheck');
		}else{
			res.send("User Login Unsuccessful <a href='/login'>Go Back</a>");
		}
	});

});




module.exports = router;