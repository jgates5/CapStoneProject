import React, { Component } from "react";

export default class Calendar extends Component {

  
  
  render(){
    return (
      <div>
        {(this.props.IsUserLoggedIn == "LOGGED_IN") ?
        <div>{this.props.LoggedInUserName} <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FDenver&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showDate=1&amp;showNav=1&amp;showTitle=0&amp;src=enVtYmF3aXRobGF1cmE4MTA5QGdtYWlsLmNvbQ&amp;color=%23039BE5" width="800" height="600" frameborder="0" scrolling="no"></iframe></div>
       
        :""
        }
      {/* <button onClick={this.giveUserAppointment(appointmentDate)}>Click here for appoinment</button> */}
      </div>
    );
  }

  // giveUserAppointment = (eventStartDate) => {
  //   var convertedStartDate = moment(eventStartDate).toISOString();
  //   let data = `
  //     BEGIN:VEVENT
  //     CREATED:20151219T021727Z
  //     DTEND;TZID=America/Toronto:20170515T110000
  //     DTSTAMP:`+convertedStartDate+`
  //     DTSTART;TZID=America/Toronto:20170515T100000
  //     LAST-MODIFIED:20151219T021727Z
  //     RRULE:FREQ=DAILY;UNTIL=20170519T035959Z
  //     SEQUENCE:0
  //     SUMMARY:Meeting
  //     TRANSP:OPAQUE
  //     UID:21B97459-D97B-4B23-AF2A-E2759745C299
  //     END:VEVENT
  //     END:VCALENDAR
  // `;

  // fileDownload(data, 'appointment.ics');
  // }
}