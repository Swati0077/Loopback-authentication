export const credentialSchema = {
  type : 'object',
  required: ['email' , 'password'],
  properties :{
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      minLength:8,

    },


  },
};
export const CredentialRequestBody = {
description: 'The input of login function',
required: true,
content: {
  'application/json': {Schema: credentialSchema},
},
};
