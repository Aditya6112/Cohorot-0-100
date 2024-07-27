const express = require("express");
const app = express();
app.use(express.json());
function usermiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username !== "aditya" || password !== "aditya") {
    res.status(403).json({ msg: "Invalid username or password" });
  } else {
    next();
  }
}

function kidneymiddleware(req, res, next) {
  if (kidneyId !== 1 || kidneyId !== 2) {
    res.satatus(403).json({ msg: "Invalid kidneyId" });
  } else {
    next();
  }
}

app.get("/health-check", usermiddleware, kidneymiddleware, function (req, res) {
  res.send("Everythig is fin your kidney is safe");
});

app.listen(3000);
