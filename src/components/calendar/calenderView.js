import React from "react";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // Make sure to import the default stylesheet
import format from "date-fns/format";
import "./CalenderView.css";

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
    setDate(date);
  };

  return (
    <div>
      <div>
        <input type="text" value="{date}" onChange={handleDateChange} />
        <button className="example-custom-input" onClick={handleDateChange}>
          {date} Click me
        </button>
      </div>
      <InfiniteCalendar
        selected={null}
        width={Math.min(window.innerWidth, 300)}
        height={400}
        rowHeight={50}
        disabledDays={[0, 6]}
        minDate={lastWeek}
        displayOptions={{
          showOverlay: false,
          shouldHeaderAnimate: false,
          showHeader: false,
        }}
        onSelect={function (date) {
          alert("You selected: " + format(date, "yyyy-MM-dd"));
        }}
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
