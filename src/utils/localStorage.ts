export const setStoreFilters = (filters: any) => {
  localStorage.setItem("filters", JSON.stringify(filters));
};
export const getStoreFilters = () => {
  if (localStorage.getItem("filters")) {
      return JSON.parse(localStorage.getItem("filters") || '');
  }else{
      return {}
  }
};
