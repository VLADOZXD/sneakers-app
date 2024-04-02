import Header from "../Header/Header";

interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="inline-block w-full my-10 bg-white rounded-2xl shadow-lgr">
      <Header />
      <div className="px-14 py-11">{children}</div>
    </div>
  );
};

export default Card;
