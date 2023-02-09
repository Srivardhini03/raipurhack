const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const PORT = 3000;


// ========================= CONNECTING TO DATABASE =========================

const uri = process.env.DATABASE;

mongoose.set('strictQuery', false);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to database');
  });

  
// =================================================================================



app.get('/', (req, res) => {
  res.send("Hello");
})


app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
  })