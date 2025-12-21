import { Content } from "./content";
import { Lesson } from "./lesson";

export class Topic extends Content {
  // TODO
  public image: string = ""
  public lessons: Lesson[] = [];

  firstLesson(): Lesson | undefined {
    return this.lessons[0];
  }
}