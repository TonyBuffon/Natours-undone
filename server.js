const mongoose = require('mongoose');
const dotenv = require('dotenv');
// process.on('uncaughtException', err => {
//   console.log('UNCAUGHT EXCEPTION!! ..... Shuting down...')
//   console.log(err.name, err.message)
//   process.exit(1);

// })

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE_LOCAL;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`App running on ${port}......`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLER REJECTION!! ..... Shuting down...')
  console.log(err.name, err.message)
  server.close(() => {
    process.exit(1)
  })
})