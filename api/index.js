import express from 'express';
import mongoose from 'mongoose';
import dotenv  from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


dotenv.config();
mongoose.connect(process.env.MONGO)
.then( () => {
    console.log('Connection to DB successful')
})
.catch( (err) => {
    console.log(err);
});


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://amgeed:Y1b88ILhRhHZrmMP@cluster0.nhyvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
});


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!';

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})

