import React from "react";

export const useField = (setState) => {
  const onChange = (e) => {
    const { value } = e.target;
    setState(value);
  };

  return { onChange };
};
