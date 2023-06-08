
const searchFilter = (query, data) => {

  if (!query) {
    return [];
  } else {
    return data.filter((d) => d.toLowerCase().includes(query)).slice(0, 3);
  }
};

export default searchFilter;