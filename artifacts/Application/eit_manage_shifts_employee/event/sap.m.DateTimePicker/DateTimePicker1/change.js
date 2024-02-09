    // var date1 = DateTimePickerStartTime.getDateValue();
    // var date2 = DateTimePicker1.getDateValue();
    // var time1 = DateTimePickerStartTime.getValue();
    // var time2 = DateTimePicker1.getValue();

    // if (date2 < date1 || (date2.getTime() === date1.getTime() && time2 < time1)) {
    //     sap.m.MessageToast.show("Activity start time cannot be outside of the working hours.");
    //     DateTimePicker1.setValue(DateTimePickerStartTime.getValue());
    // }


  var oStartDate=  DateTimePicker1.getDateValue();
  var oEndDate = DateTimePicker.getDateValue();

const timeDifferenceInMillis = oEndDate.getTime() - oStartDate.getTime();
const hoursDifference = timeDifferenceInMillis / (1000 * 60 * 60);
Title1ShiftHour.setText(hoursDifference +  " " + "hours of working");






