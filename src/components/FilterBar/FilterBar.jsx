import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

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
          const response = await axios.get('URL_СЕРВЕРА/api/cars');
          setCars(response.data);
        } catch (error) {
          console.error('Помилка завантаження автомобілів:', error);
        }
      }
  
      fetchCars();
    }, []);
  
    const handleBrandChange = (selectedOption) => {
      setSelectedBrand(selectedOption);
    };
  
    const handlePriceChange = (selectedOption) => {
      setSelectedPrice(selectedOption);
    };
  
    const handleMileageChange = (selectedOption) => {
      setSelectedMileage(selectedOption);
    };
  
    const handleLoadCarsClick = async () => {
      try {
        const response = await axios.get('URL_СЕРВЕРА/api/cars', {
          params: {
            brand: selectedBrand ? selectedBrand.value : undefined,
            price: selectedPrice ? selectedPrice.value : undefined,
            mileage: selectedMileage ? selectedMileage.value : undefined,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.error('Помилка завантаження автомобілів:', error);
      }
    };
    
  return (
    <div>
    <h1>Каталог автівок</h1>
    <div>
      <label>Марка:</label>
      <Select
        value={selectedBrand}
        onChange={handleBrandChange}
        options={brandOptions}
        isClearable
        placeholder="Оберіть марку"
      />
    </div>
    <div>
      <label>Ціна за годину:</label>
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
        placeholder="Оберіть ціну"
      />
    </div>
    <div>
      <label>Пробіг (км):</label>
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
        placeholder="Оберіть пробіг"
      />
    </div>
    <button onClick={handleLoadCarsClick}>Завантажити авто</button>
    <ul>
      {cars.map((car) => (
        <li key={car.id}>
          <strong>{car.brand}</strong> - Ціна за годину: {car.pricePerHour} грн, Пробіг: {car.mileage} км
        </li>
      ))}
    </ul>
  </div>
  );
};

export default FilterBar;