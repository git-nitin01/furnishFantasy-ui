import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit, FaImage } from "react-icons/fa";
import useCategoryService from "./hooks/useCategoryService";
import Modal from "./components/Modal";

const AdminCategoryPage = () => {
  const { getCategory, addCategory, deleteCategory, editCategory } =
    useCategoryService();
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    catName: "",
    catDescription: "",
    catImg: null,
  });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState({
    catName: "",
    catDescription: "",
    catImg: null,
  });
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getCategory();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await addCategory(newCategory);
      setNewCategory({ catName: "", catDescription: "", catImg: null });
      setUploadedImageUrl(null); // Clear uploaded image URL
      fetchData();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      fetchData();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setModalCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    setModalCategory({ catName: "", catDescription: "", catImg: null });
    setUploadedImageUrl(null); // Clear uploaded image URL
  };

  const handleEditModal = async () => {
    // Handle edit action, e.g., make a call to backend
    const { catDescription, catImg, catName, catID } = modalCategory;
    const formData = new FormData();
    formData.append("file", catImg); 
    formData.append(
      "category",
      JSON.stringify({
        catName,
        catDescription
      })
    );
    await editCategory(catID, formData);

    setIsModalOpen(false);
    setSelectedCategory(null);
    setModalCategory({ catName: "", catDescription: "", catImg: null });
    setUploadedImageUrl(null); // Clear uploaded image URL
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalCategory({ ...modalCategory, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result?.toString().split(",")[1];
      setModalCategory({ ...modalCategory, catImg: base64String });
      setUploadedImageUrl(reader.result); // Set uploaded image URL
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  console.log("selectedCategory", selectedCategory);

  return (
    <div className="container rounded-lg h-full mx-auto py-8 px-4 bg-white">
      <h1 className="text-2xl font-bold mb-8">Admin Category Page</h1>
      <form onSubmit={handleAddCategory} className="mb-8">
        <div className="flex items-center mb-4">
          <input
            type="text"
            name="catName"
            placeholder="Enter category name"
            value={newCategory.catName}
            onChange={(e) =>
              setNewCategory({ ...newCategory, catName: e.target.value })
            }
            className="w-1/2 bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="catDescription"
            placeholder="Enter category description"
            value={newCategory.catDescription}
            onChange={(e) =>
              setNewCategory({ ...newCategory, catDescription: e.target.value })
            }
            className="ml-4 w-1/2 bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center">
          <label className="bg-blue-500 flex items-center text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none">
            {/* <FaImage className="mr-2" /> */}
            <input type="file" onChange={handleImageUpload} />
          </label>
          <button
            type="submit"
            className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Add Category
          </button>
        </div>
      </form>
      <table className="min-w-full bg-white border border-gray-200 rounded-md">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.catID} className="border-b border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {category.catName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                <button
                  onClick={() => handleDeleteCategory(category.catID)}
                  className="text-red-600 hover:text-red-700 focus:outline-none"
                >
                  <FaTrash />
                </button>
                <button
                  onClick={() => handleEditCategory(category)}
                  className="text-blue-600 hover:text-blue-700 focus:outline-none"
                >
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Edit Category"
        size="lg"
        onEdit={handleEditModal}
      >
        {selectedCategory && (
          <>
            <div className="mb-4">
              <label
                htmlFor="catName"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="catName"
                type="text"
                name="catName"
                value={modalCategory.catName}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none bg-white"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="catDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="catDescription"
                name="catDescription"
                value={modalCategory.catDescription}
                onChange={handleInputChange}
                className="mt-1 p-2 border bg-white border-gray-300 rounded-md w-full h-24 resize-none focus:outline-none"
              />
            </div>

            <>
              <label
                htmlFor="uploadedImage"
                className="block text-sm font-medium text-gray-700"
              >
                {uploadedImageUrl ? "Uploaded Image" : "Image"}
              </label>
              <img
                src={
                  uploadedImageUrl ||
                  `data:image/png;base64, ${selectedCategory.catImg}`
                }
                alt="Uploaded Image"
                className="mt-2 w-full h-44 object-contain rounded-md"
              />
            </>

            <div className="my-4">
              <label
                htmlFor="catImg"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Upload Image
              </label>
              <input
                id="catImg"
                type="file"
                onChange={handleImageUpload}
                className="mt-1 bg-white p-2 border border-gray-300 rounded-md w-full focus:outline-none"
              />
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default AdminCategoryPage;
