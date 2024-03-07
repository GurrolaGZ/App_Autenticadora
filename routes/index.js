import { Router } from "express";
const router = Router();

let users = [
    {
        id:"1",
        name:"Josue",
        address:"Aña",
        age:85,
    }
]

//POST
router.post('/users/create', (req,res)=>{
    //BODY
    users.push(req.body)
    res.send("ok");
})

//GET
router.get('/users', (req,res)=>{
    res.status(200).json(users)
});

//PUT
router.put('/users/uptade/:id', (req,res)=>{
    const user = users.find(u=>u.id === req.params.id);
    if(!user){
        res.status(404).send("Elrecurso no se encuentra!!!");
        return;
    } 

    const uptadeUser = {...user, ...req.body}

    users = users.map(u=>u.id === req.params.id ? uptadeUser : u);
    res.status(200).send("Usuario actualizado con exito!!!");
})

export default router;