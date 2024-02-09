var oStartDate = oEvent.getParameter("startDate"),
    oEndDate = oEvent.getParameter("endDate"),
    sAppointmentTitle = "Shift"
    oDialogCreate.open();
    DateTimePicker1.setDateValue(oStartDate);
    DateTimePicker.setDateValue(oEndDate);
    TextStartDate.setText(formatDate(oStartDate));
    TextEndDate.setText(formatDate(oEndDate));
const timeDifferenceInMillis = oEndDate.getTime() - oStartDate.getTime();
const hoursDifference = timeDifferenceInMillis / (1000 * 60 * 60);
Title1ShiftHour.setText(hoursDifference +  " " + "hours of working");