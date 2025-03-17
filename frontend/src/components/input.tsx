interface InputProps {
  type: string;
  placeholder: string;
}

export const Input = ({ type, placeholder }: InputProps) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
