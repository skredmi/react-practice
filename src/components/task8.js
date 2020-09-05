import React from "react";

export const Task8 = () => {
  const show = true;
  const text1 = "текст 1";
  const text2 = "текст 2";
  const text = show ? text1 : text2;
  return <div>{text}</div>;
};
