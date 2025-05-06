const Input = ({type, name, placeholder}) => {
    return (
        <input className="border w-[48%] pr-4 xl:w-[305px] p-2 lg:p-4 xl:p-5 rounded-md" type={type} name={name} id="" placeholder={placeholder} />
    );
};

export default Input;