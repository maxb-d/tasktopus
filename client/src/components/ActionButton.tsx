
type Props = {
    children: React.ReactNode
}

const ActionButton = ({ children }: Props) => {
  return (
    <button className="rounded-md bg-blue-logo hover:bg-violet-logo transition duration-400 text-white font-bold py-2 px-4">
        {children}
    </button>
  )
}

export default ActionButton