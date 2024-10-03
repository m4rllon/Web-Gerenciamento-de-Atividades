import { ITask } from "../../data/@types/ITask"

interface Props {
    task: ITask;
    setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>>;
}

const FormEditTask = ({setTask, task}:Props) => {
    return <div>
        
    </div>
}

export default FormEditTask