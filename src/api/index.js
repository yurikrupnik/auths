import express from 'express';
import stam from './stam';
import users from './users';
import projects from './projects';
import auth from './auth';

const route = express.Router();

// route.use('auth', auth);
route.use('/api', [
    stam,
    users,
    projects,
    auth
]);

export default route;
