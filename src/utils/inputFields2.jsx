import React, { useState } from 'react';
import './utils.css'

const InputField2 = ({ label, type = 'text', placeholder = '', value: propValue, onChange }) => {
  const [value, setValue] = useState(propValue || '');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="input-field2">
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        style={{
            width:"50%",
            
        }}
      />
    </div>
  );
};

export default InputField2;
