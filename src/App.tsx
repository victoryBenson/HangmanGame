import { Route, BrowserRouter, Routes,} from "react-router-dom"
import HomePage from "./pages/HomePage"
import StartGame from "./pages/StartGame"
import Notfound from "./pages/Notfound"


const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" index element={<HomePage/>}/>
            <Route path="/startgame" element={<StartGame/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App