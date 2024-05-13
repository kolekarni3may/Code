const InputField = ({
  scenario,
  inputType,
  inputTitle,
  placeholder,
  required,
  disabled,
  customChangeFunction,
  inputStyle,
  labelStyle,
  errorMessage,
  error,
  maxLength,
  minLength,
  options,
  currencyValue,
}) => {
  const handleChange = (e) => {
    if (customChangeFunction) {
      customChangeFunction(e.target.value);
    }
  };

  const renderInput = () => {
    switch (inputType) {
      case "text":
      case "number":
        return (
          <input
            type={inputType}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            onChange={handleChange}
            style={inputStyle}
          />
        );

      case "select":
        return (
          <select
            disabled={disabled}
            onChange={handleChange}
            style={inputStyle}
          >
            {options.map((option, index) => (
              <option key={index} value={option.vakue}>
                {option?.label}
              </option>
            ))}
          </select>
        );

      case "currency":
        <input
          type="text"
          value={currencyValue}
          disabled={disabled}
          style={inputStyle}
        />;

      default:
        return null;
    }
  };

  return (
    <div>
      <label style={{ marginLeft: "10px" }} style={labelStyle}>
        {inputTitle}
      </label>

      {renderInput()}
      {error && <span>{errorMessage} </span>}
    </div>
  );
};

export default InputField;
