import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import _ from 'lodash';
import clsx from 'clsx';
import optionsData from './dummy.js';
import images from '../../constants/images/index.js';

const RenderGroup = (props) => {
  console.log(props, 'dcbkjbasklcnlsc');
  const { groupObject = {}, val, setVal, classes } = props;
  const { group } = groupObject;
  let options = optionsData.filter((item, i) => {
    return item.position === group;
  });
  const allOptionsSelected = _.difference(options, val).length === 0;
  console.log(val, 'val', options, 'options', allOptionsSelected, 'dvfvfdvdfv');
  return (
    <div
      style={{
        borderBottom: '1px solid #25406D',
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
        {group && group !== 'All employee' && (
          <span style={{ fontSize: 13, color: '#A0B5D9' }}>{group}</span>
        )}
        {group && group !== 'All employee' && (
          <Checkbox
            checkedIcon={
              <span className={clsx(classes.icon, classes.checkedIcon)} />
            }
            icon={<span className={classes.icon} />}
            checked={allOptionsSelected ? true : false}
            onChange={() => {
              let array = val.filter(function (el) {
                return !options.includes(el);
              });
              if (allOptionsSelected) {
                setVal([...array]);
              } else {
                setVal([...array, ...options]);
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
              // paddingLeft: 20,
              // paddingRight: 16,
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
      })}
    </div>
  );
};

export default RenderGroup;
