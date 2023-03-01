import { XMarkIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

type Props = {
  addTodo: (value: any) => void,
  setNewTodo: (value: string) => void,
  newTodo: string,
  setModalActive: (value: boolean) => void
}

const Modal = ({ addTodo, setNewTodo, newTodo, setModalActive }: Props) => {

  const handleChange = (e: any) => {
    setNewTodo(e.target.value)
  }

  const handleAdd = (value: boolean) => {
    addTodo(newTodo)
    setModalActive(false)
    setNewTodo('')
  }

  return (
    <div className='fixed top-48 left-46 z-40 drop-shadow-2x1 bg-white w-2/5'>
        <div className='rounded-lg drop-shadow-xl p-6 bg-blue-logo'>
          {/* X MARK ICON */}
          <div className="flex justify-end items-center">
            <button
              onClick={() => setModalActive(false)}
            >
              <XMarkIcon className="h-6 w-6"></XMarkIcon>
            </button>
          </div>
          <div>
            <h1 className="font-neon font-bold">New 🐙 Task</h1>
          </div>
          <div className="p-2 flex justify-between items-center">
            <input 
              type="text" 
              placeholder="Task Text"
              value={newTodo}
              onChange={handleChange}
              className="rounded-lg drop-shadow-xl border border-gray-400 px-2"
            />
            <button
              onClick={() => handleAdd(false)}
            >
              <PlusCircleIcon className="h-6 w-6 hover:fill-violet-logo"></PlusCircleIcon>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Modal