import Input from "./Input";
interface NumericInputProps {
    value: string;
    setValue: (value: string) => void;
    onBlur: () => void;
    placeholder: string;
  }
  
  const NumericInput: React.FC<NumericInputProps> = ({ value, setValue, onBlur, placeholder }) => {
    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    };
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
  
    return (
      <Input
        type="text"
        defaultValue={value}
        placeholder={placeholder}
        variant="outlined"
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        onBlur={onBlur}
      />
    );
  };
  
  export default NumericInput;