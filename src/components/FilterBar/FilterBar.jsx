import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import {
  FilterForm,
  FilterLabel,
  SubmitBtn,
  InputMilageWrapper,
} from './FilterBar.styled';
import {
  selectStylesBrand,
  selectStylesMin,
  selectStylesMax,
  selectStylesPrice,
} from '../../utils/SelectsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts } from '../../redux/adverts/operations';


const brandOptions = [
  { value: 'Buick', label: 'Buick' },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'HUMMER', label: 'HUMMER' },
];

const FilterBar = () => {
  const dispatch = useDispatch();
  const [cars, setCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMileageMin, setSelectedMileageMin] = useState(null);
  const [selectedMileageMax, setSelectedMileageMax] = useState(null);

  useEffect(() => {
    dispatch(getAdverts())
  }, [dispatch]);

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
            styles={selectStylesBrand}
          />
        </InputMilageWrapper>
      </div>
      <div>
        <FilterLabel>Price/ 1 hour</FilterLabel>
        <InputMilageWrapper>
          <Select
            value={
              selectedPrice
                ? { value: selectedPrice, label: `To ${selectedPrice.label} $` }
                : null
            }
            onChange={handlePriceChange}
            options={[
              { value: '40', label: '40' },
              { value: '50', label: '50' },
              { value: '55', label: '55' },
              // Додайте більше варіантів цін
            ]}
            isClearable
            placeholder="To $"
            styles={selectStylesPrice}
          />
        </InputMilageWrapper>
      </div>
      <div>
        <FilterLabel>Сar mileage / km</FilterLabel>
        <InputMilageWrapper>
          <Select
            value={
              selectedMileageMin
                ? {
                    value: selectedMileageMin,
                    label: `From: ${selectedMileageMin.label}`,
                  }
                : null
            }
            onChange={handleMileageChangeMin}
            options={[
              { value: '20', label: '20' },
              { value: '22', label: '22' },
              { value: '25', label: '25' },
              // Додайте більше варіантів цін
            ]}
            isClearable
            placeholder="From:"
            styles={selectStylesMin}
          />
          <Select
            value={
              selectedMileageMax
                ? {
                    value: selectedMileageMax,
                    label: `to: ${selectedMileageMax.label}`,
                  }
                : null
            }
            onChange={handleMileageChangeMax}
            options={[
              { value: '20', label: '20' },
              { value: '22', label: '22' },
              { value: '25', label: '25' },
              // Додайте більше варіантів цін
            ]}
            isClearable
            placeholder="to:"
            styles={selectStylesMax}
          />
          {/* <InputMilageMin
            value={selectedMileageMin}
            onChange={handleMileageChangeMin}
            placeholder="From"
          />
          <InputMilageMax
            value={selectedMileageMax}
            onChange={handleMileageChangeMax}
            placeholder="to"
          /> */}
        </InputMilageWrapper>
      </div>

      <SubmitBtn type="submit">Search</SubmitBtn>
    </FilterForm>
  );
};

export default FilterBar;
