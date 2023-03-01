import { XCircleIcon, CheckCircleIcon, MinusCircleIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import EditModal from './EditModal'
import { useState } from 'react'

type Props = {
    id: number
    isComplete: boolean,
    content: string,
    deleteTodo: (firstValue: any, secondValue: number) => void,
    editTodo: (event: any, content: string, id: number) => void
}

const TodoCard = ({ id, content, isComplete, deleteTodo, editTodo }: Props) => {
    const [editModalActive, setEditModalActive] = useState<boolean>(false)

  return (
    <div className='flex justify-between mx-2 my-4 rounded-lg border-gray-500 border-2 p-2'>
        { isComplete ? (
            <CheckCircleIcon className='h-6 w-6 fill-green-500'></CheckCircleIcon>
        ) : (
            <XCircleIcon className='h-6 w-6 fill-orange-400'></XCircleIcon>
        )}

        <div className={isComplete ? 'font-bold font-neon line-through' : `font-bold font-neon`}>
            {content}
        </div>
        <div className='flex'>
            <button>
                <PencilSquareIcon onClick={() => setEditModalActive(true)} className='h-6 w-6'></PencilSquareIcon>
            </button>
            <button>
                <MinusCircleIcon onClick={(event) => deleteTodo(event, id)} className='h-6 w-6 hover:fill-red-500'></MinusCircleIcon>
            </button>
        </div>
        { editModalActive ? (
            <EditModal
                setEditModalActive={setEditModalActive}
                content={content}
                editTodo={editTodo}
                id={id}
            />
        ) : (
            <></>
        )
        }
        
    </div>
  )
}

export default TodoCard