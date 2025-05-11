import { auth } from "express-oauth2-jwt-bearer";
const jwtCheck = auth({
  audience: "https://dev-emz287qsrkzdow6m.us.auth0.com/api/v2/",
  issuerBaseURL: "hhttps://dev-emz287qsrkzdow6m.us.auth0.com/api/v2/issues",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
