/**
* call library
*/
const db = require('../config/database')
const User = require('../models/User')
const Bill = require('../models/Bill')
const booking = require('../models/Booking')
const Chef = require('../models/Chef')
const Customer = require('../models/Customer')
const Waiter = require('../models/Waiter')
const Drink = require('../models/Drink')
const Food = require('../models/Food')
const Table = require('../models/Table')

// Users Seeder
let users = [
    new User({
        _id : ("5e946cbe64937321dc961e5e"),
        role : "adminstrator",
        Fname : "Harsha",
        LName : "Rathi",
        Contact : "9421541735",
        email : "adminstrator@gmail.com",
        password : "$2a$08$kmk4DRv5jcCRhNKk0OTBhuze6zKitBOSoSoFKQ/qVKinoVbXzVXkm",
        avatar : "profile.png",
        created_at : ("2020-04-13T13:44:30.521Z")
    })
    
    ]

// excute loop all objects
users.forEach( (users)=> {
    users.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})
