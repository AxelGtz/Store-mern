import {Strategy,StrategyOptions,ExtractJwt} from 'passport-jwt'
import {user} from '../Models/user';

const opts : StrategyOptions = {
     jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"secreto"
}

export default new Strategy(opts, async (payload,done)=> {
   try {
       const usr = await user.findById(payload.user._id);
       
       if(usr) return done(null,usr);

       return done(null,false)

   } catch (error) {
       console.log(error)
   }
});
