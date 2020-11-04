import React from "react";

// Дан див с текстом. Установите этому диву зеленый цвет, границу и border-radius в 30px.

export const Task7 = () => {
  const css = {
    color: "green",
    border: "1px solid red",
    borderRadius: "30px",
  };
  return <div style={css}>текст</div>;
};
