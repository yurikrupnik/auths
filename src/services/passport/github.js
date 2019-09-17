
import FacebookStrategy from 'passport-github';
import { socialNetworkStrategy } from './utils';

const secrets = require('./secrets.json');

export default new FacebookStrategy(secrets.github, socialNetworkStrategy);
// facebook will send back the token and profile
