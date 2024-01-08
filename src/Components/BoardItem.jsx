export default function BoardItem(
  props = {
    name: "Quantum Quest",
    image: "FALSE",
    points: "3",
    doc_id: "1bsCWUE1Lyxywvb0rHA4YIHkXaShGn8v5dHbAYW_mIxQ",
    update_every: "5",
    priority: "3",
  }
) {
  return (
    <div
      className={`px-8 py-4 rounded-md shadow border border-yellow-400 flex items-center gap-8 ${
        props.priority >= props.place ? "!bg-yellow-300" : null
      }`}
    >
      <div
        className={`text-2xl font-bold bg-white w-16 h-16 flex items-center justify-center rounded-full ${
          props.priority >= props.place ? "!bg-yellow-700 text-white" : null
        }`}
      >
        {props.place}
      </div>
      <div>
        <div className="text-2xl font-semibold">{props.name}</div>
        <div className="text-sm mt-1 bg-yellow-500 w-max px-2 rounded-full text-white">
          {props.points} Points
        </div>
      </div>
      <div className="ml-auto">
        {props.image === false ||
        `${props.image}`.toUpperCase() === "FALSE" ||
        props.image === null ||
        props.image === "" ||
        props.image === undefined ? null : (
          <>
            <img
              src={props.image}
              alt={props.name}
              className="w-20 h-20 object-cover"
            />
          </>
        )}
      </div>
    </div>
  );
}
