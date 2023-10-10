export const useLocalStorage = () => {
  const setItem = (key: string, value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(error);
    }
  };

  const getItem = (key: string, value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(error);
    }
  };

  const removeItem = (key: string) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.warn(error);
    }
  };

  return { setItem, getItem, removeItem };
};
