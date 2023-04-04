import React from "react";

function Test() {
  const data = [{ price: 1111114312 }];

  return (
    <div className="container">
      <div className="category__header">
        <h3>Страница для экспериментов</h3>
        {data.map((elem) => (
          <a>{elem.price}</a>
        ))}
      </div>
    </div>
  );
}

export default Test;
