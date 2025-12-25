import { Link } from "react-router-dom";
import { Book, Chapter } from "./model/book";
import { Exercise, Guide } from "./model/guide";
import { Topic } from "./model/topic";
import { DeepPartial } from "./helpers/DeepPartial";

export function Breadcrumbs({ book, chapter, lesson, exercise }: {
  book: DeepPartial<Book>,
  chapter?: DeepPartial<Topic>,
  lesson?: DeepPartial<Guide>,
  exercise?: DeepPartial<Exercise>
}) {


  return (
    <nav className="text-gray-600 mb-4 flex items-center gap-2">
      <span className="font-semibold text-blue-600"></span>
      <Link to="/" className="hover:underline">
        {book.name}
      </Link>

      {/* TODO Add numbers */}
      {/* TODO fix underline numbers */}
      {chapter && (
        <>
          <span>/</span>
          <a href={`/chapters/${chapter.id}`} className="hover:underline">
            1. {chapter.name}
          </a>
        </>
      )}

      {lesson && (
        <>
          <span>/</span>
          <Link to={`/lessons/${lesson.id}`} className="hover:underline">
            1. {lesson.name}
          </Link>
        </>
      )}

      {exercise && (
        <>
          <span>/</span>
          <Link to={`/exercises/${exercise.id}`} className="hover:underline">
            1. {exercise.name}
          </Link>
        </>
      )}
    </nav>
  )
}