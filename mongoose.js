const mongoose=require('mongoose');


const main=async()=>{

  await mongoose.connect("mongodb+srv://Osama:rise$123@cluster.s2xkc.mongodb.net/ecommerce");

  const ProductSchema=new mongoose.Schema({
      name:String,
      price:String
  });

  const ProductModel=mongoose.model('products',ProductSchema);
  let data=new ProductModel({name:"Iphone 13",price:"$1983"});
  let res=await data.save();
  console.log(res);

}

main();