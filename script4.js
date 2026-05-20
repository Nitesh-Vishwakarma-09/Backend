const express =require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

//Route How To Create a Route 

app.get("/",function(req,res){
  res.send("Champion hai Express")
})

app.listen(3000);

//How To create a Middle-Ware 

app.use(function(req,res,next){
console.log("Middle-Ware Is Running");
next();
})
app.get("/",function(req,res){
res.send("Champion hai Nitesh")
})

// Creating Error Handling 
app.get("/profile",function(req,res,next){
return next(new Error("Not Implement"))
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000);
