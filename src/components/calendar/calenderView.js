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
      <div class="form-group">
        <div class="input-group date" id="timepicker">
          <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar"></span>{" "}
          </span>
          <input
            type="text"
            value={date}
            className="datepicker form-control"
            placeholder="Pick date"
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div></div>
      <InfiniteCalendar
        selected={null}
        width={Math.min(window.innerWidth, 362)}
        height={window.innerHeight - 200}
        rowHeight={50}
        minDate={lastWeek}
        displayOptions={{
          showOverlay: false,
          shouldHeaderAnimate: false,
          showHeader: false,
          showTodayHelper: false,
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
