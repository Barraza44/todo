class ToDo {
  public priority: string;
  public title: string;
  public description: string;
  public dueDate: string;

  constructor(title: string, description: string, priority: string, dueDate: string) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

export { ToDo }