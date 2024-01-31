import mongoose from "mongoose";

const connectdb = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDb is running on port: ${process.env.PORT}`);
};

export default connectdb;
