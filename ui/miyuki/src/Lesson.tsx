

import React from "react"
import { Link } from "react-router-dom"

type ExerciseStatus = "passed" | "failed" | "pending"

interface LessonExercise {
  id: number
  title: string
  status: ExerciseStatus
}

const exercises: LessonExercise[] = [
  { id: 1, title: "Paradigmas... ¿para qué?", status: "pending" },
  { id: 2, title: "Los números", status: "pending" },
  { id: 3, title: "Valores y variables", status: "pending" },
  { id: 4, title: "Más valores", status: "pending" },
  { id: 5, title: "Las Funciones", status: "pending" },
  { id: 6, title: "Más funciones", status: "pending" },
  { id: 7, title: "Los booleanos", status: "pending" },
  { id: 8, title: "Múltiples parámetros", status: "failed" },
  { id: 9, title: "Triángulos", status: "passed" },
  { id: 10, title: "Combinando funciones", status: "pending" },
  { id: 11, title: "Composición", status: "pending" },
  { id: 12, title: "Más composición", status: "pending" },
  { id: 13, title: "Los operadores son funciones", status: "pending" },
  { id: 14, title: '"Juguemos con strings"', status: "pending" },
];

const statusIcon = (status: ExerciseStatus) => {
  switch (status) {
    case "passed":
      return "text-green-500";
    case "failed":
      return "text-red-500";
    default:
      return "text-gray-400";
  }
};

const Lesson: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex gap-2 items-center">
        <span className="font-semibold text-blue-600">▲</span>
        <Link to="/" className="hover:underline">Organización de prueba de contenido</Link>
        <span>/</span>
        <Link to="/chapter/4" className="hover:underline">4. Programación Funcional</Link>
        <span>/</span>
        <span className="text-gray-700">1. Valores y Funciones</span>
      </nav>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Lección 1: Valores y Funciones</h1>
        <div className="text-4xl font-bold">λ</div>
      </div>

      {/* Intro */}
      <div className="prose max-w-none mb-10">
        <p>¡Hola!</p>
        <p>
          El paradigma funcional es una forma de resolver problemas de programación bastante antigua:
          sus orígenes se remontan al 1930, cuando ni siquiera existían las computadoras.
        </p>
        <p>
          Y aunque estas ideas fueron desarrolladas por matemáticos, la buena noticia es que no hay
          que saber nada de matemática para poder entenderlo y aprovecharlo… bueno, bueno, capaz
          saber sumar y multiplicar nos sea útil 😛
        </p>
        <p>
          Este paradigma es <strong>muy simple</strong>, pero permite hacer <strong>cosas muy poderosas</strong>.
          Con muy poquitas herramientas podés hacerlo todo.
        </p>
        <p>
          ¡Empecemos a programar en <em>funcional</em> usando Haskell!
        </p>
      </div>

      {/* Exercises */}
      <h2 className="text-2xl font-semibold mb-4">Ejercicios</h2>
      <ul className="space-y-2 mb-8">
        {exercises.map((ex) => (
          <li key={ex.id} className="flex items-center gap-2">
            <span className={`text-lg ${statusIcon(ex.status)}`}>●</span>
            <Link
              to={`/exercise/${ex.id}`}
              className="text-blue-600 hover:underline"
            >
              {ex.id}. {ex.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Continue */}
      <Link
        to="/exercise/1"
        className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded font-semibold"
      >
        ¡Continuá esta lección!
      </Link>
    </div>
  );
};

export default Lesson;
