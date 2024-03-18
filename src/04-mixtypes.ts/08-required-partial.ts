export {};

interface Todo {
  id: number;
  name?: string;
  completed: boolean;
}

type ReadOnlyTodo = Readonly<Todo>;

type PartialTodo = Partial<Todo>;

type RequiredTodo = Required<Todo>;
