const TextArea = ({value, onChange, placeholder,name}) => {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="flex min-h-20 h-30 text-sm w-full font-light rounded-md border border-white/10 bg-primary px-4 py-5 placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
        />
    );
};

export default TextArea;