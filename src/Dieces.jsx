import './index.css';

export default function Dieces(props) {
   return (
    <div onClick={() => props.holdDice(props.id)} className={`die ${props.isHeld ? "held" : ""}`}>
        <h2>{props.value}</h2>
    </div>
   )
}
