//import express from "express";
// import env from "dotenv";
// import { createClient } from "@supabase/supabase-js";
const express = require("express");
const env = require("dotenv").config();

const createClient = require("@supabase/supabase-js");
const app = express();
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
env.config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log("Time: ", Date.now());
  next();
});

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.listen(process.env.PORT, () =>
  console.log(
    new Date().toLocaleTimeString() +
      `: Server is running on port ${process.env.PORT}...`
  )
);
