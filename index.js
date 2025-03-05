const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models.product.js'); // Ensure correct path to models.product.js
const productRoutes = require('./routes/product.routes.js'); // Ensure correct path to product.routes.js
const app = express()
const port = 3000

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//routes
app.use('/api/products', productRoutes) 


app.get('/', (req, res) => {
  res.send('Hello Node API')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect("mongodb+srv://abigiyayeshua:gIM2TP719oOk6Cvt@backenddb.zmqcs.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
  console.log('Connected!');
})
.catch(() => {
  console.log("Connection failed");
});
