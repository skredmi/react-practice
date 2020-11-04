import React from "react";

// Пусть в методе render есть переменная show, которая может иметь значение true или false. Сделайте так, чтобы,
// если эта переменная равна true, метод render вывел на экран следующее:
// <div>
// 	текст 1
// </div>
// А если эта переменная равна false, то следующее:
// <div>
// 	текст 2
// </div>

export const Task8 = () => {
  const show = true;
  const text1 = "текст 1";
  const text2 = "текст 2";
  const text = show ? text1 : text2;
  return <div>{text}</div>;
};
