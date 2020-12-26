import React, { useState } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet
import format from 'date-fns/format';
import '../styles/CalenderView.css';
import images from '../../constants/images';

function CalenderView() {
  const [showCalender, setShowCalender] = useState(false);
  // Render the Calendar
  var today = new Date();
  var lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );
  const [date, setDate] = React.useState('');
  const handleDateChange = (date) => {
    setDate(format(date, 'yyyy-MM-dd'));
    console.log(format(date, 'yyyy-MM-dd'));
  };

  return (
    <div className='row mt-5'>
      <div class='form-group' onClick={() => setShowCalender(!showCalender)}>
        <div
          class=' input-group date'
          id='timepicker'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottom: showCalender ? '0px' : '1px solid #E8ECF2',
            paddingBottom: 7,
            cursor: 'pointer',
          }}
        >
          {/* <span class='input-group-addon'>
            <span class='glyphicon glyphicon-calendar'></span>{' '}
          </span> */}
          <img src={images.calender} style={{ height: 14, width: 14 }} />
          <input
            type='text'
            value={date}
            style={{ fontSize: 14, cursor: 'pointer' }}
            className='datepicker form-control'
            placeholder='Pick date'
            onChange={handleDateChange}
          />
        </div>
      </div>
      {/* <div>
      <div onClick>
        <img src={images.calender} style={{ height: 14, width: 14 }} />
      </div> */}
      {showCalender ? (
        <InfiniteCalendar
          selected={null}
          width={Math.min(window.innerWidth, 362)}
          height={400}
          rowHeight={50}
          displayOptions={{
            showOverlay: false,
            shouldHeaderAnimate: false,
            showHeader: false,
            showTodayHelper: false,
          }}
          onSelect={handleDateChange}
          theme={{
            weekdayColor: '#142A51',
            headerColor: '#142A51',
            floatingNav: {
              background: '#142A51',
              color: '#FFF',
              chevron: '#142A51',
            },
          }}
        />
      ) : null}
    </div>
  );
}

export default CalenderView;
