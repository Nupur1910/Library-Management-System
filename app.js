const express = require("express");
const port = 3000;
const app = express();
const db = require("./database");

app.use(express.json());

const bookRouter = require("./routes/book");
const bookRouter1 = require("./routes/book1");

app.use("/book", bookRouter);
app.use("/book1", bookRouter1);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
