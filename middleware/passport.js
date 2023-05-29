const passport=require('passport')
const User=require('../models/User')

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const  opts = {
jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey : process.env.JWT_SECRET
}

passport.use(
    new JwtStrategy(opts,async(jwt_payload,done)=>{
        try {
            const user=await User.findOne({_id:jwt_payload.id}).select("-password")
            

                user?done(null,user):done(null,false)
                // how client connecter 
            // req.user=user  
            // 
             
        } catch (error) {
            console.log(error)
            
        }

}))

module.exports=isAuth=() =>
    passport.authenticate('jwt',{session:false})

