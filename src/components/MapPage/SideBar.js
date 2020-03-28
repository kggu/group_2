import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { useBackendAPI } from "../../utils/backendAPI";

const SideBar = () => {
  const {
    hotspotCategories,
    selectedCategory,
    setSelectedCategory
  } = useBackendAPI();
  const [categoryItems, setCategoryItems] = useState();

  const _selectCategory = clickedCategory => {
    console.log("clicked: " + clickedCategory);
    setSelectedCategory(clickedCategory);
  };

  const _loadCategoryItems = () => {
    setCategoryItems(
      hotspotCategories.map(function(category) {
        return (
          <CategoryItem
            value={category.value}
            name={category.name}
            onClick={_selectCategory}
          />
        );
      })
    );
  };

  useEffect(() => {
    if (hotspotCategories) {
      _loadCategoryItems();
    }
  }, [hotspotCategories]);



  return (
    <div className="sidebar">
      <div className="categories">
        <div>Categories</div>
        <button onClick={()=>_selectCategory("")}>reset</button>
        {categoryItems ? categoryItems : <small>loading...</small>}
      </div>
    </div>
  );
};

const CategoryItem = props => {
  return (
    <div className="category-item">
      <a onClick={() => props.onClick(props.value)}>{props.name}</a>
    </div>
  );
};

export default SideBar;
