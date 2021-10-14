import express from 'express';

import { connectMongoDB } from './db_config/db.js';
//import mydb from './db_config'
import { FoodModel } from './models/food.js'
const app = express();
app.use(express.json());

const port = 5100;

app.get('/', (req, res) => {
    console.log("Welcome to Easyway")
});

// this line of code allowed you fatch data from database
app.get("/foods", async (req, res) => {
    try {
        const foodList = await FoodModel.find({})
        return res.json(foodList)
    } catch (error) {
        console.log("Something wrong", error);
        return res.status(400).send(`Failed to fetch data ${error}`);
    }
});

app.post('/foods/', async (req, res) => {
    try {
        const addFood = await FoodModel.create({ ...req.body });
        return res.json(addFood)
    } catch (error) {
        console.log("something is wrong" + error);
        res.status(400).send('Failed to add food')
    }

}),

    app.patch('/foods/:id', async (req, res) => {
        try {
            const addFood = await FoodModel.findByIdAndUpdate(req.params.id, { ...req.body });
            return res.send(addFood)
        } catch (error) {
            console.log("something is wrong" + error);
            res.status(400).send('Failed to update food')
        }
    }),
    app.delete('/foods/:id', async (req, res) => {
        try {
            await FoodModel.findByIdAndDelete(req.params.id, { ...req.body });
            return res.send(addFood)
        } catch (error) {
            console.log("something is wrong" + error);
            res.status(400).send('Failed to delete food')
        }
    }),
    connectMongoDB();
app.listen(port, () => console.log("server is up and running"));

