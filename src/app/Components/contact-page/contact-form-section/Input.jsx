const Input = ({type, name, placeholder}) => {
    return (
        <input className="border w-[48%] p-2 lg:p-4 xl:p-5 rounded-md" type={type} name={name} id="" placeholder={placeholder} />
    );
};

export default Input;