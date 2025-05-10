const express=require('express');
const app=express();
require('dotenv').config();
const connectDB=require('./config/db');
connectDB();
const PORT=5000;

const freelancerRoutes = require('./routes/freelancerRoutes');
const clientsRoutes = require('./routes/clientsRoutes');

app.use(express.json());
app.use('/api', freelancerRoutes);
app.use('/api', clientsRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Globyte backend API');
  });
  
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});