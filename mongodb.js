
const dbConnect=require('./db');
/* async function main() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("ecommerce");
  let resp = await collection.find().toArray();
  console.log(resp);
} */

//main();


//handling a db connect through promise:

/* dbConnect().then((resp) => {
  resp
    .find()
    .toArray()
    .then((data) => {
      console.warn(data);
    });
}); */

//handling a db connect through async await:

const main= async ()=>{
  let data = await dbConnect();
  data= await data.find().toArray();
  console.warn(data);
}

main();