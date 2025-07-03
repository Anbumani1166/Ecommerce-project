import React, { useState } from 'react'
import Shop from './Shop'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { BsFillSaveFill } from "react-icons/bs";
const TodoApp = () => {

  const [items,setitems]=useState([
    {id:1,label:"html &css",checked :true},
    {id:2,label:"javaScript",checked :true},
    {id:3,label:"recat js",checked :false},
  ])
  const [newItem,setNewitem]=useState("")
  const [isEditing,setIsEditing]=useState(false)
  const [currentElementId,setCurrentElementId]=useState(null)

  let handleChecked=(id)=>{

    let newListItem= items.map((items)=>{return items.id===id ? {...items, checked:!items.checked}:items})
    setitems(newListItem)
  }
  let handleUpdate=(id)=>{
    let listitems=items.find(item=> item.id==id)
    setNewitem(listitems.label)
    
    setIsEditing(true)
    setCurrentElementId(id)
  }
  let handleDelete=(id)=>{
    let deleteItems=items.filter(item =>item.id!==id ).map((item,index)=>{return {...item,id:index+1}})
    setitems(deleteItems)
  }
  let handleAddorSave=()=>{
    if(isEditing){
      let newListItem=items.map((item)=>{
            return item.id===currentElementId ?{...items,label:newItem }:item
      })
      setitems(newListItem)
      setCurrentElementId(null)
      setNewitem("")
      setIsEditing(false)
    }else{

      setitems([...items,{id:items.length+1,label:newItem,checked:false}])
      setNewitem("")
    }
  }

  return (
    <main>
      {/* <Shop/> */}
      <div>
        <input type="text" value={newItem} onChange={(e)=>{
          setNewitem(e.target.value)
        }} />
        <button onClick={()=>{handleAddorSave()}}>{isEditing?<BsFillSaveFill />:<MdLibraryAdd />}</button>
        
      </div>
     <ol>
      {
        items.map((item)=>{
          return(
            <li key={item.id}>
              <input type="checkbox" checked={item.checked} onChange={()=>handleChecked(item.id)}/>
              <label>{item.label}</label>
              <FaRegEdit id="editicon" role='Button' tabIndex={0} onClick={()=>{handleUpdate(item.id)}}/>
              <MdDelete id="deleteicon" role='Button'tabIndex={0} onClick={()=>{handleDelete(item.id)}}/>

            </li>
          )
        })
      }
     </ol>
    </main>
  )
}

export default TodoApp