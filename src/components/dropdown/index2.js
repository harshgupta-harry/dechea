import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

const Dropdown = () => {
  const [options, setOptions] = useState(optionsData);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedItem, 'scfvdmdckldfnvkdc');
    setSelectedOptions([...selectedOptions, selectedItem]);
  };

  const onRemove = (selectedList, removedItem) => {
    console.log(removedItem, 'scfvdmdckldfnvkdc');
    var index = selectedOptions.indexOf(removedItem);
    // setSelectedOptions([...selectedOptions, selectedItem])
  };

  return (
    <div>
      <Multiselect
        options={options} // Options to display in the dropdown
        selectedValues={selectedOptions} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue='name' // Property name to display in the dropdown options
        showCheckbox={true}
        groupBy='position'
      />
    </div>
  );
};

export default Dropdown;

const optionsData = [
  {
    name: 'Un grouped',
    year: 1994,
    position: '',
  },
  {
    name: 'The Shawshank Redemption',
    year: 1994,
    position: 'All practitioners',
  },
  { name: 'The Godfather', year: 1972, position: 'All practitioners' },
  {
    name: 'The Godfather: Part II',
    year: 1974,
    position: 'All practitioners',
  },
  { name: 'The Dark Knight', year: 2008, position: 'All practitioners' },

  { name: '12 Angry Men', year: 1957, position: 'All assistants' },
  { name: "Schindler's List", year: 1993, position: 'All assistants' },
  { name: 'Pulp Fiction', year: 1994, position: 'All assistants' },
  {
    name: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    position: 'All assistants',
  },
  {
    name: 'The Good, the Bad and the Ugly',
    year: 1966,
    position: 'All assistants',
  },
];
