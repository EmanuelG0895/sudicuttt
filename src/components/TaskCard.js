import { useTasks } from "../context/TasksContext";
import { useRouter } from "next/navigation";
import { VscTrash } from "react-icons/vsc";
import { toast } from "react-hot-toast";
import "./../components/TaskCard.css"

export const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();
  const router = useRouter();

  return (
    <div className="tarea col-md-5 mr-4">
      <h3>{task.responsable}</h3>
      <p className="text-gray-300">{task.area}</p>
      <p className="text-gray-300">{task.objetivo}</p>
      <div className="container_btn">
        <button
          className="btn_editar"
          onClick={() => router.push(`/edit/${task.id}`)}
        >Editar</button>
        <button
          className="btn_eliminar"
          onClick={(e) => {
            e.stopPropagation();
            const accept = confirm(
              "seguro que quiere eliminar este proyecto?"
            );
            if (accept) deleteTask(task.id);
            toast.success("Proyecto eliminado correctamente");
          }}
        >
          <VscTrash className="" /> Eliminar
        </button>
      </div>
    </div>

  );
};
