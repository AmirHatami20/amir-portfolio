const Button = ({children, variant = "default", size = "md", className = "", onClick, ...props}) => {
    const variants = {
        default: "bg-accent text-white hover:bg-accent/90",
        primary: "bg-primary text-white",
        outline: "border border-accent/80 text-accent bg-transparent hover:bg-accent hover:text-primary",
        danger: "bg-red-500 text-white hover:bg-red-600",
    }

    const sizes = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    }

    return (
        <button
             onClick={onClick}
            className={`cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none ${variants[variant] || variants.default} ${sizes[size]} ${className} `}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
