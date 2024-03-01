import dotenv from "dotenv";
import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
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
      maxAge:50000,
    }
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.set("strictQuery",false);
mongoose.connect("mongodb+srv://"+process.env.MONGODB_UID+":"+process.env.MONGODB_UID+"@cluster0.5on0u08.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema=new mongoose.Schema({
    username: {type:String,unique:true},
    email: {type:String,unique:true},
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


app.post("/register",(req,res)=>{
    User.register({username:req.body.username,email:req.body.email},req.body.password,(err,user)=>{
        if(err)
        {
          console.log(err);
          res.send(err);
        }
        else
        {
          passport.authenticate("local")(req,res,()=>{
            req.session.user = user.username;
            req.session.save((err)=>{
              if(err)
              {
                  console.log(err);
                  res.send(err);
              }
              else
              {
                  res.send(req.body);
              }
            });
          });
        }
    });
});
app.post("/login",(req,res)=>{
    const user=new User({
        username:req.body.username,
        password:req.body.password
    });
    req.login(user,(err)=>{
      if(err)
        {
          throw err;
        }
        else
        {
            passport.authenticate("local")(req,res,()=>{
                req.session.user = user.username;
                req.session.save((err)=>{
                  res.send(req.body);
                });
            });
        }
    });
});

app.listen(port,()=>{
    console.log("Server started at port"+port);
})