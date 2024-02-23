import { apiSlice } from 'store/query';
import { TTaskItem } from 'AppModels';

export const todoApi = apiSlice
  .enhanceEndpoints({
    addTagTypes: ['Todos'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTodos: builder.query<TTaskItem[], void>({
        query: () => 'todos',
        providesTags: ['Todos'],
      }),
      addTodo: builder.mutation<TTaskItem, any>({
        query: (newTodo) => ({
          url: 'todos',
          method: 'POST',
          body: newTodo,
        }),
        invalidatesTags: ['Todos'],
      }),
      updateTodo: builder.mutation<TTaskItem, any>({
        query: (todo) => ({
          url: `todos/${todo.id}`,
          method: 'PATCH',
          body: todo,
        }),
        invalidatesTags: ['Todos'],
      }),
      removeTodo: builder.mutation<string, any>({
        query: (todo) => ({
          url: `todos/${todo.id}`,
          method: 'DELETE',
          body: todo.id,
        }),
        invalidatesTags: ['Todos'],
      }),
    }),
  });

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useRemoveTodoMutation,
} = todoApi;
