import React from 'react';
import CalenderView from './components/calendar/calenderView';
import Dropdown from './components/dropdown/index';

const App = () => {
  return (
    <div
      className='App'
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 100,
        paddingRight: 100,
      }}
    >
      <div>
        <Dropdown />
      </div>
      <CalenderView />
    </div>
  );
};

export default App;
