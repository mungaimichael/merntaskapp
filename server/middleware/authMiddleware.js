// Purpose: This file contains the middleware for authentication
//          and authorization

import jwt from "jsonwebtoken";

import userModel from "../models/user.model.js";

export const protect = (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // get token from the authorization headers

      token = req.headers.authorization.split(" ")[1];

      // verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from token payload and validate user

      req.user = userModel.findOne({
        _id: decoded.id,
      });
      req.id = decoded.id;

      next();
    } catch (err) {
      console.log(err.message);
      return res.status(401).json({
        message: "Auth failed",
      });
    }
  }
  if (!token) {
    res.status(401).json({ msg: "please log in first" });
  }
};
