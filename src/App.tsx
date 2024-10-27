import { For, createSignal } from "solid-js";
import Button from "./components/button";
import InputField from "./components/input-field";
import TaskRow from "./components/task-row";
import { createStore } from "solid-js/store";

export interface ITask {
  id: number;
  name: string;
  isDone: boolean;
}

function App() {
  const [store, setStore] = createStore([] as ITask[]);
  const [taskId, setTaskId] = createSignal(0);
  const [newTask, setNewTask] = createSignal("");

  const handleAddClick = () => {
    if (newTask()) {
      setStore((t) => [...t, { id: taskId(), name: newTask(), isDone: false }]);
      setTaskId((prev) => prev + 1);
      setNewTask("");
      console.log(taskId());
      console.log(store);
    }
  };

  const handleDeleteClick = (id: number) => {
    setStore((t) => t.filter((item) => item.id !== id));
  };

  const handleIsDoneChanged = (id: number) => {
    setStore(
      (todo) => todo.id === id,
      "isDone",
      (isDone) => !isDone
    );
  };

  return (
    <div class="container">
      <div class="d-flex flex-row justify-content-between align-items-center gap-3">
        <div class="flex-grow-1">
          <InputField
            value={newTask()}
            onChanged={(value: string) => setNewTask(value)}
          />
        </div>

        <div class="mt-3">
          <Button name="+ Добавить" onClick={handleAddClick} type="add" />
        </div>
      </div>

      <div class="mb-3 d-flex flex-column gap-3">
        <For each={store}>
          {(item) => (
            <TaskRow
              task={item}
              onDeleteClick={handleDeleteClick}
              onIsDoneChanged={handleIsDoneChanged}
            />
          )}
        </For>
      </div>
    </div>
  );
}

export default App;
