import Input from "./Input";
interface NumericInputProps {
    value?: string;
    setValue?: (value: string) => void;
    onBlur?: () => void;
    placeholder?: string;
  }
  
  function NumericInput({ value, setValue, onBlur, placeholder }: NumericInputProps)  {
    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
      
    };
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if(setValue){
      setValue(e.target.value);
      }
    };
  
    return (
      <Input
        type="text"
        defaultValue={value}
        placeholder={placeholder}
        variant="filled"
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        onBlur={onBlur}
      />
    );
  }
  
  export default NumericInput;