export const pagination = (items, page) => {
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const newVisibleCards = items.slice(0, endIndex);
  return newVisibleCards;
};


