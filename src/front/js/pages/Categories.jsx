import React from "react";
import CardCategory from "../component/CardCategory.jsx";

const Categories = () => {
  return (
    <div className="container-fluid mt-4 p-5">
      <h1>Comida</h1>
      <h3>Comida húmeda</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </div>
    </div>
  );
};

export default Categories;
