 import dotenv from "dotenv";
import express  from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from 'passport-local-mongoose';
import cors from "cors";
import jwt from "jsonwebtoken";
import {jwtDecode} from "jwt-decode";
dotenv.config();
const port=process.env.PORT||8000;

const app=express();

app.use(cors());
// const corsOptions ={
//     origin:process.env.ORIGIN_URI, 
//     credentials:true,            
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret:process.env.PRIVATE_KEY,
    resave:false,
    saveUninitialized:true,
    cookie:{
      maxAge:500000000,
    }
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.set("strictQuery",false);
mongoose.connect("mongodb+srv://"+process.env.MONGODB_UID+":"+process.env.MONGODB_PWD+"@cluster0.5on0u08.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema=new mongoose.Schema({
    username: {type:String,unique:true},
    name: {type:String},
    token:{default:" ",type:String},
    // token:{default:" ",type:String,unique:true},
    password: String,
});

userSchema.plugin(passportLocalMongoose);

const User=mongoose.model("User",userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, {
            username: user.username
        });
    });
});
passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


// app.get("/",(req,res)=>{
//   jwt.sign({ email: 'aritrapal073@gmail.com' }, process.env.JWT_KEY, function(err, token) {
//     if(err)
//     {
//       console.log(err);
//     }
//     else
//     {
//       console.log(token);
//       const decode=jwt.decode(token, process.env.JWT_KEY);
//       console.log(decode);
//     }
//   });
//   res.send("Hello World");
// });

app.post("/register",(req,res)=>{
    User.register({username:req.body.email,name:req.body.name},req.body.password,(err,user)=>{
        if(err)
        {
          // console.log(err);
          res.send(err);
        }
        else
        {

          // passport.authenticate('local', function(err, user, info, status) {
          //   if (err) { console.log(err); }
          //   if (!user) { console.log("no user"); }
          // })(req, res);


          user.save();
          
          jwt.sign({ email: req.body.email }, process.env.JWT_KEY, async(err, token)=> {
            if(err)
            {
              // console.log(err);
              res.send(err);
            }
            else
            {
              // console.log(req.body.email);
              // console.log(token);
              await User.findOneAndUpdate({username:req.body.email},{token:token},{returnOriginal:false}).then((e)=>{console.log(e);});
              res.send(token);
            }
          });
        }
    });
});
app.post("/login",(req,res)=>{
    passport.authenticate("local")(req,res,()=>{
      jwt.sign({ email: req.body.username }, process.env.JWT_KEY, async(err, token)=> {
        if(err)
        {
          // console.log(err);
          res.send(err);
        }
        else
        {
          console.log(jwtDecode(token));
          // console.log(req.body.email);
          // console.log(token);
          await User.findOneAndUpdate({username:req.body.email},{token:token},{returnOriginal:false}).then((e)=>{console.log(e);});
          res.send(token);
        }
      });
    });

});

app.listen(port,()=>{
    console.log("Server started at port :"+port);
});