const express = require("express");
const dbConnect = require("./db");
const mongodb=require('mongodb')
const app = express();

 app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();

  res.send(data);
});
 
//posting data from postman:
app.use(express.json());

/* app.post('/',async(req,resp)=>{
    let data = await dbConnect();
    let result =await data.insertOne(req.body);
    resp.send(result);

}) */

/* app.put('/:name',async(req,resp)=>{
 let data=await dbConnect();
/*  let result=await data.updateOne({name:req.body.name},{$set:req.body}); 
let result=await  data.updateOne(
  {name:req.body.name},
  {$set:{name:req.params.name}}
  )
  resp.send("update");
}) */


app.delete('/:id',async(req,resp)=>{
  let data=await dbConnect();
  let result=await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
  resp.send(result);
})

app.listen(5500);
