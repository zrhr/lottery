import{
    config as AWSConfig,
    CognitoIdentityCredentials,
    Lambda
} from 'aws-sdk'
const AWSRegion =process.env.COGNITO_REGION

const  UserPoolId = process.env.env.COGNITO_USER_POOL
    

export { AWSRegion, AWSConfig, CognitoIdentityCredentials, Lambda }

