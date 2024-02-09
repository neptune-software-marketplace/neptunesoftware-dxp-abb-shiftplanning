  var oStartDate=  DateTimePicker1.getDateValue();
  var oEndDate = DateTimePicker.getDateValue();

const timeDifferenceInMillis = oEndDate.getTime() - oStartDate.getTime();
const hoursDifference = timeDifferenceInMillis / (1000 * 60 * 60);
Title1ShiftHour.setText(hoursDifference +  " " + "hours of working");