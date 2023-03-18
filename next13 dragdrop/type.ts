export type TaskType = {
  id: string;
  content: string;
};

export type ColumnType = {
  id: string;
  title: string;
  taskIds: string[];
};

export type StateType = {
  tasks: Record<string, TaskType>;
  columns: Record<string, ColumnType>;
  columnOrder: string[];
};
