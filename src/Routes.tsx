import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import { TasksProvider } from "./context/tasksContext"
import { MenuLateral } from "./components/menuLateral"
import Buscar from "./pages/buscar"

function AppRoutes() {

  return <BrowserRouter>
    <TasksProvider>
      <main className="bg-background w-full h-screen text-main_text font-sans md:flex">
        <MenuLateral/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/buscar" element={<Buscar/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </TasksProvider>
  </BrowserRouter>
}

export default AppRoutes
