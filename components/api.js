import commerce from './commerce'; // Assuming you have set up Commerce.js in a separate file

export const getCategoryData = async () => {
  try {
    const { data: categories } = await commerce.categories.list();
    return categories;
  } catch (error) {
    console.error('Error fetching category data:', error);
    return null;
  }
};
