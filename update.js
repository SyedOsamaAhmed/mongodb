const dbConnect = require("./db");

const updateData = async () => {
  let db = await dbConnect();
  let res = await db.updateOne(
    { name: "Samsung" },
    { $set: { price: "$1650" } }
  );
  console.log(res);
};

updateData();
