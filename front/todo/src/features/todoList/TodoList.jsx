import {useEffect, useState} from "react";
import axios from 'axios';
import {Todo} from "./Todo.jsx";
import {
    Box,
    Button,
    List,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import './TodoList.css'

export function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        let unmounted = false;
        axios.get('http://localhost:3000/todos/get')
            .then((respond)=>{
                if(!unmounted){
                    console.log(respond)
                    setTodos([...respond.data])
                }
            })
            .catch(e=>{
                console.log(e)
            })

        return ()=>{
            unmounted = true
        }
    },[]);


    async function handleAddTask(){
        if(newTask){
            const result = await axios.post('http://localhost:3000/todos/post', {title: newTask});
            //alert('Posted successfully!');

            setTodos([...todos,result.data])
            setNewTask('')
        }
        else{
            console.log('Task shouldn\'t be empty.')
        }
    }


    async function handleDeleteTask(id){
        const result = await axios.delete('http://localhost:3000/todos/delete',{data:{id:id}});
        //alert('Deleted successfully!');

        const newTodos = todos.filter(todo=>todo._id!=result.data._id);
        console.log(newTodos)
        setTodos([...newTodos])

        // setTodos([...todos,result.data])
        setNewTask('')
    }


    return (
        <Box sx={{width:{xs:'100%', md:'80%'}, minWidth:'500px'}} display="flex" justifyContent="center" flexDirection='column' alignItems='center'>

            <Box sx={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:'column' }}>
                <TextField sx={{width:{xs:'100%', md:'80%'}}} label="New Task" variant="outlined" type='text' value={newTask} onChange={e=>{setNewTask(e.target.value)}} />
                <Button sx={{width:{xs:'100%', md:'80%'}}} variant="outlined"  onClick={handleAddTask}>Create</Button>
            </Box>

            <TableContainer sx={{width:{xs:'100%', md:'80%'}, alignSelf:'center'}} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Task</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map(todo=>{
                            return <Todo key={todo._id} todo={todo} handleDeleteTask={handleDeleteTask}/>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>


            {/*<TextField sx={{width:{sm:'100%', md:'80%'}}} label="New Task" variant="outlined" type='text' value={newTask} onChange={e=>{setNewTask(e.target.value)}} />*/}
            {/*<Button sx={{width:{sm:'100%', md:'80%'}}} variant="outlined"   onClick={handleAddTask}>Create</Button>*/}
            {/*<List sx={{ width: {xs:'100%', md:'80%'}}}>*/}
            {/*    {todos.map(todo=>{*/}
            {/*        return <Todo key={todo._id} todo={todo} handleDeleteTask={handleDeleteTask}/>*/}
            {/*    })}*/}
            {/*</List>*/}
        </Box>
    );
};