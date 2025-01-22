
interface buttonprop {
    label  : string,
    onClick? : () => void
    
}

export default function Button ({label, onClick}:buttonprop) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}