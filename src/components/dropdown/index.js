import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import images from '../../constants/images/index';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.3em',
      height: '6.3em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#556E9A',
      // outline: '1px solid slategrey',
    },
  },
  root: {
    backgroundColor: '#142A51',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  paper: {
    marginTop: 0,
    backgroundColor: '#142A51',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  inputRoot: {
    backgroundColor: '#1C3663',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    fontSize: 13,
    color: '#6F8BBC',
    // '& .MuiOutlinedInput-notchedOutline': {
    //   borderColor: 'green',
    // },
    // '&:hover .MuiOutlinedInput-notchedOutline': {
    //   borderColor: 'red',
    // },
    // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //   borderColor: 'purple',
    // },
  },
}));

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const Dropdown = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [val, setVal] = useState([]);

  // renderDropdownBase = () => {
  //   if(_.difference(val, optionsData).length === 0){
  //     return (<div>All</div>)
  //   }
  //   if()
  // }
  const renderAll = () => {
    const allOptionsSelected = _.difference(val, optionsData).length === 0;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 20,
          paddingRight: 16,
        }}
      >
        <span style={{ fontSize: 13, color: '#A0B5D9' }}>All</span>

        <Checkbox
          icon={icon}
          checkedIcon={checkedIcon}
          checked={allOptionsSelected ? true : false}
          onChange={() => {
            if (allOptionsSelected) {
              setVal([]);
            } else {
              setVal([...optionsData]);
            }
          }}
        />
      </div>
    );
  };
  const renderGroup = ({ group, children, id }) => {
    let options = optionsData.filter((item, i) => {
      return item.position === group;
    });
    const allOptionsSelected = _.difference(options, val).length === 0;
    console.log(
      val,
      'val',
      options,
      'options',
      allOptionsSelected,
      'dvfvfdvdfv'
    );
    return (
      <div
        style={{
          borderBottom: '1px solid #25406D',
          // backgroundColor: '#142A51',
        }}
      >
        {/* {options.type === 'All' ? renderAll() : null} */}
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
          {group && (
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              checked={allOptionsSelected ? true : false}
              onChange={() => {
                if (allOptionsSelected) {
                  let array = val.filter(function (el) {
                    return !options.includes(el);
                  });
                  setVal([...array]);
                } else {
                  setVal([...val, ...options]);
                }
              }}
            />
          )}
        </div>
        {options.map((option, index) => {
          let optionIndex = val.indexOf(option);
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 16,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <img
                  src={images.one}
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 50,
                    marginRight: 16,
                    zIndex: 1000,
                  }}
                />
                <span style={{ fontSize: 13, color: '#DAE2EF' }}>
                  {option.title}
                </span>
              </div>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                checked={optionIndex === -1 ? false : true}
                onChange={(e) => {
                  if (optionIndex === -1) {
                    setVal([...val, option]);
                  } else {
                    var array = [...val]; // make a separate copy of the array
                    array.splice(optionIndex, 1);
                    setVal(array);
                  }

                  console.log(val, 'cdcnjksc');
                }}
              />
            </div>
          );
        })}
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
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderRadius: 16,
        }}
      >
        <span style={{ color: '#7E98BA', marginLeft: 25, fontSize: 13 }}>
          Select Employees
        </span>
        <img
          style={{ marginRight: 25 }}
          src={isOpen ? images.arrowDown : images.arrowUp}
        />
      </div>
      {isOpen && (
        <Autocomplete
          multiple
          classes={classes}
          open={true}
          //inputValue={['The Shawshank Redemption']}
          onChange={(event, value) => console.log(value, 'sddjkbfs')}
          popupIcon={() => <div></div>}
          id='checkboxes-tags-demo'
          options={optionsData}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          groupBy={(option) => option.position}
          renderGroup={(group) => {
            return renderGroup(group);
          }}
          style={{ width: 376, overflow: 'none' }}
          onChange={(e) => console.log(e, 'scfvfvsc')}
          openOnFocus
          renderInput={(params) => (
            <TextField
              {...params}
              variant='outlined'
              // label='Checkboxes'
              placeholder='Search employee...'
              // style={{ backgroundColor: '#1C3663', borderRadius: 10 }}
            />
          )}
        />
      )}
    </>
  );
};

const optionsData = [
  // {
  //   title: 'All',
  //   year: 1994,
  //   type: 'All',
  // },
  {
    title: 'Un grouped',
    year: 1994,
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    images: images.one,
    position: 'All practitioners',
  },
  {
    title: 'The Godfather',
    year: 1972,
    images: images.one,
    position: 'All practitioners',
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    images: images.one,
    position: 'All practitioners',
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    images: images.one,
    position: 'All practitioners',
  },

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

export default Dropdown;
