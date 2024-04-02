interface ButtonProps {
  text: string;
  onButtonClick: () => void;
}

const Button = ({ text, onButtonClick }: ButtonProps) => {
  return (
    <button
      className="w-full max-w-96 p-4 text-center rounded-2xl bg-lime-400 hover:bg-lime-300 font-semibold text-base text-white ease-in-out duration-200"
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;
