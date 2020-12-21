/* eslint-disable no-use-before-define */

import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [val, setVal] = useState({});

  const renderGroup = ({ group, children, id }) => {
    let options = optionsData.filter((item, i) => {
      return item.position === group;
    });
    console.log(options, 'options');
    return (
      <div
        style={{
          borderBottom: '1px solid #25406D',
          backgroundColor: '#142A51',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 16,
          }}
        >
          <span style={{ fontSize: 13, color: '#A0B5D9' }}>{group}</span>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            // style={{ marginRight: 8 }}
            //checked={option.selected}
          />
        </div>
        {options.map((option, index) => (
          <div
            onClick={() => setVal(option)}
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 20,
              paddingRight: 16,
            }}
          >
            <span style={{ fontSize: 13, color: '#DAE2EF' }}>
              {option.title}
            </span>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              // style={{ marginRight: 8 }}
              checked={option.selected}
            />
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: 376,
          height: 53,
          backgroundColor: '#F0F5FB',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: 16,
        }}
      >
        <span style={{ color: '#7E98BA', marginLeft: 8 }}>
          Select Employees
        </span>
      </div>
      {isOpen && (
        <Autocomplete
          multiple
          inputValue={['The Shawshank Redemption']}
          id='checkboxes-tags-demo'
          options={optionsData}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          groupBy={(option) => option.position}
          renderGroup={(group) => {
            return renderGroup(group);
          }}
          style={{ width: 376, backgroundColor: '#142A51' }}
          onChange={(e) => console.log(e, 'scfvfvsc')}
          openOnFocus
          renderInput={(params) => (
            <TextField
              {...params}
              variant='outlined'
              // label='Checkboxes'
              placeholder='Search employee...'
              style={{ backgroundColor: '#142A51', borderRadius: 10 }}
            />
          )}
        />
      )}
    </>
  );
};

const optionsData = [
  {
    title: 'Un grouped',
    year: 1994,
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    position: 'All practitioners',
  },
  { title: 'The Godfather', year: 1972, position: 'All practitioners' },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    position: 'All practitioners',
  },
  { title: 'The Dark Knight', year: 2008, position: 'All practitioners' },

  { title: '12 Angry Men', year: 1957, position: 'All assistants' },
  { title: "Schindler's List", year: 1993, position: 'All assistants' },
  { title: 'Pulp Fiction', year: 1994, position: 'All assistants' },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    position: 'All assistants',
  },
  {
    title: 'The Good, the Bad and the Ugly',
    year: 1966,
    position: 'All assistants',
  },
];

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];

export default Dropdown;
