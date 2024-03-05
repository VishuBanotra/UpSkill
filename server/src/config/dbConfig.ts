import mongoose from "mongoose";

const connectdb = async () => {
  await mongoose.connect(String(process.env.MONGO_URI), { dbName: "UpSkill" });

  console.log(`MongoDb is running on port: ${process.env.PORT}`);
};

export default connectdb;
