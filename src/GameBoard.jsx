import { useEffect, useState } from 'react';
import Dieces from './Dieces';
import './index.css';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function GameBoard() {
  const [numbers, setNumbers] = useState([]);
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    setNumbers(allNewDice());
  }, []);

  useEffect(() => {
    const allHeld = numbers.every((obj) => obj.isHeld);
    const allSameVal =
      numbers.length > 0 && numbers.every((obj) => obj.value === numbers[0].value);

    if (allHeld && allSameVal) {
      setTenzies(true);
      console.log("Now all are the same");
    } else {
      setTenzies(false);
    }
  }, [numbers]);

  function allNewDice() {
    let newNumbers = [];
    for (let i = 0; i < 10; i++) {
      newNumbers.push(generateNewDie());
    }
    return newNumbers;
  }

  function generateNewDie() {
    let randNum = Math.floor(Math.random() * 6) + 1;
    return { value: randNum, isHeld: false, id: nanoid() };
  }

  function handleClick() {
    if (tenzies) {
      setNumbers(allNewDice());
      setTenzies(false);
    } else {
      setNumbers((oldNumbers) => {
        const updatedNumbers = oldNumbers.map((num) => {
          return num.isHeld ? num : generateNewDie();
        });
        return updatedNumbers;
      });
    }
  }

  function holdDice(id) {
    setNumbers((oldNumbers) => {
      const updatedNumbers = oldNumbers.map((num) => {
        return num.id === id ? { ...num, isHeld: !num.isHeld } : num;
      });
      return updatedNumbers;
    });
  }

  return (
    <main className="gameboard-main">
      <div className="info-container">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="div-container">
        {numbers.map((num) => {
          return (
            <Dieces
              holdDice={holdDice}
              isHeld={num.isHeld}
              key={num.id}
              id={num.id}
              value={num.value}
            />
          );
        })}
      </div>
      <div className="button-container">
        <button onClick={handleClick}>
          {tenzies ? "New Game" : "Roll dice"}
        </button>
      </div>

      {tenzies && <Confetti />}
    </main>
  );
}

/*import { useEffect, useState } from 'react';
import Dieces from './Dieces';
import './index.css';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'
export default function GameBoard(){
    const [numbers, setNumbers]= useState(allNewDice())
    //const [isHeld, setIsHeld] = useState(true)
    const [tenzies, setTenzies] = useState(false)

    useEffect(()=>{
        const allHeld = numbers.every(obj => obj.isHeld)
        const allSameVal = numbers.length > 0 && numbers.every(obj => obj.value === numbers[0].value)

        if(allHeld && allSameVal){
            setTenzies(true)
        console.log("now all are the same")
        }
    },[numbers])

    function allNewDice(){
       let numbers = []
       for(let i= 0; i< 10; i++){
       
        numbers.push(generateNewDie)
       }
       return numbers
    }
   
    function generateNewDie(){
        let randNum = Math.floor(Math.random() * 6) + 1;
        return({value: randNum, isHeld: false, id: nanoid()})
    }

    function handleClick() {
        if (!tenzies) {
          setNumbers(oldNumbers =>
            oldNumbers.map(num => {
              return num.isHeld ? num : generateNewDie();
            })
          );
        } else {
          setNumbers(allNewDice());
          setTenzies(false);
        }
      }
      
    function holdDice(id){
        console.log(id)
       setNumbers(oldNumbers => oldNumbers.map(num => {
        return num.id === id ?
        {...num, isHeld: !num.isHeld}:
        num
       }))
        
    }
    
    return(
    <main className='gameboard-main'>
        <div className='info-container'>
        <h1>Tenzies</h1>
        <p>Roll untill all dice are the same. Click each die to
            freeze it at its current value between rolls.
        </p>
        </div>
        <div className='div-container'>
            {numbers.map((num)=>{
                return(
                 <Dieces holdDice={holdDice} 
                 isHeld={num.isHeld}
                  key={num.id}
                  id={num.id}
                   value={num.value}/>
                )
            })}
        </div>
            <div className='button-container'>
        <button onClick={handleClick}>{tenzies ? "New Game" : "Roll dice"}</button>
        </div>
        
       {tenzies && <Confetti/>}
        
    </main>
    )
}*/