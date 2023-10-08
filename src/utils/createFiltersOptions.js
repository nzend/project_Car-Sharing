export const generateCategoriesList = items => {
  const categories = [...new Set(items.map(item => item.make))];
  return categories;
};

export const generatePriceOptions = items => {
  const prices = items.map(item => {
    const rentalPrice = item.rentalPrice;
    const price = parseFloat(rentalPrice.replace('$', ''));
    return price;
  });
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const options = [];
  options.push(minPrice);
  for (let price = minPrice + 10; price < maxPrice; price += 10) {
    options.push(price);
  }
  options.push(maxPrice);
  return options;
};

export const generateMileageOptions = items => {
  const mileages = items.map(item => item.mileage);
  const minMileage = Math.min(...mileages);
  const maxMileage = Math.max(...mileages);
  const minRounded = minMileage;
  const maxRounded = maxMileage;
  const options = [minRounded];

  for (let mileage = minMileage + 1000; mileage < maxMileage; mileage += 1000) {
    options.push(Math.round(mileage / 1000) * 1000);
  }

  options.push(maxRounded);

  return options;
};
