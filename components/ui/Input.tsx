import type { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="flex h-10 rounded-md border border-white/10 bg-primary px-4 py-5 text-sm font-light placeholder:text-white/60 outline-none focus:border-accent"
    />
  );
};

export default Input;
