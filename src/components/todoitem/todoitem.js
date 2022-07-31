import React, { useEffect, useState } from 'react'
import './todoitem.css'


const localData = () =>{
    const list = localStorage.getItem('todoList')
    if(list){
        return JSON.parse(list)
    }
    else{
        return []
    }
}
const Todoitem =()=>{


    const [inputData, setinputData] = useState("")
    const [dataItem, setdataItem ] = useState(localData())
    const [editItem, seteditItem] = useState("")
    const [toggleButton, settoggleButton] = useState(false)

    const saveData = () =>{
        if(!inputData){
            alert("Enter some value")
        }
        else if(inputData && toggleButton){
            setdataItem(dataItem.map((currEl)=>{
                if(currEl.id===editItem){
                    return {...currEl, name: inputData}
                }
                return currEl
            }))
            setinputData([]);
            seteditItem(null);
            settoggleButton(false)

        }
        else{
            const setId ={
                id: new Date().getTime().toString(),
                name: inputData
            }
            setdataItem([...dataItem, setId]);
        }
        setinputData("")
    }
    // delete item
    const deleteItem = (index) =>{
        const setDeleteItem = dataItem.filter((currEl)=>{
            return currEl.id !== index
        })
        setdataItem(setDeleteItem)
    }
    // remove All
    const removeAll =()=>{
        setdataItem([])
    }
    // edit Item
    const editList = (index)=>{
        const todo_editList = dataItem.find((currEl) =>{
            return currEl.id === index
        })
        setinputData(todo_editList.name);
        seteditItem(index);
        settoggleButton(true)
    }
    // set LocalStorage
    useEffect(()=>{
        localStorage.setItem('todoList', JSON.stringify(dataItem))
    },[dataItem])
    // get Local Storage


return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src="./images/todoitem.png" alt="todologo" />
                    <figcaption> Add to item</figcaption>
                </figure>
                <div className='additem'>
                    <input type="text"
                        value={inputData}
                        onChange = {(event)=> setinputData(event.target.value)}
                        className='form_control'
                        placeholder='add item' />
                        {toggleButton ? (<i className="fa fa-edit add-btn" onClick={saveData}></i>)
                        :(<i className="fa fa-plus add-btn" onClick={saveData}></i>)}
                    
                </div>
                {/* show item  */}
                <div className='showItems'>
                    {
                        dataItem.map((currEl) =>{
                            return(
                                <div className='eachItem' key={currEl.id}>
                                <h3>{currEl.name}</h3>
                                <div className='todo-btn'>
                                    <i className="far fa-edit add-btn" onClick={()=>editList(currEl.id)}></i>
                                    <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(currEl.id)}></i>
                                </div>
                            </div>   
                            )
                        })
                    }
                </div>
                {/* remove item */}
                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text=" Remove All" onClick={removeAll}>
                        <span>Check List</span>
                    </button>
                </div>
            </div>
        </div>
    </>
)
}
export default Todoitem;