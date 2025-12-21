import React from "react"
import { Link } from "react-router-dom"
import { t } from "./i18n"
import { Book } from "./model/book"
import { Topic } from "./model/topic"

const book: Partial<Book> = {
  id: 1,
  name: "PdeP",
}

const chapter: Partial<Topic> = {
  id: 1,
  name: "Programación Funcional",
  imageUrl: "https://mumuki.io/static/for_content/capitulo3-01.svg",
  descriptionHtml: `
    El paradigma funcional es de los más <strong>antiguos</strong>,
    pero también de los más <strong>simples</strong> y
    <strong>poderosos</strong>. Si querés aprender
    <em>a dominar el mundo con nada</em>, utilizando
    <a href="https://www.haskell.org/" target="_blank">Haskell</a>,
    seguí por acá.
  `,
}


const lessons = [
  {
    id: 1,
    name: "Valores y Funciones",
    exercises: [
      { id: 1, name: "Paradigmas... ¿para qué?" },
      { id: 2, name: "Los números" },
      { id: 3, name: "Valores y alias" },
      { id: 4, name: "Más valores" },
      { id: 5, name: "Las funciones" },
      { id: 6, name: "Más funciones" },
      { id: 7, name: "Los booleanos" },
      { id: 8, name: "Múltiples parámetros" },
      { id: 9, name: "Triángulos" },
      { id: 10, name: "Combinando funciones" },
      { id: 11, name: "Composición" },
      { id: 12, name: "Más composición" },
      { id: 13, name: "Los operadores son funciones" },
      { id: 14, name: "Juguemos con strings" },
    ],
  },
]


const Chapter: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex gap-2">
        <Link to="/" className="hover:underline">
          {book.name}
        </Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">
          {chapter.name}
        </span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {t("chaptername", {
            number: chapter.id,
            name: chapter.name,
          })}
        </h1>

        <div className="bg-white border rounded p-4 flex gap-4">
          <img
            src={chapter.imageUrl}
            alt={chapter.name}
            className="w-24 h-24"
          />

          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: chapter.descriptionHtml!,
            }}
          />
        </div>
      </header>

      {/* Lessons */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          {t("lessons")}
        </h2>

        {lessons.map((lesson) => (
          <div key={lesson.id} className="mb-8">
            <h3 className="text-lg font-semibold mb-2">
              {lesson.id}.{" "}
              <Link
                to={`/lessons/${lesson.id}`}
                className="text-blue-600 hover:underline"
              >
                {lesson.name}
              </Link>
            </h3>

            <ul className="space-y-2">
              {lesson.exercises.map((exercise) => (
                <li key={exercise.id} className="text-sm">
                  <Link
                    to={`/lessons/${lesson.id}/exercise/${exercise.id}`}
                    className="hover:underline text-gray-700"
                  >
                    {exercise.id}. {exercise.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Appendix */}
      <section className="mt-10">
        <h3 className="text-lg font-semibold mb-2">
          {t("appendix")}
        </h3>

        <p className="text-gray-700">
          {t("appendixCta")}{" "}
          <Link
            to={`/chapter/${chapter.id}/appendix`}
            className="text-blue-600 hover:underline"
          >
            {t("appendixLink")}
          </Link>
        </p>
      </section>
    </div>
  )
}

export default Chapter
