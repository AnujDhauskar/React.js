import { useState } from 'react' 


function App() {

  const [color, setColor] = useState("bg-green-500");

  return (
    <>
      <div className={`h-screen ${color} flex items-center justify-center`}></div>

      
        
  

  
    </>
  )
} 

export default App
