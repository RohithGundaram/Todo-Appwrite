import React, { useState, useEffect } from 'react'
import { databases } from '../appwrite/appwriteConfig'

const Todos = () => {
  const[todos, setTodos] = useState()
  const [loader, setLoader] = useState(false)

  useEffect(()=>{
    setLoader(true);
    const getTodos = databases.listDocuments("648ec66108af6dd76e8d","648ec67201c6a0b4da45")

    getTodos.then(
      function(res){
        setTodos(res.documents);
        console.log(res.documents)
      },
      function(err){
        console.log(err);
      }
    )
    setLoader(false);
  },[])

  const handleDelete = (id)=>{
    const promise = databases.deleteDocument("648ec66108af6dd76e8d","648ec67201c6a0b4da45",id)
    promise.then(
      function(res){
        console.log(res);
      },
      function(err){
        console.log(err);
      }
    )
    window.location.reload()
  }

  return (
    
<div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div className='container'>
          
             {todos && todos.map( item => (
              <div key = {item.$id}>
              <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                <div>
                  <p>{item.todo}</p>
                </div>
                <div>
                  <span
                    className="text-red-400 cursor-pointer"
                    onClick={()=>{
                      handleDelete(item.$id)
                    }}
                  >
                    Delete
                  </span>
                </div>
              </div>
            </div>
             ))} 
            
        </div>
      )}
    </div>
  )
}

export default Todos
