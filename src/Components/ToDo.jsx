import React, { useState } from 'react'
import '../Styles/ToDoStyle.css'

function ToDo() {
    const [task, setTask] = useState('')
    const [list, setList] = useState([])
    const [status, setStatus] = useState(false)

    const handleData = (e) => {
        setTask(e.target.value)
    }

    const addTask = () => {
        if (task.length > 0) {
            const newTask = { data: task, check: status }
            setList([...list, newTask])
            setTask('')
        }
    }

    const updateList = ({ index, mark }) => {
        const obj = [...list]
        obj[index] = {
            ...obj[index],
            check: mark
        }
        setList(obj)
    }

    const handleDeletion = (index) => {
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList);
    }


    return (
        <div className='container'>

                <div className='frame'>
                    <h3 className='logo'>
                        To-Do List
                        <i className='fa-solid fa-clipboard-list'></i>
                    </h3>
                    <div className='input-box'>
                        <input type='text' value={task} onChange={handleData} placeholder="Add your task" />
                        <button className='btn' onClick={addTask}>ADD</button>
                    </div>
                </div>

                <div id='task-list'>
                    <ul>
                        {
                            list.map((item, index) => (
                                <div key={index} id='list-box'>
                                    <span><i className={
                                        (item.check)
                                            ? "fa-solid fa-circle-check check-circle"
                                            : "fa-regular fa-circle circle"
                                    }
                                        onClick={() => updateList({ index, mark: !item.check })}
                                    >
                                    </i>
                                    </span>
                                    <li className={item.check ? 'complete' : ''}>{item.data}</li>
                                    <span>
                                        <i className="fa-solid fa-circle-xmark cross" onClick={() => handleDeletion(index)}></i>
                                    </span>

                                </div>)
                            )
                        }
                    </ul>
                </div>
        </div>
    )
}
export default ToDo;

