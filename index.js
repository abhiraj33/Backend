//1. Import the express
const express = require('express')
const employeeModel=require('./models')
const cors=require('cors')
//2. 
const app=new express()

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//3.Api creation
app.get('/',(req,res)=>{
    res.send("Message from server")
})
app.get('/trial',(req,res)=>{
    res.send("trial server")
})
    app.post('/trouble',(req,res)=>{
        res.send("troubleshooter")
})
//Deleting a data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req,params);
    let id = req.params.id 
    await employeeModel.findByIdAndDelete(id);
    res.send("Deleted")

})
//4.Port
app.listen(8080,()=>{
    console.log('port is running at 8080');
})
//Api to add datad to db
app.post('/add',async(req,res)=>{
    const result=await new employeeModel(req.body);
    result.save();
    res.send("data added")
})
//Api to view datad from db
app.get('/view',async(req,res)=>{
    let result=await employeeModel.find();
    res.json(result);
})