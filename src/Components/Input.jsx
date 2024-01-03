/* eslint-disable react/prop-types */
export default function Input(props) {
  const { className, containerClassName, ...other } = props;
  return (
    <div className={`flex flex-col my-2 ${containerClassName}`}>
      <label
        htmlFor={props.id}
        className={`text-xs font-medium text-neutral-800 mb-1`}
      >
        {props.label}
      </label>
      <input
        {...other}
        className={`bg-neutral-100 text-xs md:text-base px-4 py-2 rounded outline-none border border-neutral-300 focus:shadow transition-shadow ${className}`}
      />
    </div>
  );
}
