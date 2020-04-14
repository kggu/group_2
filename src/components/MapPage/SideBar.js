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
  const [selectedItem, selectItem] = useState("");

  useEffect(() => {
    if (hotspotCategories) {
      _loadCategoryItems();
    }
  }, [hotspotCategories, selectedItem]);

  const _loadCategoryItems = () => {
    setCategoryItems(
      hotspotCategories.map(function(category) {
        return (
          <CategoryItem
            value={category.value}
            name={category.name}
            handleClick={_selectCategory}
            selectedItem={selectedItem}
          />
        );
      })
    );
  };

  const _selectCategory = clickedCategory => {
    console.log("clicked: " + clickedCategory);
    if (selectedCategory === clickedCategory) {
      selectItem("");
      setSelectedCategory("");
    } else {
      selectItem(clickedCategory);
      setSelectedCategory(clickedCategory);
    }
  };

  return (
    <div className="sidebar">
      <div className="categories">
        <div className="categories-header">
          <div>Categories</div>
          <button className="resetBtn" onClick={() => _selectCategory("")}>Reset</button>
        </div>
        {categoryItems ? categoryItems : <small>loading...</small>}
      </div>
    </div>
  );
};

const CategoryItem = props => {
  return (
    <div
      className={`category-item ${
        props.selectedItem == props.value ? "category-item-selected" : ""
      }`}
    >
      <a onClick={() => props.handleClick(props.value)}>{props.name}</a>
    </div>
  );
};

export default SideBar;
