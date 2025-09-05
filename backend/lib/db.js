// import mongoose from "mongoose";

// // function to connect to the mongodb database
// export const connectDB = async () => {
//   try {
//     mongoose.connection.on("connected", () =>
//       console.log("Database Connection")
//     );
//     await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);
//   } catch (error) {
//     console.log(error);
//   }
// };

import mongoose from "mongoose";

// function to connect to the mongodb database
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connection")
    );
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI is not set");
    }
    await mongoose.connect(mongoUri);
  } catch (error) {
    console.log(error);
  }
};
