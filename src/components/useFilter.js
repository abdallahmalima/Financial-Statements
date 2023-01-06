const useFilter = (filter, key = null) => (data) => {
  if (key === null) {
    return data
      .filter((item) => item.toLowerCase().includes(filter.toLowerCase()));
  }
  return data
    .filter((item) => item[key].toLowerCase().includes(filter.toLowerCase()));
};

export default useFilter;