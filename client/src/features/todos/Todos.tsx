import TodoCard from "./components/TodoCard"
import { PlusCircleIcon } from '@heroicons/react/24/outline'

import { useState, useEffect } from 'react'
import API from '@/lib/axiosApi'
import Modal from "@/features/todos/components/Modal"

type Props = {}

const Todos = (props: Props) => {
  const [todos, setTodos] = useState<any[]>([])
  const [newTodo, setNewTodo] = useState<string>('')
  const [modalActive, setModalActive] = useState<boolean>(false)

  useEffect(() => {
    API.get('/todos')
      .then(res => {
        const todos = res.data
        console.log("res = ", res)
        console.log("todos = ", todos)
        setTodos(todos)
      })
  }, [])

  const completeTodo = async (id: number) => {
    const response = await API.patch('/todos/' + id + '/complete')
    
    setTodos(todos.map(todo => {
      if(todo._id === response.data._id){
        todo.complete = response.data.complete
      }
      return todo
    }))
  }

  const addTodo = async (content: string) => {
    const response = await API.post('/todos', {
      text: content
    })

    setTodos([...todos, response.data])
  }

  const editTodo = async (event: any, content: string, id: number) => {
    event.stopPropagation()

    const response = await API.patch('/todos/' + id + '/edit', {
      text: content
    })

    setTodos(todos.map(todo => {
      if(todo._id === response.data._id) {
        todo.text = response.data.text
      }
      return todo
    }))
  }
  
  const deleteTodo = async (event: any, id: number) => {
    event.stopPropagation()

    const response = await API.delete('/todos/' + id)
    setTodos(todos.filter(todo => todo._id !== response.data._id))
  }

  return (
    <div className="flex justify-center items-center w-full p-6">
      <div className="w-3/6 pt-3 pb-3  border border-gray-400 rounded-lg">
        {/* HEADER TODO LIST */}
        <div className="flex justify-between px-8 py-2">
          <h1 className="font-bold font-neon text-xl"> 🐙 Octopus Tick List 🐙</h1>
          <button
            onClick={() => setModalActive(true)}
          >
            <PlusCircleIcon className="h-6 w-6 fill-blue-logo hover:fill-violet-logo"></PlusCircleIcon>
          </button>
        </div>
        <div className="border mx-2 border-gray-400"></div>
        {/* TODOS LIST */}
        <div className="mx-4">
          {
            todos.slice(0).reverse().map(todo => {
              return (
                <div key={todo._id} onClick={() => completeTodo(todo._id)}>
                  <TodoCard
                    id={todo._id}
                    content={todo.text}
                    isComplete={todo.complete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                  />
                </div>
              
              )
            })
          }
        </div>
      </div>
      { modalActive ? (
          <Modal 
            addTodo={() => addTodo(newTodo)}
            setNewTodo={setNewTodo}
            newTodo={newTodo}
            setModalActive={setModalActive}
          />
        ) : (
          <></>
        )
      
      }
    </div>
  )
}

export default Todos