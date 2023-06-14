let mongo = require('mongodb');
const {MongoClient} = require('mongodb');
const url = "mongodb://127.0.0.1/27017";
let Client = new MongoClient(url);
async function dbConnect(){
    await Client.connect()
}

let db = Client.db('amazon');

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