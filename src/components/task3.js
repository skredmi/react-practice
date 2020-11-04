import React from "react";

// Пусть в методе render есть переменная text с текстом '<p>текст</p>'. С ее помощью выведите следующее:
// <div>
// 	<p>текст</p>
// </div>

export const Task3 = () => {
  const text = <p>текст</p>;
  return <div>{text}</div>;
};
