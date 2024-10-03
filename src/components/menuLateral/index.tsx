import { CalendarMonthOutlined, InsightsOutlined, LocalOfferOutlined, SearchOutlined } from "@mui/icons-material"

export const MenuLateral = () => {
    return <div className="w-1/6 py-12 pl-5 mr-44 bg-menu h-screen">
        <h1 className="text-2xl font-bold">MarllusList</h1>
        <span className="flex gap-2 mt-5">
            <CalendarMonthOutlined/>
            <button>Suas Tarefas</button>
        </span>
        <span className="flex gap-2 mt-5">
            <SearchOutlined/>
            <button>Buscar</button>            
        </span>
        <span className="flex gap-2 mt-5">
            <LocalOfferOutlined/>
            <button>Tags e Projetos</button>
        </span>
        <span className="flex gap-2 mt-5">
            <InsightsOutlined/>
            <button>Seu Rendimento</button>
        </span>
    </div>
}