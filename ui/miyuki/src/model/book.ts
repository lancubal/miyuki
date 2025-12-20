import { Content } from "./content";
import { Topic } from "./topic";

export class Book extends Content {
  // TODO add organization
  public chapters: Topic[] = [];

  firstChapter(): Topic | undefined {
    return this.chapters[0];
  }
}