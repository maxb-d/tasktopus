import { XMarkIcon, PlusCircleIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

type Props = {
    setEditModalActive: (value: boolean) => void,
    content: string,
    editTodo: (event: any, content: string, id: number) => void,
    id: number
}

const EditModal = ({ setEditModalActive, content, editTodo, id }: Props) => {
    const [editedTodo, setEditedTodo] = useState<string>('')

    const handleChange = (e: any) => {
        setEditedTodo(e.target.value)
    }

    const handleEdit = (event: any, value: boolean) => {
        editTodo(event, editedTodo, id)
        setEditModalActive(false)
        setEditedTodo('')
    }

  return (
    <div className='fixed top-48 left-46 z-40 drop-shadow-2x1 bg-white w-2/5'>
        <div className='rounded-lg drop-shadow-xl p-6 bg-blue-logo'>
          {/* X MARK ICON */}
          <div className="flex justify-between items-center">
            <h1 className="font-neon font-bold">Edit 🐙 Task</h1>
            <button
              onClick={() => setEditModalActive(false)}
            >
              <XMarkIcon className="h-6 w-6"></XMarkIcon>
            </button>
          </div>
          <div className="p-2 flex justify-between items-center">
            <input 
              type="text" 
              placeholder={content}
              value={editedTodo}
              onChange={handleChange}
              className="rounded-lg drop-shadow-xl border border-gray-400 px-2"
            />
            <button
              onClick={(event) => handleEdit(event, false)}
            >
              <PlusCircleIcon className="h-6 w-6 hover:fill-violet-logo"></PlusCircleIcon>
            </button>
          </div>
        </div>
    </div>
  )
}

export default EditModal