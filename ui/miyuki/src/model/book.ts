import { Content } from "./content";
import { Topic } from "./topic";

export const SubmissionStatusRules = {
  completed: (s: SubmissionStatus) =>
    s === SubmissionStatus.Passed ||
    s === SubmissionStatus.Skipped,

  shouldRetry: (s: SubmissionStatus) =>
    [SubmissionStatus.Failed, SubmissionStatus.Errored, SubmissionStatus.PassedWithWarnings].includes(s)
};


export class Assignment {
  public attempts = 0;
  public submission?: Submission;

  constructor(
    public readonly exercise: Exercise
  ) {}

  submit(submission: Submission): Submission {
    if (!this.attemptsLeft()) {
      return submission;
    }

    this.submission = submission;
    const result = submission.tryEvaluate();
    submission.status = result.status;
    submission.result = result.result;
    this.attempts += 1;

    return submission;
  }

  attemptsLeft(): boolean {
    return !SubmissionStatusRules.shouldRetry(
      this.submission?.status ?? SubmissionStatus.Pending
    );
  }
}
export class Book extends Content {
  // TODO add organization
  public chapters: Topic[] = [];

  firstChapter(): Topic | undefined {
    return this.chapters[0];
  }
}