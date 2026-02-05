interface ButtonProps {
    url: string;
    text: string;
}

const Button = (props: ButtonProps) => {
    const handleClick = () => {
        window.location.href = props.url;
    };
    return (
        
        <button className="bg-[#e17275] mx-auto" onClick={handleClick}>
            {props.text}
        </button>
    );
};

export default Button;