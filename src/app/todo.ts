export class Todo {
  id: number;
  title: string;
  complete: boolean = false;

  constructor(values: object = {}) {
    // TODO !
    Object.assign(this, values);
  }
}
