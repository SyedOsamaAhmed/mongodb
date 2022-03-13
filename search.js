const products = require("./product");
const express = require("express");
require("./config");
const app = express();
app.use(express.json());

//Search filter node js:

app.get("/search/:key", async (req, resp) => {
  console.log(req.params.key);
  let find = await products.find({
    $or: [
      { name: { $regex: req.params.key } },
    /*   { brand: { $regex: req.params.key } }, */
    ],
  });

  resp.send(find);
});

app.listen(5000);
