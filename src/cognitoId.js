import { AWSRegion, AWSConfig, CognitoIdentityCredentials,CognitoUserPool as userPoolId} from './config.js'
import {CognitoUserPool} from 'amazon-cognito-identity-js'

const config = {
    userPool:{
        UserPoolId: userPoolId,
        ClientId: process.env.ClientId, 
    }
}