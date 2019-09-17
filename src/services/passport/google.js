
import GoogleStrategy from 'passport-google-oauth20';
import { socialNetworkStrategy } from './utils';

const secrets = require('./secrets.json');

export default new GoogleStrategy(secrets.google, socialNetworkStrategy);
// facebook will send back the token and profile
