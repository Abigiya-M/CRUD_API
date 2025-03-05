const mongoose= require("mongoose")

const ProductSchema=mongoose.Schema({
    name:{
        type: String,
        requierd: (true, "Name is required")
    },
    quatity:{
        type: Number,
        requierd: (true, "Quantity is required"),
        default: 0
    },
    price:{
        type: Number,
        requierd:(true, "Price is required"),
        default: 0
    },
    image:{
        type: String,
        requierd: false,
        default: "https://via.placeholder.com/150"
    },
    },
    {
        Timestamps: true
    }

);
const Product= mongoose.model("Product", ProductSchema)
module.exports= Product
// This is the model for the product. It is a simple schema with three fields: name, quantity, and price. The name is a string, and it is required. The quantity is a number, and it is required with a default value of 0. The price is a number, and it is required with a default value of 0. The model is then exported for use in other parts of the application.