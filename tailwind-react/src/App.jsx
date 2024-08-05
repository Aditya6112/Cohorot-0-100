import './App.css'

function App() {
  return (
    <>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{backgroundColor:"red"}}>Aditya</div>
        <div style={{backgroundColor:"yellow"}}>Aditya</div>
        <div style={{backgroundColor:"green"}}>Aditya</div>
      </div>
      <div className='flex justify-between'>
        <div className='bg-red-500'>Aditya</div>
        <div className='bg-yellow-500'>Aditya</div>
        <div className='bg-green-700'>Aditya</div>
      </div>
      <div className='grid grid-cols-3'>
        <div className='bg-red-500 md:bg-blue-600'>Aditya</div>
        <div className='bg-yellow-500'>Aditya</div>
        <div className='bg-green-700'>Aditya</div>
      </div>
    </>
  )
}

export default App
