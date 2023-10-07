import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import {
  FilterForm,
  FilterLabel,
  SubmitBtn,
  InputMilageWrapper,
  InputMilageMin,
  InputMilageMax,
} from './FilterBar.styled';

const brandOptions = [
  { value: 'Toyota', label: 'Toyota' },
  { value: 'Honda', label: 'Honda' },
  { value: 'Ford', label: 'Ford' },
];

const selectStyles = {
  control: provided => ({
    ...provided,
    border: 'none',
    borderRadius: '14px',
    backgroundColor: '#F7F7FB',
    width: '224px',
    padding: '4px 14px 4px 18px',
    fontSize: '16px',
    height: "48px",
  }),
  option: (provided, state) => ({
    ...provided,
    height: '48px',
    backgroundColor: state.isFocused ? 'white' : 'white',
    color: state.isFocused ? '#121417' : ' rgba(18, 20, 23, 0.20);',
    fontFamily: 'Manrope',
    fontSize: '16px',
    cursor: 'pointer',
  }),
  placeholder: provided => ({
    ...provided,
    fontWeight: '500',
    color: '#121417',
    fontFamily: 'Manrope',
    fontSize: '18px',
    lineHeight: '20px',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '14px',
    padding: '14px 8px 14px 18px',
  }),
};

const FilterBar = () => {
  const [cars, setCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMileageMin, setSelectedMileageMin] = useState(null);
  const [selectedMileageMax, setSelectedMileageMax] = useState(null);

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

  const handleMileageChangeMin = selectedOption => {
    setSelectedMileageMin(selectedOption);
  };
  const handleMileageChangeMax = selectedOption => {
    setSelectedMileageMax(selectedOption);
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
            mileageMin: selectedMileageMin
              ? selectedMileageMin.value
              : undefined,
            mileageMax: selectedMileageMax
              ? selectedMileageMax.value
              : undefined,
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
      <div>
        <FilterLabel>Car brand</FilterLabel>
        <InputMilageWrapper>
          <Select
            value={selectedBrand}
            onChange={handleBrandChange}
            options={brandOptions}
            isClearable
            placeholder="Enter the text"
            styles={selectStyles}
          />
        </InputMilageWrapper>
      </div>
      <div>
        <FilterLabel>Price/ 1 hour</FilterLabel>
        <InputMilageWrapper>
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
            styles={selectStyles}
            
          />
        </InputMilageWrapper>
      </div>
      <div>
        <FilterLabel>Сar mileage / km</FilterLabel>
        <InputMilageWrapper>
          <InputMilageMin
            onChange={handleMileageChangeMin}
            placeholder="From"
            styles={selectStyles}
          />
          <InputMilageMax
            onChange={handleMileageChangeMax}
            placeholder="to"
            styles={selectStyles}
          />
        </InputMilageWrapper>
      </div>

      <SubmitBtn type="submit">Search</SubmitBtn>
    </FilterForm>
  );
};

export default FilterBar;
