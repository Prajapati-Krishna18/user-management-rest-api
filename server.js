require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// Load environment variables (Moved to top)

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

const detailUser = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
        trim:true
    },
    email:{
        type:String,
        lowercase:true,
        unique:true
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[1,"Age must be at least 1"]
    },
    gender:{
        type:String,
        required:true
    }
});

const getData = mongoose.model('UserDetails', detailUser);

app.post("/addData", async (req, res) => {
    try {
        const user = await getData.create(req.body);
        res.status(200).json(user);
    }
    catch (err) {
        return res.status(404).json({ message: "Data not Added" });
    }
});

app.get("/getData", async (req, res) => {
    try {
        const getUser = await getData.find();
        res.status(200).json(getUser);
    }
    catch {
        return res.status(404).json({ message: "Data not Found" });
    }
});

app.put("/updateData/:id",async(req,res)=>{
    const userId = req.params.id;
    try{
        const updateData = await getData.findByIdAndUpdate(userId,req.body,{returnDocument:"after"});
        res.status(200).json(updateData);
    }
    catch{
        return res.status(404).json({message :"Data not updated"});
    }
});

app.patch("/updateField/:id",async(req,res)=>{
    const userId = req.params.id;
    try{
        const updateField = await getData.findByIdAndUpdate(userId,req.body,{returnDocument:"after"});
        res.status(200).json(updateField);
    }
    catch{
        return res.status(404).json({message :"Data not updated"});
    }
});

app.delete("/deleteData/:id",async(req,res)=>{
    const userId = req.params.id;
    try{
        const dataDelete = await getData.findByIdAndDelete(userId);
        res.status(200).json(dataDelete);
    }
    catch{
        return res.status(404).json({message :"Data not Deleted"});
    }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
