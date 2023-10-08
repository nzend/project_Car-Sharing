import React, { useState, useEffect } from 'react';
import Select from 'react-select';

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
import { selectAdverts } from '../../redux/adverts/selectors';
import { setStatusFilter } from '../../redux/filters/slice';
import {
  generateCategoriesList,
  generatePriceOptions,
  generateMileageOptions,
} from '../../utils/createFiltersOptions';

const FilterBar = () => {
   const dispatch = useDispatch();
  let adverts = useSelector(selectAdverts);
  let mileageOptionsMin = generateMileageOptions(adverts).map(option => {
    return { value: option, label: option };
  });
  let mileageOptionsMax = generateMileageOptions(adverts).map(option => {
    return { value: option, label: option };
  });

  const priceOptions = generatePriceOptions(adverts).map(option => {
    return { value: option, label: option };
  });

  const brandOptions = generateCategoriesList(adverts).map(option => {
    return { value: option, label: option };
  });

 

  const [minMilage, setMinMilage] = useState(mileageOptionsMin);

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMileageMin, setSelectedMileageMin] = useState(null);
  const [selectedMileageMax, setSelectedMileageMax] = useState(null);

  useEffect(() => {
    const correctOptionsMax = (min, max) => {
     
      if (selectedMileageMin === null) {
        console.log('ISNULL');
        return;
      }
      console.log(min.value);
      const newArray = mileageOptionsMax.filter(option => {
        return option >= min.value;
      });
      mileageOptionsMax = newArray;
    };

    correctOptionsMax(selectedMileageMin);
  }, [mileageOptionsMax, mileageOptionsMin, selectedMileageMin]);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  const handleBrandChange = selectedOption => {
    console.log(selectedOption);
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
    console.log('filters Sending');
    const filter = {
      brand: selectedBrand ? selectedBrand.value : null,
      price: selectedPrice ? selectedPrice.value : null,
      minMileage: selectedMileageMin ? selectedMileageMin.value : null,
      maxMileage: selectedMileageMax ? selectedMileageMax.value : null,
    };
    dispatch(
      setStatusFilter({
        filter,
      })
    );
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
            options={priceOptions}
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
            options={minMilage}
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
            options={mileageOptionsMax}
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
