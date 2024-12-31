import {useState} from "react";
import axios from "axios";
import {Button, ListItemText, TableCell, TableRow, TextField} from "@mui/material";
import './Todo.css'

// eslint-disable-next-line react/prop-types
export function Todo({todo, handleDeleteTask}) {

    const [editable, setEditable] = useState(false);
    const [editContent, setEditContent] = useState("");
    // eslint-disable-next-line react/prop-types
    const [task, setTask] = useState(todo.title);
    // eslint-disable-next-line react/prop-types
    const [completed, setCompleted] = useState(todo.completed);


    async function handleEdit(){
        try{
            if(editable==true && editContent){
                const result = await axios.put('http://localhost:3000/todos/put/'+todo._id,{title:editContent});
                console.log(result)
                setTask(result.data.title)
            }
            setEditable((prevState) => !prevState);
        }
        catch(error){
            alert(error)
        }
    }

    async function handleComplete(){
        if(completed==false){
            try{
                await axios.put('http://localhost:3000/todos/complete/'+todo._id);
                setCompleted(true)
            }
            catch(error){
                alert(error)
            }
        }
        else{
            alert("Already completed!");
        }

    }


    return (
        <TableRow sx={{width:1}}  key={todo._id} value={todo._id}>

            <TableCell align='center'>
                {editable==false?
                    <ListItemText sx={{width:'100%'}}>{task}</ListItemText> :
                    <TextField label="New Task" variant="outlined" type='text' onChange={e=>setEditContent(e.target.value)} />
                }
            </TableCell>

            <TableCell align='center'>
                <ListItemText> {!completed ? 'Uncompleted' : "Completed"} </ListItemText>
            </TableCell>

            <TableCell align='center'>
                <Button variant="outlined" type='button' disabled={editable} onClick={handleComplete}>Complete</Button>
                <Button variant="outlined" type='button' onClick={handleEdit}> {editable==false?"Edit":"Done"} </Button>
                <Button variant="outlined" type="button" disabled={editable} onClick={() => handleDeleteTask(todo._id)}>Delete</Button>
            </TableCell>

        </TableRow>
    );
};