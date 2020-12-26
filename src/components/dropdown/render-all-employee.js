import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import _ from 'lodash';
import clsx from 'clsx';
import optionsData from './dummy.js';
import images from '../../constants/images/index.js';

const renderAllEmployee = () => {
  return (
    <div
      key={index}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 16px 8px 20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginRight: 16,
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
              backgroundColor: '#556E9A',
              borderRadius: 50,
              color: 'white',
              fontSize: 13,
              // marginRight: -15,
              zIndex: 10,
              border: '3px solid #142A51',
            }}
          >
            {optionsData.length - 1}
          </div>
          {_.times(optionsData.length > 2 ? 2 : optionsData.length, (i) => {
            return (
              <img
                src={optionsData[i + 1]?.images}
                style={{
                  marginLeft: -20,
                  height: 24,
                  width: 24,
                  border: '3px solid #142A51',
                  borderRadius: '50%',
                  zIndex: 2 - i,
                  // objectFit: 'contain',
                }}
              />
            );
          })}
        </div>

        <span style={{ fontSize: 13, color: '#DAE2EF' }}>{option.title}</span>
      </div>
      <Checkbox
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        disableRipple
        checked={optionIndex === -1 ? false : true}
        onChange={(e) => {
          if (group === 'All employee') {
            if (val.length === optionsData.length) {
              setVal([]);
            } else {
              setVal([...optionsData]);
            }
            console.log('sdcksbcsnclksdcs nckldsc');
            return;
          }
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
};

export default renderAllEmployee;
