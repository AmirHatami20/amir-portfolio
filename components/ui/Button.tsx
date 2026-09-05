import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "default" | "primary" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  default: "bg-accent text-white hover:bg-accent/90 active:bg-accent/90",

  primary: "bg-primary text-white",

  outline:
    "border border-accent/80 text-accent bg-transparent hover:bg-accent hover:text-primary active:bg-accent active:text-primary",

  danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-600",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
