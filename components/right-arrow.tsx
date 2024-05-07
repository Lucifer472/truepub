import { BsArrowRight } from "react-icons/bs";

interface RightArrowProps {
  isVisible?: boolean;
  setView: (v: any) => void;
}

const RightArrow = ({ isVisible, setView }: RightArrowProps) => {
  if (!isVisible) return null;

  const handleClick = () => {
    setView((prev: number) => prev + 1);
  };

  return (
    <div className="h-12 absolute translate-x-1/2 top-[45%] right-6 z-[99999] hidden md:flex items-center justify-center">
      <button
        onClick={handleClick}
        className="bg-btn-color border-none cursor-pointer w-12 h-12 flex items-center justify-center"
      >
        <BsArrowRight className="font-semibold text-2xl" />
      </button>
    </div>
  );
};

export default RightArrow;
