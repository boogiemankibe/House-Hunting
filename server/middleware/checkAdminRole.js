import jwtCheck from "../config/auth0Config.js";

// Middleware to check if the user has the Admin role
const checkAdminRole = (req, res, next) => {
  const namespace = "https://dev-emz287qsrkzdow6m.us.auth0.com/roles"; // Replace with your Auth0 namespace
  const roles = req.auth?.[namespace]; // Extract roles from the token using the namespace

  if (roles && roles.includes("Admin")) {
    next(); // User is allowed, proceed to the next middleware or controller
  } else {
    res.status(403).send({ message: "Unauthorized: Admin access required" }); // User is not an admin
  }
};

export { jwtCheck, checkAdminRole };
