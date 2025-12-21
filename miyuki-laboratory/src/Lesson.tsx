

import React from "react"
import { Link } from "react-router-dom"
import { Exercise } from "./model/guide";
import { SubmissionStatus } from "./model/submission";
import { statusIcon } from "./helpers/statusIcon";


const exercises: Partial<Exercise>[] = [
  { id: 1, name: "Paradigmas... ¿para qué?" },
  { id: 2, name: "Los números" },
  { id: 3, name: "Valores y variables" },
  { id: 4, name: "Más valores" },
  { id: 5, name: "Las Funciones" },
  { id: 6, name: "Más funciones" },
  { id: 7, name: "Los booleanos" },
  { id: 8, name: "Múltiples parámetros" },
  { id: 9, name: "Triángulos" },
  { id: 10, name: "Combinando funciones" },
  { id: 11, name: "Composición" },
  { id: 12, name: "Más composición" },
  { id: 13, name: "Los operadores son funciones" },
  { id: 14, name: '"Juguemos con strings"' },
];

function statusFor(_exercise: Partial<Exercise>): SubmissionStatus {
  // TODO read from local storage. may use code from laboratory
  return SubmissionStatus.Pending
}

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
        {exercises.map((exercise) => (
          <li key={exercise.id} className="flex items-center gap-2">
            <span className={`text-lg ${statusIcon(statusFor(exercise))}`}>●</span>
            <Link
              to={`/exercises/${exercise.id}`}
              className="text-blue-600 hover:underline"
            >
              {exercise.id}. {exercise.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Continue */}
      <Link
        to="/exercises/1"
        className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded font-semibold"
      >
        ¡Continuá esta lección!
      </Link>
    </div>
  );
};

export default Lesson;
