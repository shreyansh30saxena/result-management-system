const express= require('express');
const authController = require('../controllers/auth');

const router = express.Router();

  
router.get('/courses',authController.isLoggedIn,(req, res, next) => {
    if(req.user == undefined) {
      res.render('login');
      }
});
router.get('/viewrecords',authController.isLoggedInteacher,(req, res, next) => {
  if(req.user == undefined) {
    res.render('editStudent');
    }
});

router.get('/login', authController.isLoggedIn, (req, res) => {
   if(req.user == undefined) {
     res.render('login');
   }
});
router.get('/admin', authController.isLoggedInadmin, (req, res) => {
  if(req.user == undefined) {
    res.render('adminlogin');
  }

});
router.get('/loginteacher', authController.isLoggedInteacher, (req, res) => {
  if(req.user == undefined) {
    res.render('teacherlogin');
  }
});
router.get('/registerteacher', authController.isLoggedIn, (req, res) => {
  if(req.user == undefined) {
    res.render('teacherregister');
  }
});

router.get('/register', (req,res) => {
    res.render('register');
});

router.get('/index', (req,res) => {
    res.render('index');
});

router.get('/about', (req,res) => {
  res.render('about');
});

router.get('/contact', (req,res) => {
  res.render('contact');
});

module.exports = router;