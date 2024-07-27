const express = require("express");
const app = express();

app.use(express.json());
app.post("/health-check", function (req, res, next) {
  //kidneys=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("you haver " + kidneyLength + " kidneys");
});

//global catches
app.use((err, req, res, next) => {
  res.json({
    msg: "Somethin went wrong",
  });
});

app.listen(3000);
