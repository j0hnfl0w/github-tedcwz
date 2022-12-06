import { useStorage } from '@vueuse/core';

export const useTodo = () => {
  const todos = useStorage('todos', [
    {
      id: '1',
      status: 'new',
      name: 'My first todo',
      tags: ['work', 'urgent'],
      deadline: null,
    },
  ]) as any;
  watch(
    () => todos.value,
    (to) => {
      console.log(':W todos.value', to);
    },
    {
      deep: true,
    }
  );

  const newTodo = ref({
    // id: null,
    // status: 'new',
    // completed: false/true,
    deadline: null,
    name: '',
    tags: [],
  });

  function _handleError(e: any) {
    console.log('_handleError', e);
    // TODO show notifications here
  }
  function _getTodoById(id: string) {
    const todo = todos.value.find((t: any) => t.id === id);
    if (!todo) throw new Error('No such todo found!');
    return todo;
  }
  function addTodo() {
    const payload = {
      id: Date.now().toString(),
      status: 'new',
      name: newTodo.value.name,
      tags: newTodo.value.tags,
      deadline: newTodo.value.deadline,
    };
    // todos.value.unshift(payload);
    todos.value = [payload, ...todos.value];
    newTodo.value.name = '';
    newTodo.value.tags = [];
    newTodo.value.deadline = null;
  }
  function undoTodo(id: string) {
    try {
      console.log(':undoTodo', id);
      const todo = _getTodoById(id);
      todo.status = 'new';
    } catch (e) {
      _handleError(e);
    }
  }
  function completeTodo(id: string) {
    try {
      console.log(':completeTodo', id);
      const todo = _getTodoById(id);
      todo.status = 'completed';
    } catch (e) {
      _handleError(e);
    }
  }
  function editTodo(id: string, payload: any) {
    try {
      console.log(':editTodo', id);
      const todo = _getTodoById(id);
      Object.assign(todo, payload);
    } catch (e) {
      _handleError(e);
    }
  }
  function removeTodo(id: string) {
    try {
      console.log(':removeTodo', id);
      const todo = _getTodoById(id);
      if (confirm('Remove todo?')) {
        todos.value = todos.value.filter((t: any) => t.id !== todo.id);
      }
    } catch (e) {
      _handleError(e);
    }
  }

  return {
    todos,

    newTodo,
    addTodo,
    removeTodo,
    editTodo,
    undoTodo,
    completeTodo,
  };
};
