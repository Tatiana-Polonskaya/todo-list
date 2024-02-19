import type { JSX } from "solid-js";

type Props = {
  value: string;
  onChanged: (value: string) => void;
};

export default function InputField(props: Props) {
  const handleOnChanged: JSX.EventHandler<HTMLInputElement, Event> = (
    e: Event
  ) => {
    const target = e.target as HTMLInputElement;
    if (target) props.onChanged(target.value);
  };

  return (
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">
        Введите название задачи
      </label>
      <input
        type="email"
        class="form-control form-control"
        id="exampleFormControlInput1"
        placeholder="Прочитать статью..."
        value={props.value}
        onChange={handleOnChanged}
      />
    </div>
  );
}
