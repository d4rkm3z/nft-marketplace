type Props = {
  title: string;
  handleClick: () => void;
  className?: string;
};

export const Button = ({ title, handleClick, className }: Props) => (
  <button
    type="button"
    onClick={handleClick}
    className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${className}`}
  >
    {title}
  </button>
);
