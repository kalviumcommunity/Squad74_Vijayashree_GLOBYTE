const express=require('express');
const app=express();
const PORT=5000;

const authRoutes=require('./routes/authRoutes');

app.use(express.json());
app.use('/api/auth',authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Globyte backend API');
  });
  
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});