import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async() => {

    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;
    try{
        await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.pbu4g.mongodb.net/`, {useNewUrlParser: true});
        console.log("Database connected successfully");
    }catch(error){
        console.error('Error while connecting the database', error.message);
    }
}

export default DBConnection;




























// var MongoClient = require('mongodb').MongoClient;

// var uri = "mongodb://user:yashdt50@gmail.com@ac-afyagky-shard-00-00.dvlux7s.mongodb.net:27017,ac-afyagky-shard-00-01.dvlux7s.mongodb.net:27017,ac-afyagky-shard-00-02.dvlux7s.mongodb.net:27017/?ssl=true&replicaSet=atlas-11hxak-shard-0&authSource=admin&retryWrites=true&w=majority";
// MongoClient.connect(uri, function(err, client) {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
