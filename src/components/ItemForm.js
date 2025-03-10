import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleNameChange(e) {
    setName(e.target.value)
    console.log(e.target.value)
  }

  function handleCategoryClick(e) {
    setCategory(e.target.value)
    console.log(e.target.value)
  }

  function submitNewItem(e){
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name: name,
      category: category,
    })  
  }

  return (
    <form className="NewItem" onSubmit={submitNewItem}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onClick={handleCategoryClick}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
