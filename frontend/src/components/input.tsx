interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
  reference?: any;
  onChange?: () => void;
}

export const Input = ({
  type,
  placeholder,
  className,
  onChange,
  reference,
}: InputProps) => {
  return (
    <div className="py-2">
      <input
        className={`${className} mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        ref={reference}
      />
    </div>
  );
};
