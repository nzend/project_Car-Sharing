import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { FilterForm, FilterLabel } from './FilterBar.styled';

const brandOptions = [
  { value: 'Toyota', label: 'Toyota' },
  { value: 'Honda', label: 'Honda' },
  { value: 'Ford', label: 'Ford' },
];

const FilterBar = () => {
  const [cars, setCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMileage, setSelectedMileage] = useState(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await axios.get(
          'https://651fd793906e276284c399ff.mockapi.io/api/adverts'
        );
        console.log(response.data);
        setCars(response.data);
      } catch (error) {
        console.error('Помилка завантаження автомобілів:', error);
      }
    }

    fetchCars();
  }, []);

  const handleBrandChange = selectedOption => {
    setSelectedBrand(selectedOption);
  };

  const handlePriceChange = selectedOption => {
    setSelectedPrice(selectedOption);
  };

  const handleMileageChange = selectedOption => {
    setSelectedMileage(selectedOption);
  };

  const handleLoadCarsSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.get(
        'https://651fd793906e276284c399ff.mockapi.io/api/adverts',
        {
          params: {
            brand: selectedBrand ? selectedBrand.value : undefined,
            price: selectedPrice ? selectedPrice.value : undefined,
            mileage: selectedMileage ? selectedMileage.value : undefined,
          },
        }
      );
      console.log(response);
      setCars(response.data);
    } catch (error) {
      console.error('Помилка завантаження автомобілів:', error);
    }
  };

  return (
    <FilterForm onSubmit={handleLoadCarsSubmit}>
      <FilterLabel>
        Car brand
        <Select
          value={selectedBrand}
          onChange={handleBrandChange}
          options={brandOptions}
          isClearable
          placeholder="Enter the text"
        />
      </FilterLabel>

      <FilterLabel>
        Price/ 1 hour
        <Select
          value={selectedPrice}
          onChange={handlePriceChange}
          options={[
            { value: '20', label: '20' },
            { value: '22', label: '22' },
            { value: '25', label: '25' },
            // Додайте більше варіантів цін
          ]}
          isClearable
          placeholder="To $"
        />
      </FilterLabel>

      <FilterLabel>
        Сar mileage / km
        <Select
          value={selectedMileage}
          onChange={handleMileageChange}
          options={[
            { value: '50000', label: '50000' },
            { value: '55000', label: '55000' },
            { value: '60000', label: '60000' },
            // Додайте більше варіантів пробігу
          ]}
          isClearable
          placeholder="From"
        />
      </FilterLabel>
      <FilterLabel>
        Сar mileage / km
        <Select
          value={selectedMileage}
          onChange={handleMileageChange}
          options={[
            { value: '50000', label: '50000' },
            { value: '55000', label: '55000' },
            { value: '60000', label: '60000' },
            // Додайте більше варіантів пробігу
          ]}
          isClearable
          placeholder="to"
        />
      </FilterLabel>

      <button type="submit">Завантажити авто</button>
    </FilterForm>
  );
};

export default FilterBar;
