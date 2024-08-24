
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express()

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://shoubhik:shoubhik@cluster0.tsqcxxf.mongodb.net",
  
).then(console.log("connected ")).catch(console.log("cannoyt "))


const expenseSchema = new mongoose.Schema({
    description : { type : String ,
                    required:true},
    amount : {type : Number ,
        required:true}
})

const Expense = mongoose.model("Expense", expenseSchema);

app.get("/",  (req, res) => {
    res.send({name:" DAs"})
});

app.get("/expenses",async (req,res)=>{
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        console.error("Error fetching expenses:", error);
        res.status(500).json({ message: "Internal Server Error" })
    }
})
app.listen("3000",()=>{console.log("app is running")});





// const db = mongoose.connection;
// db.on("error", (error) => {
//     console.error("MongoDB connection error:", error);
// });
// db.once("open", () => {
//     console.log("Connected to MongoDB");
// });