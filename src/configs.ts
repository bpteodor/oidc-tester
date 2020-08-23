const configs = {
  "imow@stihl-customers": {
    authURL: "https://stihl-sso.com/auth/oauth2/consumer/authorize",
    tokenURL: "https://stihl-sso.com/auth/oauth2/consumer/access_token",
    clientId: "imow",
    responseType: "code",
    redirectUri: "http://localhost:3000/login",
    scope: "openid profile",
    codeChallenge: "807uIP5fKCcgq2c53iifB9_6LkHtsAqByAGY-Hk0n-Q",
    codeChallengeMethod: "S256",
    codeVerifier: "eeM1jrKS7z3QIDRlzwxMXc2XKfF7DzgqU-qncuHt-HICBKzE",
  },
  "b2c@stihl-dealers.DEV": {
    authURL: "https://stihl.dev-servicelayers.io/auth/oauth2/consumer/authorize",
    tokenURL: "https://stihl.dev-servicelayers.io/auth/oauth2/consumer/access_token",
    clientId: "b2c",
    responseType: "code",
    redirectUri: "http://localhost:4200/",
    scope: "openid profile",
    codeChallenge: "807uIP5fKCcgq2c53iifB9_6LkHtsAqByAGY-Hk0n-Q",
    codeChallengeMethod: "S256",
    codeVerifier: "eeM1jrKS7z3QIDRlzwxMXc2XKfF7DzgqU-qncuHt-HICBKzE",
  },
  "b2c@stihl-dealers.PROD": {
    authURL: "https://stihl-sso.com/auth/oauth2/consumer/authorize",
    tokenURL: "https://stihl-sso.com/auth/oauth2/consumer/access_token",
    clientId: "b2c",
    responseType: "code",
    redirectUri: "http://localhost:8080/stihlmediapool-dev/authCallback.htm",
    scope: "openid profile",
    codeChallenge: "807uIP5fKCcgq2c53iifB9_6LkHtsAqByAGY-Hk0n-Q",
    codeChallengeMethod: "S256",
    codeVerifier: "eeM1jrKS7z3QIDRlzwxMXc2XKfF7DzgqU-qncuHt-HICBKzE",
  },
};

export default configs;
