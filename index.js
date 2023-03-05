require("dotenv").config();
const express = require("express");
const dns = require("dns");
const cors = require("cors");
const app = express();
const indexRoute = require("./routes/indexRoute");
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/public", express.static(`${process.cwd()}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/views/index.html");
});

app.use("/", indexRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
