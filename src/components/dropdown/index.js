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
import RenderGroup from './render-group.js';
import { renderHeading } from './utils.js';
import 'font-awesome/css/font-awesome.min.css';
import './styles.css';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const Dropdown = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [val, setVal] = useState([]);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: 376,
          height: 53,

          backgroundColor: isOpen ? '#FFFFFF' : '#F0F5FB',
          border: isOpen ? '1px solid #EBF0F6' : '1px solid #F0F5FB',
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
                border: '3px solid white',
              }}
            >
              {val.length > 0 ? val.length : optionsData.length}
            </div>
            {_.times(val.length > 2 ? 2 : val.length, (i) => {
              return (
                <img
                  src={val[i]?.images}
                  style={{
                    marginLeft: -20,
                    height: 24,
                    width: 24,
                    border: '3px solid white',
                    borderRadius: '50%',
                    zIndex: 1 - i,
                    // objectFit: 'contain',
                  }}
                />
              );
            })}
          </div>

          <span
            style={{
              color: isOpen ? '#314363' : '#7E98BA',
              marginLeft: 8,
              fontSize: 13,
            }}
          >
            {renderHeading(val, optionsData)}
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
          noOptionsText='Not found'
          getOptionLabel={(option) => option.title}
          groupBy={(option) => option.position}
          renderGroup={(group, i) => {
            return (
              <RenderGroup
                groupObject={group}
                val={val}
                setVal={setVal}
                classes={classes}
                index={i}
              />
            );
          }}
          style={{ width: 376, overflow: 'none' }}
          onChange={(e) => console.log(e, 'scfvfvsc')}
          openOnFocus
          renderInput={(params) => (
            <div>
              <TextField
                {...params}
                variant='outlined'
                // className='wrapper'
                // label='Checkboxes'
                placeholder='Search employee...'
                // style={{ backgroundColor: '#1C3663', borderRadius: 10 }}
              />
            </div>
          )}
        />
      )}
      {/* <div className='wrapper'>
        <input type='text' placeholder='&#xF007; Username' />
      </div> */}
    </>
  );
};
export default Dropdown;
