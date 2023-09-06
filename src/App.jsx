import { useState, useEffect } from 'react'

function App() {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})



  // Pointer Move
  useEffect(() => {
    console.log("Efecto")

    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }

    if(enable){
      window.addEventListener('pointermove', handleMove)
    }
  },[enable])
  
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: "#09f",
        borderRadius: "50%",
        opacity: 0.8,
        pointerEvents: "none",
        left: -20,
        top: -20,
        height: 40,
        width: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <h1>Proyecto</h1>
      <button onClick={() => setEnable(!enable)}>{enable ? "Desactivar" : "Activar"} el efecto</button>
    </>
  )
}

export default App
