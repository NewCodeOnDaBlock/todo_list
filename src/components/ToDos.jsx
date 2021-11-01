import React, {useState } from 'react';
import checkmark from '/Users/radenlmantuano/Desktop/mern_projects/todo_list/src/images/check-solid (1).png';
import './ToDos.css';

//Find what part of the project that is frequently updated
// a Todo is frequently updated 
// the Todo list is frequently updated 

const ToDos = (props) => {
    
    const [todos, setTodos] = useState(""); //declaration of todo state
    const [todolist, setToDolist] = useState([]); //declaration of todolist state
    // const [completemessage, setCompletemessage ] = useState("");


const createTodo = (e)=> {
    e.preventDefault();

    if(todos.length === 0){ // this checks to see if input is empty 
        return;

    } else {

        setToDolist([todos, ...todolist]);
        setTodos("");
    }
}

const toDoInput = (e) => {
    setTodos(e.target.value);

}

const deleteToDo = (todoIdx) => { // DeleteToDo is executed when onClick 
    const filteredTodos = todolist.filter((todos, i) => { // will create a new array by using the filter method
        return i !== todoIdx; // if the current item does not match the item being passed through parameters....
    });
    setToDolist(filteredTodos); // This will create a brand new "Filtered array".. that does not include the item that was passed throught his function
}

// const markComplete = (completeIdx) => {
//     const filteredCompleteTodos = todolist.filter((todos, i)=>{
//         return i === completeIdx; 
//     });
//     setToDolist(filteredCompleteTodos);
// }

const checkMarks = document.querySelectorAll("#checkmark");
const checkBoxes = document.querySelectorAll("#checkbox");
// const completeMessage = document.querySelectorAll("#complete-message");



for(let i = 0; i < checkBoxes.length; i++){
    checkBoxes[i].addEventListener("click", (e) => {      
        checkMarks[i].style.display =  "block";       
    });
}



return (

<div>
        <form onSubmit={ createTodo }>
            <input type="text" onChange={ toDoInput } value= { todos }/>
            <button>Add</button>
        </form>
    <div id="todo-container">
        {
            todolist.map((todos, i ) => {
                return <div id="todo-box" key={i}>
                    
                        {/* {
                        completemessage?
                        <p id="complete-message" style={{color:'blue'}}>{ completemessage }</p> :""
                        } */}
                    
                        <span id="checkbox" >
                            <img id="checkmark" src={checkmark} alt="" style={{ width: 15, height: 15 }}/>
                        </span>
                        { todos } 
                        <button id="delete-btn" onClick={(e) => { deleteToDo(i); }}>Delete</button> 
                        </div>
            }) // This creates a delete "call back function" that deletes the current index of "i"..
        }
    </div>
</div>

)
    

}

export default ToDos;