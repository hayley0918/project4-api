if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require("express")
const app = express()
const cors = require('cors')
const pool = require('./db')
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
    passport, 
    email => users.find(user=>user.email === email),
    id => users.find(user=>user.id === id)
)

app.use(express.unlencoded({extended:false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', checkAuthenticated, (req, res)=>{
    res.send('hello')
})

app.get('/users', (req,res)=>{
    res.json(users)
})

// create account
app.post('/signup', checkNotAuthenticated, async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        st_number: req.body.st_number,
        address_street: req.body.address_street,
        address_suburb: req.body.address_suburb,
        address_state: req.body.address_state,
        postcode: req.body.postcode
      })
      res.redirect('/login')
    } catch {
      res.redirect('/signup')
    }
})

// login
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

// create item

//get items
app.get("/items", async(req, res)=>{
    try{
        const allItems = await pool.query("select * from items")
        res.json(allItems.rows)
    }catch(err){
        console.error(err.message)
    }
})

// update item

// delete item


app.delete('/logout', (req, res)=>{
    req.logOut()
    res.redirect('/login')
})


function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }

    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}


app.listen(5000, ()=>{
    console.log("server has started on port 5000")
})