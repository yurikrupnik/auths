import passport from 'passport';
import auth from './auth';
import { createSocialNetworkRoutes } from './utils';

export default (app) => {
    app.use([passport.initialize(), passport.session()]);
    auth(passport);
    createSocialNetworkRoutes(app);
    // return [passport.initialize(), passport.session()];
    return (req, res, next) => {
        return next();
    }
};
