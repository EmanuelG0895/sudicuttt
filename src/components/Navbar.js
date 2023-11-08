"use client";

import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useTasks } from "../context/TasksContext";
import "./navbar.css"

export function Navbar() {
  const router = useRouter();
  const { tasks } = useTasks();

  return (    
      <nav className="navbar navbar-expand-lg color_nav">
        <div className="container-fluid">
          <Link className="col-6" href="/">
            <h1 className="titulo_nav">Ver proyectos</h1>
          </Link>
          <button
            className="col-6 col-md-3 btn_crear"
            onClick={() => router.push("/new")}
          >
            <AiOutlinePlus className="" />
            Crear Proyecto
          </button>
        </div>
      </nav>
  );
}
