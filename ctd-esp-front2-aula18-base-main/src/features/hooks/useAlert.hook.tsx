// Podemos alterar a implementação para nossa própria biblioteca de alertas, graças ao princípio SOLID de inversão de dependência.
const useAlert = () => {
  const dispatchSuccessAlert = (message: string) => {
    alert(`Success: ${message}`)
  };

  const dispatchErrorAlert = (message: string) => {
    alert(`Error: ${message}`)
  };

  return {
    dispatchSuccessAlert,
    dispatchErrorAlert,
  };
};

export default useAlert;
