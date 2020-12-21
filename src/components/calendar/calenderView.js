import React from "react";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // Make sure to import the default stylesheet
import format from "date-fns/format";
import "../styles/CalenderView.css";

function CalenderView() {
  // Render the Calendar
  var today = new Date();
  var lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );
  const [date, setDate] = React.useState("");
  const handleDateChange = (date) => {
    setDate(format(date, "yyyy-MM-dd"));
    console.log(format(date, "yyyy-MM-dd"));
  };

  return (
    <div className="row mt-5">
      <div>
        <input
          type="text"
          value={date}
          className="datepicker"
          placeholder="Pick date"
          onChange={handleDateChange}
        />
      </div>
      <InfiniteCalendar
        selected={null}
        width={Math.min(window.innerWidth, 262)}
        height={window.innerHeight - 250}
        rowHeight={50}
        disabledDays={[0, 6]}
        minDate={lastWeek}
        displayOptions={{
          showOverlay: false,
          shouldHeaderAnimate: false,
          showHeader: false,
        }}
        onSelect={handleDateChange}
        theme={{
          weekdayColor: "#142A51",
          headerColor: "#142A51",
          floatingNav: {
            background: "#142A51",
            color: "#FFF",
            chevron: "#142A51",
          },
        }}
      />
      ,
    </div>
  );
}

export default CalenderView;
