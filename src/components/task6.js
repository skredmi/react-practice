import React from "react";

// Пусть в методе render есть переменная str с текстом 'block'. Сделайте так, чтобы метод render вывел на экран
// следующее (значение атрибута class должно вставится из переменной str):
// <div class="block">
// 	текст
// </div>

export const Task6 = () => {
  const str = "block";
  return <div className={str}>текст</div>;
};
