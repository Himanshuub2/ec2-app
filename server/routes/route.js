import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    const details = ["himansu",'second',"third","fourth"]
  res.send({
    message:"success",
    details
  });
});

router.post('/user',(req,res)=>{
    const {name} = req.body;
    const newName = name + "- NEW "
    res.send({
        message:"success",
        newName
    })
})

export default router;