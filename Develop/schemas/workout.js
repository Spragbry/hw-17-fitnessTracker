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

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker-msu',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  