import React from "react";
import { Link } from "react-router-dom";
import { Topic } from "./model/topic";


const chapters: Partial<Topic>[] = [
  {
    id: 1,
    name: "Programación Funcional",
    description:
      "El paradigma funcional es de los más antiguos, pero también de los más simples y poderosos. Si querés aprender a dominar el mundo con nada, utilizando Haskell, seguí por acá.",
    imageUrl: "https://mumuki.io/static/for_content/capitulo3-01.svg",
  },
  {
    id: 2,
    name: "Programación Lógica",
    description:
      "¿Querés aprender a programar describiendo el mundo y enseñando reglas a la computadora? Aprendamos Prolog.",
    imageUrl: "https://mumuki.io/static/for_content/capitulo4-01.svg",
  },
  {
    id: 3,
    name: "Programación con Objetos",
    description:
      "Modelá la realidad con objetos que se comunican intercambiando mensajes. ¡Conozcamos Wollok!",
    imageUrl: "https://mumuki.io/static/for_content/capitulo5-01.svg",
  },
  {
    id: 4,
    name: "Control de versiones",
    description:
      "Aprendamos a manejar archivos y versiones con Bash y Git.",
    imageUrl: "https://mumuki.io/static/for_content/capitulo11-01.svg",
  },
];

const Book: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <img
          src="https://mumuki.io/logo-alt-large.png"
          alt="Mumuki"
          className="mx-auto mb-4 h-20"
        />
        <h1 className="text-3xl font-bold mb-2">Paradigmas de programación</h1>
        <p className="text-gray-600 mb-6">
          ¿Creías que había una única forma de programar? En este recorrido
          estudiaremos algunas de ellas. ¡Vamos!
        </p>
        <Link
          to="/lesson/1"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded font-semibold"
        >
          ¡Seguí aprendiendo!
        </Link>
      </div>

      {/* Chapters */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Capítulos</h2>
        <div className="space-y-8">
          {chapters.map((chapter) => {
            // const progress = Math.round(
            //   (chapter.completed / chapter.total) * 100
            // );

            return (
              <div key={chapter.id} className="border rounded p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">
                    {chapter.id}.{' '}
                    <Link
                      to={`chapters/${chapter.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {chapter.name}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-2 w-1/3">
                    <div className="flex-1 h-2 bg-gray-200 rounded">
                      {/* <div
                        className="h-2 bg-green-500 rounded"
                        style={{ width: `${progress}%` }}
                      /> */}
                    </div>
                    {/* <span className="text-sm font-semibold">
                      {chapter.completed}/{chapter.total}
                    </span> */}
                  </div>
                </div>

                <div className="flex gap-4">
                  <img
                    src={chapter.imageUrl}
                    alt=""
                    className="h-20 w-20 object-contain"
                  />
                  <p className="text-gray-700">{chapter.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Book;
