import React, { useEffect, useState } from 'react';
import { getCategoryData } from './api';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryData = await getCategoryData();
      setCategories(categoryData);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
