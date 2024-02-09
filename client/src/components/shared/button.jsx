

const Button = (props) => {
  return (
    <button className={`bg-primary py-2 px-4 rounded-lg text-white font-bold cursor-pointer hover:bg-secondary ${props.className}`}>
        {props.btnType}
    </button>
  )
}

export default Button