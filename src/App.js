import { useState } from "react";
import InputField from "./InputField";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  handleInputChage = (value) => {
    setInputValue(value);
  };

  const handleSubmit = () => {};

  return (
    <div className="App">
      <h1>Common Input field</h1>
      <InputField
        scenario="Create"
        inputType="text"
        inputTitle="username"
        placeholder="Enter here"
        required={true}
        disabled={false}
        customChangeFunction={handleInputChage}
        inputStyle={{}}
        labelStyle={{}}
        errorMessage="This is Required"
        maxLength={20}
        minLength={2}
      ></InputField>

      <button style={{ marginTop: "20px" }} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
