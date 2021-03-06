import React from 'react';
import Dropdown from './dropdown/index';
import CalenderView from './calendar/calenderView';

const View = () => {
  return (
    <div
      className='App'
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 200,
        paddingRight: 200,
      }}
    >
      <div>
        <Dropdown />
      </div>
      <CalenderView />
    </div>
  );
};

export default View;
