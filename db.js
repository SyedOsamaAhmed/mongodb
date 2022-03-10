const { MongoClient } = require('mongodb');
const uri =
  "mongodb+srv://Osama:rise$123@cluster.s2xkc.mongodb.net/mydatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = "mydatabase";


async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("ecommerce");
  }


  module.exports=dbConnect;