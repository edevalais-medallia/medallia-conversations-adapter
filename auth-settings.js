module.exports = {

  //OAuth config for inbound
  oauthConfig: {
    tokenUrl: `${process.env.CONVO_API_GATEWAY}/oauth/token`,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
  //for authTypeInbound Signature
  secret: process.env.SHARED_SECRET,

  // authType can be 'OAuth' or 'API-Token'
  authTypeOutbound: process.env.AUTH_TYPE_OUTBOUND,

  // for outbound request API-Token verification (i.e. requests coming from MC)
  accessToken: process.env.ACCESS_TOKEN,

  // This is the OAuth client configuration (adapter acting as client to MC as OAuth server)
  // This is for a dummy OAuth server, that will be used to issue this fixed access token
  // and verify that MC sends it in the Authorization header
  oauthServer: {
    tokenPath: '/token',
    clients: {
      'ConversationsClient': 'S3cr3t123!'
    }
  }
};
