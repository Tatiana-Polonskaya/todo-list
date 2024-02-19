type Props = {
  name: string;
  type: "add" | "delete";
  onClick: () => void;
};

export default function Button(props: Props) {
  return (
    <button
      type="button"
      class="btn btn-success"
      classList={{
        "btn-succes": props.type === "add",
        "btn-danger": props.type === "delete",
      }}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
