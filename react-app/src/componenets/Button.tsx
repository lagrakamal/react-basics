interface Props {
  children: string;
  color?: "primary" | "danger" | "success";
  onClose: () => void;
}
const Button = ({ children, color = "primary", onClose }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClose}>
      {children}
    </button>
  );
};

export default Button;
