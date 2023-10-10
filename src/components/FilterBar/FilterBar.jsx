import React, { useEffect, useState } from 'react';
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
import { selectAdverts } from '../../redux/adverts/selectors';
import { setStatusFilter } from '../../redux/filters/slice';
import { getOptions } from '../../utils/createFiltersOptions';
import { changePage } from '../../redux/adverts/slice';

const FilterBar = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const options = getOptions(adverts);

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMileageMin, setSelectedMileageMin] = useState(null);
  const [selectedMileageMax, setSelectedMileageMax] = useState(null);
  const [optionsMilageMin, setOptionsMilageMin] = useState(null);
  const [optionsMilageMax, setOptionsMilageMax] = useState(null);
  const [optionsBrand, setOptionsBrand] = useState(null);
  const [optionsPrice, setOptionsPrice] = useState(null);

  useEffect(() => {
    const options = getOptions(adverts);
    setOptionsBrand([...options.brandOptions]);
    setOptionsPrice([...options.priceOptions]);
    setOptionsMilageMin([...options.mileageOptionsMin]);
    setOptionsMilageMax([...options.mileageOptionsMax]);
  }, [adverts]);

  const handleBrandChange = selectedOption => {
    setSelectedBrand(selectedOption);
  };

  const handlePriceChange = selectedOption => {
    setSelectedPrice(selectedOption);
  };

  const handleMileageChangeMin = selectedOption => {
    if (!selectedMileageMin) {
      const filteredMileageOptionsMax = options.mileageOptionsMax.filter(
        option => option.value > selectedOption.value
      );
      setOptionsMilageMax([...filteredMileageOptionsMax]);
    }

    setSelectedMileageMin(selectedOption);
  };
  const handleMileageChangeMax = selectedOption => {
    if (!selectedMileageMax) {
      const filteredMileageOptionsMax = options.mileageOptionsMin.filter(
        option => option.value < selectedOption.value
      );
      setOptionsMilageMin([...filteredMileageOptionsMax]);
    }

    setSelectedMileageMax(selectedOption);
  };

  const handleLoadCarsSubmit = async e => {
    e.preventDefault();
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
    dispatch(changePage(1));
  };

  return (
    <FilterForm onSubmit={handleLoadCarsSubmit}>
      <div>
        <FilterLabel>
          Car brand
          <InputMilageWrapper>
            <Select
              value={selectedBrand}
              onChange={handleBrandChange}
              options={optionsBrand}
              isClearable
              placeholder="Enter the text"
              styles={selectStylesBrand}
            />
          </InputMilageWrapper>
        </FilterLabel>
      </div>
      <div>
        <FilterLabel>
          Price/ 1 hour
          <InputMilageWrapper>
            <Select
              value={
                selectedPrice
                  ? {
                      value: selectedPrice,
                      label: `To ${selectedPrice.label} $`,
                    }
                  : null
              }
              onChange={handlePriceChange}
              options={optionsPrice}
              isSearchable={false}
              isClearable
              placeholder="To $"
              styles={selectStylesPrice}
            />
          </InputMilageWrapper>
        </FilterLabel>
      </div>
      <div>
        <FilterLabel>Сar mileage / km </FilterLabel>
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
            options={optionsMilageMin}
            isClearable
            isSearchable={false}
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
            options={optionsMilageMax}
            isSearchable={false}
            isClearable
            placeholder="to:"
            styles={selectStylesMax}
          />
        </InputMilageWrapper>
      </div>

      <SubmitBtn type="submit">Search</SubmitBtn>
    </FilterForm>
  );
};

export default FilterBar;
