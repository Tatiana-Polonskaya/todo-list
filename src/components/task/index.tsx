import { Show, mergeProps } from "solid-js";

type Props = {
  name: string;
  isDone: boolean;
  onIsDoneChanged: () => void;
};

export default function Task(_props: Props) {
  const props = mergeProps(
    {
      name: "Задача №1",
      isDone: false,
    },
    _props
  );
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        checked={props.isDone}
        onChange={props.onIsDoneChanged}
      />
      <label class="form-check-label" for="flexCheckDefault">
        <Show when={props.isDone} fallback={props.name}>
          <del>{props.name}</del>
        </Show>
      </label>
    </div>
  );
}
