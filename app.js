const express = require("express");
const morgan = require("morgan");

const skillsRouter = require("./routes/skillsRoute");
const profileRouter = require("./routes/profileRoute");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(function (_, res, next) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://omar-naeem-portfolio.netlify.app/"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.use((req, res, next) => {
  console.log("hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/skills", skillsRouter);
app.use("/api/v1/profile", profileRouter);
// app.use('/api/v1/users', userRouter);

module.exports = app;
