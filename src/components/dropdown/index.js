import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import images from '../../constants/images/index';
import _ from 'lodash';
import useStyles from './styles';
import clsx from 'clsx';
import optionsData from './dummy.js';

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
          checkedIcon={
            <span className={clsx(classes.icon, classes.checkedIcon)} />
          }
          icon={<span className={classes.icon} />}
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
              checkedIcon={
                <span className={clsx(classes.icon, classes.checkedIcon)} />
              }
              icon={<span className={classes.icon} />}
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
                  src={option.images}
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
                // icon={icon}
                // checkedIcon={checkedIcon}
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                disableRipple
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginLeft: 25,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              // position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 24,
                width: 24,
                backgroundColor: '#142A51',
                borderRadius: 50,
                color: 'white',
                fontSize: 13,
                // marginRight: -15,
                zIndex: 2,
              }}
            >
              {val.length > 0 ? val.length : optionsData.length}
            </div>
            {/* {_.times(3, (i) => (
                <img
                  key={i}
                  src={images.one}
                  style={{
                    height: 24,
                    width: 24,
                    marginLeft: -15,
                    borderRadius: 50,
                    border: '3px solid white',
                    // position: 'absolute',
                  }}
                />
              ))} */}
          </div>

          <span style={{ color: '#7E98BA', marginLeft: 8, fontSize: 13 }}>
            {val.length > 0
              ? _.times(val.length > 2 ? 2 : val.length, (i) => {
                  return i > 0 ? `, ${val[i]?.title}` : val[i]?.title;
                })
              : 'Select Employees'}
          </span>
        </div>

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
export default Dropdown;
