import httpService from "../../../httpService";

const useCategoryService = () => {
  const getCategory = async () => {
    try {
      const response = await httpService.get("/category/getCategory");
      return response.data;
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

  return { getCategory, addCategory, deleteCategory };
};

export default useCategoryService;
