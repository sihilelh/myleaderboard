/* eslint-disable react/prop-types */
export default function Button(props = { className: "" }) {
  const { className, ...other } = props;
  return (
    <button
      {...other}
      className={`border-2 border-neutral-600 text-neutral-100 text-xs md:text-base bg-gradient-to-r to-neutral-800 from-neutral-700 w-full flex items-center justify-center px-4 py-2 rounded font-semibold ${className}`}
    >
      {props.children}
    </button>
  );
}
