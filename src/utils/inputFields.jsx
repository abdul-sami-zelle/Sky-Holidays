import React, { useState } from 'react';
import './utils.css'

const InputField = ({ label, type = 'text', placeholder = '', value: propValue, onChange }) => {
  const [value, setValue] = useState(propValue || '');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="input-field">
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
