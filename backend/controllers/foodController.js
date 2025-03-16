import { error } from "console";
import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item
    
    // if (!req.file) {
    //     return res.status(400).json({ success: false, message: "Image file is required" });
    // }   

    // let image_filename = `${req.file.filename}`;
    // console.log(req.file);
    const addFood = async (req, res) => {
        try {
            console.log("Received File:", req.file); // Check if file is received
            console.log("Received Body:", req.body); // Check request body
    
            if (!req.file) {
                return res.status(400).json({ success: false, message: "Image file is required" });
            }
    
            let image_filename = `${req.file.filename}`;
    
            // const food = new foodModel({
            //     name: req.body.name,
            //     description: req.body.description,
            //     price: req.body.price,
            //     category: req.body.category,
            //     image: image_filename
            // });

            let food = await foodModel.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                image: image_filename
            })

            if (!food) {
                throw new error("food item not created")
            }

            res.json({ success: true, message: "Food Added" });
    
        } catch (error) {
            console.log("Error in addFood:", error);
            res.status(500).json({ success: false, message: "Server error", error: error.message });
        }
};
    

export {addFood}