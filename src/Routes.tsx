import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import { TasksProvider } from "./context/tasksContext"
import { MenuLateral } from "./components/menuLateral"

function AppRoutes() {

  return <BrowserRouter>
    <TasksProvider>
      <main className="flex bg-background w-full h-screen text-main_text font-sans">
        <MenuLateral/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </TasksProvider>
  </BrowserRouter>
}

export default AppRoutes
