import { Tarefa } from "../../data/@types/ITask";
import setDateTaskCard from "../../utils/setDateTaskCard";

interface props {
    isOpen: boolean;
    taskTarget: Tarefa;
}

const ModalTask = ({isOpen, taskTarget}:props) => {
    const formatDate = taskTarget.datetask ? setDateTaskCard(taskTarget.datetask) : 'Data não encontrada' 

    return isOpen && <div className="bg-card md:mt-11 mx-3 md:mx-5  h-56 py-11 px-5 rounded-lg flex flex-col justify-center items-start gap-3">
        <h1 className="text-2xl font-bold text-checkedColorButton">{taskTarget.titletask}</h1>
        <div>
            <h2 className="text-lg font-semibold">Data de término:</h2>
            <p className="">{formatDate}</p>
        </div>
        <div>
            <h2 className="text-lg font-semibold">Descrição completa:</h2>
            <p>{taskTarget.desctask}</p>
        </div>
    </div>   
}

export default ModalTask