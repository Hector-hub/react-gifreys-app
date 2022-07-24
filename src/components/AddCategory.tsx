import { FormEvent, useState } from "react";

interface CategoriesProps {
  // setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  onNewCategory: Function;
}

export const AddCategory = ({ onNewCategory }: CategoriesProps) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputValue.trim().length < 1) return;
    onNewCategory(inputValue.trim());
    // setCategories((categories: string[]) => [inputValue, ...categories]);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
      className="input"
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      

    </form>
  );
};
