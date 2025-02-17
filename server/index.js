import express from 'express';
import route from './routes/route.js';
import cors from 'cors';
import path from 'path';
import __dirname from './config.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api",route);

app.use(express.static(path.join(__dirname, '../dist')));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.listen(4000 ,() => {
  console.log('Server is running on port 4000');
});