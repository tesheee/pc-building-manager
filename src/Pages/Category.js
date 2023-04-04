import React, { useState } from "react";
import { Card, Pagination, Sort, Filters } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../Components/ItemBlock/Skeleton";
import { setCurrentPage } from "../redux/slices/filterSlice";
import { fetchProducts } from "../redux/slices/productsSlice";
import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import qs from "qs";

function Category() {
  //const { categoryName } = useParams();

  //const navigate = useNavigate();

  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.searchValue);
  const { items, status } = useSelector((state) => state.products);
  const { sort, currentPage } = useSelector((state) => state.filter);

  //Получение данных из redux
  const getProducts = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    console.log(sortBy);
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";

    dispatch(
      fetchProducts({
        sortBy,
        order,
        currentPage,
        searchValue,
      })
    );

    window.scrollTo(0, 0);
  };

  //Создание строки с запросом
  /*React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      currentPage,
      searchValue,
    });
    navigate(`?${queryString}`);
  }, [[currentPage, sort.sortProperty, searchValue]]);*/

  //Смена страницы на redux
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  //Отлавливание изменений для данных
  React.useEffect(() => {
    getProducts();
  }, [currentPage, sort.sortProperty, searchValue]);

  //Вывод данных на странице
  const videocards = items
    .filter((obj) => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => (
      <Card
        key={obj.id}
        id={obj.id}
        pic={obj.pic}
        name={obj.name}
        price={obj.price}
        count={obj.count}
      />
    ));

  return (
    <div className="container">
      <div className="category__header">
        <h3>Видеокарты</h3>
      </div>
      <Sort />
      <div className="category-grid">
        <Filters />
        <div className="category-content">
          {status == "loading"
            ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
            : videocards}
        </div>
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Category;
