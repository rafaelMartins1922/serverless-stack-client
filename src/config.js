const config = {
    STRIPE_KEY: "pk_test_51I4WLxD1dNNSRbMLVttwuPvffCeVivpEQIsKjt2Kn177Pf4JvQ7MJpa2AE44S5tFAPO8fBUUFZT5lOxV8txqPfid006RQzXTg5",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "n0t3s-4p1",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://bno7lr9q5g.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_h8OwxGaNf",
      APP_CLIENT_ID: "24lqm3m6kas6g7m8t4d610nkus",
      IDENTITY_POOL_ID: "us-east-1:6939d3de-cf4f-4d45-aa0a-8c6cd4d459d0",
    },
  };
  
  export default config;
  