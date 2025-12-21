import { Locale, Slug } from "./common";

export abstract class Content {
  constructor(
    public readonly id: number,
    public readonly slug: Slug,
    public name: string,
    public description?: string,
    public locale?: Locale,
  ) { }

  public toResource(): Record<string, unknown> {
    return {
      slug: this.slug,
      name: this.name,
      description: this.description,
      locale: this.locale
    };
  }

}
