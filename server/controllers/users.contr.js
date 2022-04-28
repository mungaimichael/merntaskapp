import userModel from "../models/user.model.js";
// import express from "express";
// import cookieParser from "cookie-parser";

// import json web token
import jwt from "jsonwebtoken";
// import bcryptjs
import bcrypt from "bcryptjs";

export const loginUser = async (req, res) => {
  try {
    // get user details from req body

    const { username, password } = req.body;
    // find user by username from db

    const user = await userModel.findOne({ username });

    // if user not found

    if (!user) {
      return res.status(400).json({ msg: "user not found" });
    }

    // check if password is correct by comparing sent user pswd  with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    // if password is incorrect
    if (!isMatch) {
      res.status(400).json({ msg: "invalid name or password" });
    }
    // if password is correct
    else {
      res.cookie("token", generateToken(user._id, user.username), {
        httpOnly: true,
      });
      res.status(201).send({
        id: user._id,
        username: user.username,
        access_token: generateToken(user.id),
      });
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
};

export const createUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json("Please fill your username and password");
  }
  // check if user already exists
  const user = await userModel.findOne({ username });

  if (user) {
    res.status(400).json("User already exists");
  } else {
    // hash password
    const salt = await bcrypt.genSalt();
    const hashedPwd = await bcrypt.hash(password, salt);
    // create user and use hashedPwd as the password

    const createUser = await userModel.create({
      username,
      password: hashedPwd,
    });
    if (createUser) {
      res.status(201).json({
        username: username,
        token: generateToken(createUser._id),
      });
    } else {
      res.status(400).json("Error creating user");
    }
  }
};
// get all users

export const getUser = async (req, res) => {
  try {
    const user = await req.user;
    res.send({ username: user.username, token: generateToken(user._id) });
  } catch (err) {
    res.send(err);
  }
};

// jwt generate token
// the id argument is the user id that we want to encode in the token
export const generateToken = (id, username) => {
  // the user id and username are encoded in the token payload  using jwt.sign()

  return jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
