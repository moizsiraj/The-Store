import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      'mongodb+srv://moiz:siraj1969@the-store.upxjr.mongodb.net/thestore?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    console.log(`${connect.connection.host}`);
  } catch (e) {
    console.log(process.env.MONGO_URI);
    console.log(`${e.message}`);
    process.exit(1);
  }
};

export default connectDB;
