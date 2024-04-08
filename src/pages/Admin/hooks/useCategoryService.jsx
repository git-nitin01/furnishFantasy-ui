import httpService from "../../../httpService";

const useCategoryService = () => {
  const getCategory = async () => {
    try {
      const response = await httpService.get("/category/getCategory");
      return response.data.data;
    } catch (error) {
      throw new Error("Error fetching categories:", error);
    }
  };

  const addCategory = async (newCategory) => {
    try {
      await httpService.post("/category/addCategory", newCategory);
    } catch (error) {
      throw new Error("Error adding category:", error);
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      await httpService.delete("/category/deleteCategory", { data: [categoryId] });
    } catch (error) {
      throw new Error("Error deleting category:", error);
    }
  };

  const editCategory = async (categoryId, formData) => {
    try {
      const data = await httpService.put(`/category/updateCategory/${categoryId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data
    } catch (error) {
      throw new Error("Error editing category:", error);
    }
  };
  return { getCategory, addCategory, deleteCategory, editCategory };
};

export default useCategoryService;
