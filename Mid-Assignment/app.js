//DECLARATION
var express 		= require('express');
var bodyParser 		= require('body-parser');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var login			= require('./controllers/adminLogin');
var adminDashboard  = require('./controllers/adminDashboard');
var userDashboard   = require('./controllers/userDashboard');
var home			= require('./controllers/home');
var index			= require('./controllers/home');
var main			= require('./controllers/main');
var logout			= require('./controllers/logout');
var anh             = require('./controllers/adminAddNewHotel');
var adminAddNewRoom = require('./controllers/adminAddNewRoom');
//var viewhotels      = require('./controllers/viewHotels');
//var viewroom        = require('./controllers/viewroom');
var hotelEnquiry    = require('./controllers/hotelEnquiry');
var adminAllUsers   = require('./controllers/adminAllUsers');
var register        = require('./controllers/register');
var app  			= express();
var port 			= 3000;


//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(exSession({secret: 'my secret', saveUninitialized: true, resave: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/home', home);
app.use('/', main);
app.use('/home', home);
app.use('/index', index);
app.use('/logout', logout);
app.use('/admindashboard', adminDashboard);
app.use('/userdashboard', userDashboard);
app.use('/addnewhotel', anh);
//app.use('/viewhotels', viewhotels);
//app.use('/viewroom', viewroom);
app.use('/addroom', adminAddNewRoom);
app.use('/register', register);
app.use('/enquiry', hotelEnquiry);
app.use('/allusers', adminAllUsers);
app.use('/assets',express.static('assets'));
app.use('/userdashboard/assets/',express.static('assets'));
app.use('/admindashboard/assets/',express.static('assets'));
app.use('/hotel-room/assets',express.static('assets'));
app.use('/hotel-room/:id/assets',express.static('assets'));
app.use('/viewhotels',express.static('assets'));
app.use('/viewhotels/edit/:id',express.static('assets'));
app.use('/viewroom/edit/:id',express.static('assets'));
app.use('/allusers/edit/:id',express.static('assets'));


//SERVER STARTUP
app.listen(port, ()=>console.log('server started at '+port+"..."));