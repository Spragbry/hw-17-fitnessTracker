import mongoose from 'mongoose';
const { Schema } = mongoose;

const exerciseSchema = new Schema({
    type: "exercise", // String is shorthand for {type: String}
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
});
