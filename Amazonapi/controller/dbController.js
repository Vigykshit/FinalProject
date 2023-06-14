let mango = require('mongodb');
let{MongoClient} = require('mongodb');
let(mongoUrl) = "Mongodb://127.0.0.1/27017";
let Client = new Mongoclient(Url);
async function dbConnect(){
    await client.connect()
}

let db = client.db('amazon');

async function getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.closed
    } catch(err){
        output.push({"Error":"Error in getData"})
    }
    return output
}
module.exports = {
    dbConnect,
    getData,
}