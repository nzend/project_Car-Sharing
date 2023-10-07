export const selectStylesBrand = {
  control: provided => ({
    ...provided,
    marginTop: '8px',
    border: 'none',
    borderRadius: '14px',
    backgroundColor: '#F7F7FB',
    width: '224px',
    padding: '4px 14px 4px 18px',
    fontSize: '16px',
    height: '48px',
  }),
  option: (provided, state) => ({
    ...provided,
    height: '48px',
    backgroundColor: state.isFocused ? 'white' : 'white',
    color: state.isFocused ? '#121417' : ' rgba(18, 20, 23, 0.20);',
    fontFamily: 'Manrope',
    fontSize: '16px',
    cursor: 'pointer',
    '&:active': {
      background: 'none',
    },
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

  indicatorSeparator: () => ({ display: 'none' }), // Приховати роздільник
};
export const selectStylesPrice = {
  control: provided => ({
    ...provided,
    marginTop: '8px',
    border: 'none',
    borderRadius: '14px',
    backgroundColor: '#F7F7FB',
    width: '185px',
    padding: '4px 14px 4px 18px',
    fontSize: '16px',
    height: '48px',
  }),
  option: (provided, state) => ({
    ...provided,
    height: '48px',
    backgroundColor: state.isFocused ? 'white' : 'white',
    color: state.isFocused ? '#121417' : ' rgba(18, 20, 23, 0.20);',
    fontFamily: 'Manrope',
    fontSize: '16px',
    cursor: 'pointer',
    '&:active': {
      background: 'none',
    },
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

  indicatorSeparator: () => ({ display: 'none' }), // Приховати роздільник
};
export const selectStylesMin = {
  control: provided => ({
    ...provided,
    marginTop: '8px',
    border: 'none',
    borderRadius: '14px 0px 0px 14px',
    borderRight: '1px solid rgba(138, 138, 137, 0.2)',
    background: '#f7f7fb',
    width: '160px',
    height: '48px',
    paddingLeft: '24px',
    outline: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    height: '48px',
    backgroundColor: state.isFocused ? 'white' : 'white',
    color: state.isFocused ? '#121417' : ' rgba(18, 20, 23, 0.20);',
    fontFamily: 'Manrope',
    fontSize: '16px',
    cursor: 'pointer',
    '&:active': {
      background: 'none',
    },
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

  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: () => ({ display: 'none' }),
};
export const selectStylesMax = {
  control: provided => ({
    ...provided,
    marginTop: '8px',
    border: 'none',
    borderRadius: '0px 14px 14px 0px',
    background: '#f7f7fb',
    width: '160px',
    height: '48px',
    paddingLeft: '24px',
    outline: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    height: '48px',
    backgroundColor: state.isFocused ? 'white' : 'white',
    color: state.isFocused ? '#121417' : ' rgba(18, 20, 23, 0.20);',
    fontFamily: 'Manrope',
    fontSize: '16px',
    cursor: 'pointer',
    '&:active': {
      background: 'none',
    },
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

  indicatorSeparator: () => ({ display: 'none' }), // Приховати роздільник
  dropdownIndicator: () => ({ display: 'none' }), // Приховати стрілочку
};
