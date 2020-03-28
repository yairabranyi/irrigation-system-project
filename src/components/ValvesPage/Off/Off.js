import React, {useState} from 'react'

function Off () {
  let [displayStyle, setDisplayStyle] = useState('none')
  const changeStyle = () => {
    console.log('Off clicked')
  }

  return (
    <div>
        <button onClick={changeStyle}>Freez irrgation</button>
      <form>
        <button style={{display: displayStyle}}>Freez</button>
        <button>resume</button>
      </form>
    </div>
  )
}

export default Off
