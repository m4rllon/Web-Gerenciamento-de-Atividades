import { CalendarMonthOutlined, InsightsOutlined, LocalOfferOutlined, SearchOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"

export const MenuLateral = () => {
    return <div 
    className="bg-menu p-5 flex justify-between md:flex-col md:justify-start md:gap-6">
        <h1 className="text-2xl font-bold">MarllusList</h1>
        <div className="hidden md:block">
            <span className="flex gap-2 mt-5">
                <CalendarMonthOutlined/>
                <Link to={'/'}>Suas Tarefas</Link>
            </span>
            <span className="flex gap-2 mt-5">
                <SearchOutlined/>
                <Link to={'/buscar'}>Buscar</Link>
            </span>
            <span className="flex gap-2 mt-5">
                <LocalOfferOutlined/>
                <Link to={'/'}>Tags e Projetos</Link>
            </span>
            <span className="flex gap-2 mt-5">
                <InsightsOutlined/>
                <Link to={'/'}>Seu Rendimento</Link>
            </span>
        </div>
        <div className="md:hidden flex w-full justify-end gap-3">
            <span className="">
                <Link to={'/'}><CalendarMonthOutlined/></Link>
            </span>
            <span className="">
                <Link to={'/buscar'}><SearchOutlined/></Link>
            </span>
            <span className="">
                <Link to={'/'}><LocalOfferOutlined/></Link>
            </span>
            <span className="">
                <Link to={'/'}><InsightsOutlined/></Link>
            </span>
        </div>
    </div>
}