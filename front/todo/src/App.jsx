import './App.css'
import {TodoList} from "./features/todoList/TodoList.jsx";
import {Header} from "./components/Header.jsx";

function App() {
  return (
    <>
        <Header/>
        <TodoList/>
    </>
  )
}

export default App
