const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./configs/mongoose");

const app = express();

const PORT = 8000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cookies
app.use(cookieParser());
// allow cors and set origin and credentials for cookies
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// routes
app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
