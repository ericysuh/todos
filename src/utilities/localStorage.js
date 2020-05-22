export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todosList');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todosList', serializedState);
    return undefined;
  } catch (err) {
    return undefined;
  }
};
