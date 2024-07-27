import './App.css'
import { Cardwrapper } from './components/Cardwrapper'
import TextComponent from './components/TextComponent'

function App() {

  return (
    <>
      <Cardwrapper>
        <Cardwrapper>
          <TextComponent message="from Aditya" />
        </Cardwrapper>
        <Cardwrapper>
          <TextComponent message="from Rajput" />
        </Cardwrapper>
      </Cardwrapper>

      <Cardwrapper>
        <TextComponent message="another Card Wrapper"/>
      </Cardwrapper>
    </>
  )
}

export default App
