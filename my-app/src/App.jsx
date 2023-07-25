import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Component/Header"
import Income from "./Pages/Income"
import Expenses from "./Pages/Expences"

const App = () => {
  return (
     <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/income" element={<Income/>}/>
      <Route path="/expenses" element={<Expenses/>}/>
    
     </Routes>
     
     
     
     </BrowserRouter>
  )
}

export default App