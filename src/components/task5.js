import React from "react";

// Пусть в методе render есть переменная attr с текстом 'block'. Сделайте так, чтобы метод render вывел на экран
// следующее (значение атрибута id должно вставится из переменной attr):
// <div id="block">
// 	текст
// </div>

export const Task5 = () => {
  const attr = "block";
  return <div id={attr}>текст</div>;
};
