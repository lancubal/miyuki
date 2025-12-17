import { Content } from "./content";
import { Lesson } from "./lesson";

export class Topic extends Content {
  public lessons: Lesson[] = [];

  firstLesson(): Lesson | undefined {
    return this.lessons[0];
  }
}