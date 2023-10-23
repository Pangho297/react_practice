type CustomInput = {
  value: string;
};

export default function CustomInput({
  value,
  ...rest
}: CustomInput &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) {
  return <input value={value} {...rest} />;
}
