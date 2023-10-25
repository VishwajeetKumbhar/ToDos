import React, { useState } from 'react'
import "./style.css"
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import List from './List';

const Todo = () => {
    const [todo, setTodo] = useState("")

    const [add, setAdd] = useState([])

    const [validation, setvalidation] = useState('')

    console.log("Teju", add)
    const setData = (e) => {
        setTodo(e.target.value)
    }
    const additems = () => {
        if (todo == "") {
            setvalidation("Enter Your Todo")
        }
        else {
            setAdd(() => {
                return [...add, todo]
            })
            setTodo('')
            setvalidation("")
        }

    }
    const dltitems = (id) => {
        const dltData = add.filter((ele, index) => {
            return index !== id

        })
        setAdd(dltData)
    }

    return (
        <>
            <div className="main-container">
                <div className='todo-box'>
                    <h2 className='heading'>Write Your Todo List Here</h2>
                    <h3 className='validation' > {validation} </h3>
                    <div className="input-container">
                        <input type="text" name='todo' value={todo} onChange={setData} placeholder='Enter Your Task' />
                        <Tooltip title="Add">
                            <Button className='addbtn' onClick={additems}>
                                <AddIcon />
                            </Button>
                        </Tooltip>
                    </div>
                    <div className="store-container">
                        <ul >
                            {
                                add.map((ele, index) => {
                                    return (
                                        <>
                                            <List id={index} text={ele} dltitems={dltitems} />
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='second'>
                    <img className='images' src="wing2.png" alt="" />
                    <h1>Hello World</h1>
                  <p>Add Your todos for better management   </p>
                </div>
            </div>
        </>
    )
}

export default Todo


// Hello
// Node
// React 