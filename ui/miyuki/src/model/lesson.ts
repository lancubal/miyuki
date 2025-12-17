import { Guide } from "./guide";

export class Lesson {
  constructor(
    public readonly guide: Guide,
    public readonly number: number
  ) {}
}