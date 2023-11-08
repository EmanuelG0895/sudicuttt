"use client";
import "./page.css";
import { useEffect } from "react";
import { useTasks } from "../../context/TasksContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const TaskFormPage = ({ params }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { createTask, updateTask, tasks } = useTasks();
  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    if (!params.id) {
      createTask(
        data.responsable,
        data.area,
        data.nombre_proyecto,
        data.participantes,
        data.objetivo,
        data.rescursos,
        data.relacion,
        data.dias
      );
      toast.success("Tarea Creada");
    } else {
      updateTask(params.id, data);
      toast.success("Tarea actualizada");
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, []);

  return (
    <div className="container contenedor_formulario">
      <div className="row">
        <form className="col-12 col-md-12 form" onSubmit={onSubmit}>
          <h3 className="editar_tarea">{params.id ? "Editar tarea" : "Crear tarea"}</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre del responsable del proyecto
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Nombre del responsable del proyecto"
              autoFocus
              name="responsable"
              {...register("responsable", { required: true })}
            />
            {errors.responsable && (
              <span className="block text-red-400 mb-2">Campo requerido</span>
            )}
          </div>

          <div className=" mb-3">
            <label className="from-label">Area o Departamento o Proceso</label>
            <input
              type="text"
              className="form-control"
              placeholder="Area o Departamento o Proceso"
              autoFocus
              name="area"
              {...register("area", { required: true })}
            />
            {errors.area && (
              <span className="block text-red-400 mb-2">Campo requerido</span>
            )}
          </div>
          <div className=" mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre del proyecto a realizar
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del proyecto a realizar"
              autoFocus
              name="nombre_proyecto"
              {...register("nombre_proyecto", { required: true })}
            />
            {errors.nombre_proyecto && (
              <span className="block text-red-400 mb-2">Campo requerido</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Nombres de participantes</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombres de participantes"
              autoFocus
              name="participantes"
              {...register("participantes", { required: true })}
            />
            {errors.participantes && (
              <span className="block text-red-400 mb-2">Campo requerido</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Objetivo del proyecto</label>
            <textarea
              className="form-control"
              placeholder="Objetivo del proyecto"
              autoFocus
              name="objetivo"
              {...register("objetivo", { required: true })}
            />
            {errors.objetivo && (
              <span className="block text-red-400 mb-2">Campo requerido</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Recursos disponibles para realizar el proyecto
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Recursos disponibles para realizar el proyecto"
              autoFocus
              name="rescursos"
              {...register("rescursos", { required: true })}
            />
            {errors.rescursos && (
              <span className="block text-red-400 mb-2">Campo requerido</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Relación del objetivo del proyecto con la Misión y Visión y
              estrategia de la organización
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Recursos disponibles para realizar el proyecto"
              autoFocus
              name="relacion"
              {...register("relacion", { required: true })}
            />
            {errors.relacion && (
              <span className="block text-red-400 mb-2">Campo requerido</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Dias economicos del personal en funcion de puntualidad y resltados
            </label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Dias economicos del personal en funcion de puntualidad y resltados"
              autoFocus
              name="dias"
              {...register("dias", { required: true })}
            />
            {errors.dias && (
              <span className="block text-red-400 mb-2">Campo requerido</span>
            )}
          </div>
          <div className="btn_enviar">
            <button className="boton">{params.id ? "Editar tarea" : "Crear tarea"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskFormPage;
