import { Task } from 'interfaces/task';

export const filterByLabel = (tasks: Task[], label: string) =>
  tasks.filter(task => task.labels.includes(label));
