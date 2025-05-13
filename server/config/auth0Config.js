import { auth } from "express-oauth2-jwt-bearer";
const jwtCheck = auth({
  audience: "https://dev-emz287qsrkzdow6m.us.auth0.com/api/v2/",
  issuerBaseURL: "https://dev-emz287qsrkzdow6m.us.auth0.com",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
