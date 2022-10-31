const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/profile", (req, res) => {
  res.status(200).send({
    slackUsername: "iPrevail",
    backend: true,
    age: 21,
    bio: " My name is Prevail Uzodinma from Nigeria. I am a Software Engineer; Back-end || DevOps, currently interning at Zuri",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
