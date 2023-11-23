import React, {useState} from 'react'

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true);
  return (
    <div>
        <button onClick={ () => {
            setDisplay(!display)
        }}>
            Toggle Display
        </button>
        {display && <UseEffectCounterContainer />}
    </div>
  )
}

export default UseEffectCounterContainer