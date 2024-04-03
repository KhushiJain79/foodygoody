const connectDB = require('./db');
const express = require('express');

const cors = require('cors');

const app = express();
connectDB();
const port = 5000;
app.use(cors());
app.use(express.json());

// Available routes
app.use('/api/fetchdata', require('./routes/fetchdata'));

// data=async()=>{
//   const client = new MongoClient('mongodb://localhost:27017');
//   try {
 

//     // Select the database
//     const db = client.db('fooddatabase');

//     // Select the collection
//     const collection = db.collection('Meal');

//     // Now you can perform operations on the collection
//     // For example, you can execute queries like:
//     const result = await collection.find({}).toArray();
//     console.log('Documents in the collection:', result);
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   } finally {
//     // Ensure the client is closed when you're finished
//     await client.close();
//   }
// }


app.listen(port, () => {
  console.log(`foodVita listening on port http://localhost:${port}`);
});

