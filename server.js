const express = require('express')
const app = express()
const port = 3000
const path=require("path");
const users=require("./routes/users.js")

app.use(express.json());
app.use("/api/users", users);

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`))