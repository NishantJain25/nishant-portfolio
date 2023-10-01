export default function CustomInput({
  name,
  type,
  label,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="flex flex-col mb-4 w-full">
      <p className="text-white text-[1em] pb-2">{label}</p>

      {type === "text" ? (
        <input
          name={name}
          className="px-8 py-4 border-[1px] border-white rounded-full bg-transparent focus:outline-none focus:border-orange-300"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          id="custom-textarea"
          name={name}
          className="px-8 py-4 border-[1px] border-white rounded-[2rem] bg-transparent focus:outline-none focus:border-orange-300 h-[100px] min-h-[75px] max-h-[150px]"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
