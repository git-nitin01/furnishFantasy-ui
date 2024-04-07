import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import useCategoryService from "./hooks/useCategoryService";

const AdminCategoryPage = () => {
  const { getCategory, addCategory, deleteCategory } = useCategoryService();
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ catName: "", catDescription: "" });

  const fetchCategories = async () => {
    try {
      const data = await getCategory();
      setCategories(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await addCategory(newCategory);
      setNewCategory({ catName: "", catDescription: "" });
      fetchCategories();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      fetchCategories();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Category Page</h1>
      <form onSubmit={handleAddCategory} className="mb-4">
        <input
          type="text"
          name="catName"
          placeholder="Enter category name"
          value={newCategory.catName}
          onChange={handleInputChange}
          className="mr-2 border-gray-300 border p-2"
        />
        <input
          type="text"
          name="catDescription"
          placeholder="Enter category description"
          value={newCategory.catDescription}
          onChange={handleInputChange}
          className="mr-2 border-gray-300 border p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Category
        </button>
      </form>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="flex items-center justify-between mb-2">
            <span>{category.name}</span>
            <div>
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="text-red-600 hover:text-red-700 mr-2"
              >
                <FaTrash />
              </button>
              <button
                onClick={() => console.log("Edit clicked")} // Implement edit functionality
                className="text-blue-600 hover:text-blue-700"
              >
                <FaEdit />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCategoryPage;
