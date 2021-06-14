import mongoose from 'mongoose';
import users from './data/user.js';
import products from './data/products.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const admin = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: admin,
      };
    });

    await Product.insertMany(sampleProducts);
    process.exit();
  } catch (e) {
    console.log(e.message);
  }
};

const deleteData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    process.exit();
  } catch (e) {
    console.log(e.message);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
