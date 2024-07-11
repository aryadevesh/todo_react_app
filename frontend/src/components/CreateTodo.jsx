import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    
    return <div>
        <input style = {{
            padding: 10,
            margin: 10
        }}
        type="text" placeholder="title" onChange={function(e){
            setTitle(e.target.value);
        }}></input> <br />
        <input style = {{
            padding: 10,
            margin: 10
        }}
        type="text" placeholder="description" onChange={function(e){
            setDescription(e.target.value);
        }}></input><br />

        <button style = {{
            padding: 10,
            margin: 10
        }}
        onClick={() =>{
            fetch("http://localhost:3000/",{
                method: "POST",
                body: JSON.stringify({
                    title,
                    description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }} > Add Todo</button>
    </div>
}
