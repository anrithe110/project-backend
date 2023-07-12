const db = require("./db");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }, 
    isadmin:{
        type: Boolean 
    }
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = User;
