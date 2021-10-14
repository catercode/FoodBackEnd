import mongoose from 'mongoose';
//extraction these from the ongoose package
//prp tip: read more on array and object description in js
const { Schema, model } = mongoose;
// // create a food schema
// // this will create colunm in my database
const foodSchema = Schema({
    image: String,
    food_name: String,
    category: String,
    price: Number,
    rating: Number,
    reviewsCount: Number,
    ingredients: String,
    description: String
})
// this export help you to access the model globally
export const FoodModel = model('foodCollection', foodSchema);
