import { useState } from "react";
import { AddCategory, GifGrid,Header } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Shingeki no kyojin"]);
  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <div className="center">
      <Header/>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* gif item */}
    </div>
  );
};
