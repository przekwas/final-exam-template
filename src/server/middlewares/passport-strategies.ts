import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import * as JwtStrategy from 'passport-jwt';
//import db from '../db';
import { comparePasswords } from '../utils/passwords';
import type { IPayload } from '../utils/tokens';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
	new LocalStrategy.Strategy({ usernameField: 'email' }, async (email, password, done) => {
		try {
			//const [user] = await db.users.find('email', email);
			// if(user && comparePasswords(password, user.password)) {
			//     delete user.password;
			//      done(null, user);
			// } else {
			//     done(null, false);
			// }
		} catch (error) {
			done(error);
		}
	})
);

passport.use(
	new JwtStrategy.Strategy(
		{
			jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'final-exam-secret-lol'
		},
		async (payload: IPayload, done) => {
			try {
				//const [user] = await db.users.one(payload.userid);
				// if (user) {
				// 	delete user.password;
				// 	done(null, user);
				// } else {
				// 	done(null, false);
				// }
			} catch (error) {
				done(error);
			}
		}
	)
);
