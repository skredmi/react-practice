import React from "react";

// Пусть в методе render есть переменная text1 с текстом '<p>текст1</p>' и переменная text2 с текстом '<p>текст2</p>'. С их помощью выведите следующее:
// <div>
// 	<p>текст1</p>
// 	<p>!!!</p>
// 	<p>текст2</p>
// </div>

export const Task4 = () => {
  const text1 = <p>текст</p>;
  const text2 = <p>текст</p>;
  return (
    <div>
      {text1}
      <p>!!!</p>
      {text2}
    </div>
  );
};
