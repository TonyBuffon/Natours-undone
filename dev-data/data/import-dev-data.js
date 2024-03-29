const fs = require('fs');
const mongoose = require('mongoose');
const Tour = require('../../models/tourModel');
const User = require('../../models/userModel');
const Review = require('../../models/reviewModel');
const dotenv = require('dotenv');

dotenv.config({ path: '../../config.env' });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

// Read Json File
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours.json`, 'utf-8')
);
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/users.json`, 'utf-8')
);
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8')
);

//  IMPORT DATA TO DATABASE
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data1 successfully loaded!');
    await User.create(users, { validateBeforeSave: false });
    console.log('Data2 successfully loaded!');
    await Review.create(reviews);
    console.log('Data3 successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//  DELETE ALL DATA FROM DB

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data1 successfully deleted!');
    await User.deleteMany();
    console.log('Data2 successfully deleted!');
    await Review.deleteMany();
    console.log('Data3 successfully deleted!');

  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
