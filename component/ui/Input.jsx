const Input = ({name, type = "text", placeholder,}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="flex h-12 rounded-md border border-white/10 focus:border-accent font-dana-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"

        />

    );
};

export default Input;