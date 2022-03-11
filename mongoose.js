const mongoose=require('mongoose');


const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
});


/* 
 const main = async () => {
  let data = new ProductModel({
    name: "Iphone 12",
    price: 6753,
  });
  let res = await data.save();
  console.log(res);
};

main();   */


//Updating database:
/* const updateinDB = async () => {

  await mongoose.connect(
    "mongodb+srv://Osama:rise$123@cluster.s2xkc.mongodb.net/ecommerce"
  );

  const ProductModel = mongoose.model("products", ProductSchema);
  let data = await ProductModel.updateOne(
    { name: "m5" },
    {
      $set: {
        price: "$750",
        name:"P4",
      },
    }
  );

  console.log(data);
};

updateinDB(); */

//Delete in Mongodb:

/*
 const deleteinDB=async()=>{
  await mongoose.connect(
    "mongodb+srv://Osama:rise$123@cluster.s2xkc.mongodb.net/ecommerce"
  );

  const ProductModel = mongoose.model("products", ProductSchema);
  let data=await ProductModel.deleteOne( {name:"P4"});
  console.log(data);

}

deleteinDB(); */



const findinDB=async()=>{
  await mongoose.connect(
    "mongodb+srv://Osama:rise$123@cluster.s2xkc.mongodb.net/ecommerce"
  );

  const ProductModel = mongoose.model("products", ProductSchema);
  let data=await ProductModel.find();
  console.log(data);

}
findinDB();