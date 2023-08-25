import React, { useState } from 'react';
import './inputStyle.css';
import RandomValueSelector from './result'


function DynamicInputFields() {

const [inputFields, setInputFields] = useState([{ value: '' },{ value: '' }]);
const [rezultat , setRezultat] = useState('');

  const handleAddField = (event) => {
    event.preventDefault();
    const newInputFields = [...inputFields, { value: '' }];
    setInputFields(newInputFields);
  };

  const handleInputChange = (index, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index].value = event.target.value;
    setInputFields(newInputFields);
  };

  const handleRemoveField = (index,) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fieldValues = inputFields.map((field) => field.value);
    console.log("Collected data:", fieldValues);
    // You can perform further processing or store the data as needed
    
   const getRandomItem = (arr) => {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
    
        // get random item
        const item = arr[randomIndex];
    
        return item;
    }
        const result = getRandomItem(fieldValues);
        setRezultat(result)
    clearForm()
  };
    const clearForm = () => {
    setInputFields([])
    }



  return (
    <div className='dashed'> 
        
      <h2>Въведи желаните варианти.</h2>
      <form onSubmit={handleSubmit}>
        <button onClick={handleAddField}>Add Field</button>
        {inputFields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              value={field.value} required
              onChange={(event) => handleInputChange(index, event)}
            />
            <button onClick={() => handleRemoveField(index)}>Remove</button>
          </div>
        ))}
        { inputFields.length > 0 && <button type="submit">Submit</button>}
      </form>
      <RandomValueSelector data={rezultat}/>
    </div>
  );
}

export default DynamicInputFields;
