const extractNumberFromString = inputString => {
  const numberString = inputString.replace(/\D/g, ''); 
  const number = parseInt(numberString, 10); 

  return number;
};

export const filtering = (items, { filters }) => {
  return items.filter(item => {
    const brandFilter = !filters.brand || item.make === filters.brand;
    const priceFilter =
      !filters.price ||
      extractNumberFromString(item.rentalPrice) <= filters.price;
    const minMileageFilter =
      !filters.minMileage || item.mileage >= filters.minMileage;
    const maxMileageFilter =
      !filters.maxMileage || item.mileage <= filters.maxMileage;

    return brandFilter && priceFilter && minMileageFilter && maxMileageFilter;
  });
};
