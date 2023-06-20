import React, { useState } from 'react'
import { databases } from '../appwrite/appwriteConfig'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = () => {
  const[todo, setTodo] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const promise = databases.createDocument("648ec66108af6dd76e8d","648ec67201c6a0b4da45",uuidv4(),{
      todo
    })
    promise.then(
      function (res){
        console.log(res);
      },
      function (err){
        console.log(err);
      }
    )
    window.location.reload() // to clear the previous states
    // e.target.reset();
  }
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange={(e)=>{
            setTodo(e.target.value)
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm
