export interface ToDo {
  id?: string,
  userId: string,
  nameTodo: string,
  status: Status,
  dateInitTodo?: Date
}

export type Status = 'new' | 'end' | 'removed' | '';