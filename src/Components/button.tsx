interface ButtonProps {
    url: string;
    text: string;
}

const Button = (props: ButtonProps) => {
    const handleClick = () => {
        alert('Button clicked!');
        window.location.href = props.url;
    };
    return (
        <button onClick={handleClick}>
            {props.text}
        </button>
    );
};

export default Button;