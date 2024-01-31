import mongoose from "mongoose";

const connectdb = async () => {
  await mongoose.connect(
    "mongodb+srv://my_database:bBBAbuWkn8LKZpAJ@cluster0.rp9vsvt.mongodb.net/UpSkill"
  );

  console.log(`MongoDb is running on port: ${process.env.PORT}`);
};

export default connectdb;
