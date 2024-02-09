// Get the appointment object from the event parameter.
var oAppointment = oEvent.getParameter("appointment");

// Get the start and end dates from the appointment properties.
var oStartDate = oAppointment.mProperties.startDate;
var oEndDate = oAppointment.mProperties.endDate;

// Set the values of DateTimePicker2 and DateTimePicker3 to the start and end dates of the appointment.
DateTimePicker2.setValue(oAppointment.mProperties.startDate);
DateTimePicker3.setValue(oAppointment.mProperties.endDate);

// Format the start and end dates and set the TextStartDate1 and TextEndDate1 with the formatted dates.
var formatted_start_date = formatDate(oStartDate);
var formatted_end_date = formatDate(oEndDate);
TextStartDate1.setText(formatted_start_date);
TextEndDate1.setText(formatted_end_date);
TextStartDate.setText(formatted_start_date);
TextEndDate.setText(formatted_end_date);

// Set the Textid with the key of the appointment.
Textid.setText(oAppointment.mProperties.key);

// Calculate the difference in hours between the start and end dates and set Title1ShiftHour1.
const timeDifferenceInMillis = oEndDate.getTime() - oStartDate.getTime();
const hoursDifference = timeDifferenceInMillis / (1000 * 60 * 60);
Title1ShiftHour1.setText(hoursDifference + " " + "hours of working");

// Extract data_string and store_id from the appointment properties.
var data_string = oAppointment.mProperties.text;
var store_id = oAppointment.mProperties.title;

// Set the store_id to Text_Store_id.
Text_Store_id.setText(store_id);

// Initialize data array to store selected keys.
var data;

// Split data_string into an array of emails and trim spaces, if data_string is not empty or undefined.
if (data_string != "" && data_string != undefined) {
    data = data_string.split(';').map(email => email.trim());
} else {
    // Otherwise, set data to data_string.
    data = oAppointment.mProperties.text;
}

// Set the selected keys in MultiComboBoxAssignit1 with the data array.
MultiComboBoxAssignit1.setSelectedKeys(data);

// Open the oDialogUpdate dialog.
oDialogUpdate.open();
