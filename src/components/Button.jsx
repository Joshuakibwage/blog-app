 

const Button = ({label, className, onClick, disabled}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
        {label}
    </button>
  )
}

export default Button