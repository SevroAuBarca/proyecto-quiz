export const useField = (setState) => {
  const onChangeMany = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onChange = (e) => {
    const { value } = e.target;
    setState(value);
  };

  return { onChange, onChangeMany };
};
