const dbConnect = require("./db");

const insert = async () => {
  const db = await dbConnect();
  /*  let result=await db.insertOne({
        name:"Oppo",
        price:"$875",
    }); */

  let result = await db.insertMany([
    { name: "Redmi 4a", price: "$76" },
    { name: "Iphone 13", price: "$98776" },
    { name: "Nokia", price: "$7609" },
  ]);
  console.log(result);
  if (result.acknowledged) {
    console.log("Data insertion successful!");
  }
};
insert();
