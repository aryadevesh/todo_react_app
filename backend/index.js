const express = require("express");
const { createTodos } = require("./types");
const { Todoo } = require("./mongoDB");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
    // origin: "http://localhost:5173"
}));

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodos.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You have entered wrong details",
        })
        return;
    }
    await Todoo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    res.json({
        msg: "Todo created",
    })    
})

app.get("/todos",async function(req, res){
    const todos = await Todoo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);
    if(!parsedPayload.success){
        res.json({
            msg: "you have sent the wrong input",
        })
        return;
    }
    await Todoo.updateTodo({
        _id: req.body.id,
    },{
        completed: true,
    })
    res.json({
        msg: "Todo is updated"
    })
    //get the id and change the completed field to true

})




app.listen(3000);