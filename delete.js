const dbConnect=require('./db');


const deleteData = async()=>{
    let data=await dbConnect();
    //let result=await data.deleteOne({name:'Iphone 13'});
let res=await data.deleteMany({name:'Mi 4'})
    if(res.acknowledged){
        console.log("data deletion successful!")

    }


}

deleteData();