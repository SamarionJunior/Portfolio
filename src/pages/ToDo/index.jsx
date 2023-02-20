// import "../../style.css"
import Style from "./style.module.css"

import React, { useEffect } from "react";
import { useState } from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDo = _ => {
    console.clear()
    const [newTaskInput, setNewTaskInput] = useState("")
    const [editedText, setEditedText] = useState("")
    const [tasks, setTasks] = useState([
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
    ])
    const setNewTask = task => {
        setTasks(oldTasks => 
            [...oldTasks, {isChecked: false, name: task, id: Math.random()}]
        )
        setNewTaskInput("")
    }
    const [dataList, setDataList] = useState(tasks)
    const [searchList, setSearchList] = useState(false)
    const Check = id => setTasks(tasks.map(task => {
        if(task.id === id){
            task.isChecked = !task.isChecked
        }
        return task
    }))
    const RemoveTask = id => setTasks(tasks.filter(task => {
        if(task.id === id){
            return false
        }
        return true
    }))
    const Search = _ => {
        setSearchList(true)
        setDataList(tasks.map(task => task.name.includes(newTaskInput) ? task : undefined))
    }
    useEffect(() => {
        if(!searchList){
            setDataList(tasks)
            console.log("setDataList")
        }
    }, [tasks, searchList])

    useEffect(() => {
        console.log(editedText)
    }, [editedText])

    const FullText = (command, id) => {
        console.log(`${Style.FullTextButtonOpen}${id}`)
        if(command){
            document.getElementById(`${Style.LabelLock}${id}`).style.whiteSpace = "normal"
            document.getElementById(`${Style.LabelUnlock}${id}`).style.whiteSpace = "normal"
            document.getElementById(`${Style.Items}${id}`).style.alignItems = "start"
            document.getElementById(`${Style.FullTextButtonOpen}${id}`).style.display = "none"
            document.getElementById(`${Style.FullTextButtonClose}${id}`).style.display = "block"
        }else{
            document.getElementById(`${Style.LabelLock}${id}`).style.whiteSpace = "nowrap"
            document.getElementById(`${Style.LabelUnlock}${id}`).style.whiteSpace = "nowrap"
            document.getElementById(`${Style.Items}${id}`).style.alignItems = "center"
            document.getElementById(`${Style.FullTextButtonOpen}${id}`).style.display = "block"
            document.getElementById(`${Style.FullTextButtonClose}${id}`).style.display = "none"
        }
    }

    const UpdateText = (command, id) => {
        if(command){
            document.getElementById(`${Style.LabelLock}${id}`).style.display = "none"
            document.getElementById(`${Style.LabelUnlock}${id}`).style.display = "block"
            document.getElementById(`${Style.UpdateTextButtonOpen}${id}`).style.display = "none"
            document.getElementById(`${Style.UpdateTextButtonClose}${id}`).style.display = "block"
            
            tasks.forEach(task => {
                if(task.id === id){
                    setEditedText(task.name)
                }
            })
        }else{
            document.getElementById(`${Style.LabelLock}${id}`).style.display = "block"
            document.getElementById(`${Style.LabelUnlock}${id}`).style.display = "none"
            document.getElementById(`${Style.UpdateTextButtonOpen}${id}`).style.display = "block"
            document.getElementById(`${Style.UpdateTextButtonClose}${id}`).style.display = "none"
            
            setTasks(oldTasks => 
                oldTasks.map(oldTask => {
                    if(oldTask.id === id){
                        oldTask.name = editedText
                    }
                    return oldTask
                })
            )
        }
    }
    console.log(tasks)
    return (
        <div id={Style.ToDo} className={Style.ToDo}>
            <main className={Style.ToDoContent}>
                <section className={Style.List}>
                    <div className={Style.Form}>
                        <button className={Style.ButtonTextInput} onClick={() => newTaskInput !== "" ? Search() : console.log("Vazio!!!")}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>

                        <button className={Style.ButtonTextInput} onClick={() => searchList !== false ? setSearchList(false) : undefined}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <input id={Style.NewTaskInput} name="NewTaskInput" type="text" className={Style.TextInput} placeholder="Digite uma Nova Tarefa!" value={newTaskInput} onChange={(e) => setNewTaskInput(String(e.target.value))}/>
                       
                        <button className={Style.ButtonTextInput} onClick={() => newTaskInput !== "" ? setNewTaskInput("") : console.log("Vazio!!!")}>
                            <i className="fa-solid fa-broom"></i>
                        </button>

                        <button className={Style.ButtonTextInput} onClick={() => newTaskInput !== "" ? setNewTask(newTaskInput) : console.log("Vazio!!!")}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div className={Style.Tasks}>
                        <div className={Style.Scroll}>
                            {dataList.length !== 0 ? dataList.map(task => 
                                task !== undefined ?
                                <div /* draggable="true" */ key={String(task.id)} className={Style.Items} id={`${Style.Items}${task.id}`} >
                                    <input id={`${Style.Check}${task.id}`} name={`check${task.id}`} type="checkbox" className={Style.CheckInput}  check={String(task.isChecked)} onChange={(e) => Check(Number(task.id))}/>

                                    <button className={Style.ButtonCheckInput} id={`${Style.FullTextButtonOpen}${task.id}`} onClick={(e) => FullText(true, Number(task.id))}>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </button>
                                    <button className={Style.ButtonCheckInput} id={`${Style.FullTextButtonClose}${task.id}`} style={{display: "none"}} onClick={(e) => FullText(false, Number(task.id))}>
                                        <i className="fa-solid fa-caret-up"></i>
                                    </button>

                                    <p htmlFor={`check${task.id}`} id={`${Style.LabelLock}${task.id}`} className={task.isChecked ? `${Style.Label} ${Style.cortado}` : Style.Label}>{task.name}</p>
                                    <input htmlFor={`check${task.id}`} id={`${Style.LabelUnlock}${task.id}`} className={Style.Label} style={{display: "none"}} onChange={(e) => {setEditedText(String(e.target.value))}} value={editedText}/>

                                    <button className={Style.ButtonCheckInput} id={`${Style.UpdateTextButtonOpen}${task.id}`} onClick={(e => UpdateText(true, Number(task.id)))}>
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
                                    <button className={Style.ButtonCheckInput} id={`${Style.UpdateTextButtonClose}${task.id}`} style={{display: "none"}} onClick={(e => UpdateText(false, Number(task.id)))}>
                                        <i className="fa-solid fa-floppy-disk"></i>
                                    </button>

                                    <button className={Style.ButtonCheckInput} onClick={(e => RemoveTask(Number(task.id)))}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div> : undefined
                            ) : <h1 className={Style.Warning}>Vazio!!!</h1>}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

// useEffect(() => {
//     setShow(dataList.length !== 0 ? dataList.map(task => 
//         <div key={String(task.id)} className={Style.Items">
//             <input id={`check${task.id}`} name={`check${task.id}`} type="checkbox" className={Style.CheckInput"  check={String(task.isChecked)} onChange={(e) => Check(Number(task.id))}/>
//             <button className={Style.ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
//                 <FontAwesomeIcon icon="fa-caret-down" />
//             </button>
//             <label htmlFor={`check${task.id}`} className={task.isChecked ? "Label cortado" : "Label"}>{task.name}</label>
//             <button className={Style.ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
//                 <FontAwesomeIcon icon="fa-arrows-up-down-left-right" />
//             </button>
//             <button className={Style.ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
//                 <FontAwesomeIcon icon="fa-pen" />
//             </button>
//             <button className={Style.ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
//                 <FontAwesomeIcon icon="fa-trash" />
//             </button>
//         </div>
//     ) : <h1>Vazio!!!</h1>)
// }, [dataList])

// const columns = document.querySelectorAll(".column");

// document.addEventListener("dragstart", (e) => {
//   e.target.classList.add("dragging");
// });

// document.addEventListener("dragend", (e) => {
//   e.target.classList.remove("dragging");
// });

// columns.forEach((item) => {
//   item.addEventListener("dragover", (e) => {
//     const dragging = document.querySelector(".dragging");
//     const applyAfter = getNewPosition(item, e.clientY);

//     if (applyAfter) {
//       applyAfter.insertAdjacentElement("afterend", dragging);
//     } else {
//       item.prepend(dragging);
//     }
//   });
// });

// function getNewPosition(column, posY) {
//   const cards = column.querySelectorAll(".item:not(.dragging)");
//   let result;

//   for (let refer_card of cards) {
//     const box = refer_card.getBoundingClientRect();
//     const boxCenterY = box.y + box.height / 2;

//     if (posY >= boxCenterY) result = refer_card;
//   }

//   return result;
// }

export default ToDo

// <button className={Style.ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
//     <i className={Style.fa-solid fa-arrows-up-down" />
// </button>