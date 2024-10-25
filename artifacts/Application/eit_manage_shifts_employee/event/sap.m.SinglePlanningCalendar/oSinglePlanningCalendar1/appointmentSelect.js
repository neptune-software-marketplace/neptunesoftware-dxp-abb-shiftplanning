// // Get the appointment object from the event parameter.
// var oAppointment = oEvent.getParameter("appointment");

// // Set the appointment data to modelModelObjectData.
// modelModelObjectData.setData(oAppointment);

// // Set the appointment properties data to modelModelObjectChangeDataCheck.
// modelModelObjectChangeDataCheck.setData(oAppointment.mProperties);

// // Get the appointment properties data.
// var data = modelModelObjectChangeDataCheck.getData();

// // Extract relevant information from the appointment properties.
// var id = data.key;
// var changeable = data.description;
// var employee_id = data.text;
// var type = data.type;
// var store_id = data.title;

// // Set txtSimpleFormNewRequeststore_id with the store_id.
// txtSimpleFormNewRequeststore_id.setText(store_id);

// // Define the target date format.
// var targetDateFormat = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
// };

// // Convert the start and end dates to the target date format.
// var startDate = convertDateFormat(data.startDate, targetDateFormat);
// var endDate = convertDateFormat(data.endDate, targetDateFormat);

// // Set txtSimpleFormNewRequestTime_start and txtSimpleFormNewRequestTime_end with the converted dates.
// txtSimpleFormNewRequestTime_start.setText(startDate);
// txtSimpleFormNewRequestTime_end.setText(endDate);

// // Get the old start and end time formats.
// var old_start_time_format = TextStartTime.getText();
// var old_end_time_format = TextEndTime.getText();

// // Set the old start and end time formats to variables.
// var old_request_data_time_start = old_start_time_format;
// var old_request_data_time_end = old_end_time_format;

// // Get the old store ID.
// var old_request_data_store_id= TextStoreID.getText();

// // Set txtSimpleFormOld_Request_store_id with the old store ID.
// txtSimpleFormOld_Request_store_id.setText(old_request_data_store_id);

// // Set txtoSimpleForm_Old_Details_Time_start with the old start time format.
// txtoSimpleForm_Old_Details_Time_start.setText(old_request_data_time_start);

// // Set txtoSimpleForm_Old_Details_Time_end with the old end time format.
// txtoSimpleForm_Old_Details_Time_end.setText(old_request_data_time_end);

// // Open the oDialogChangeLog dialog.
// oDialogChangeLog.open();

// Check if the event and appointment parameters are available
var oAppointment = oEvent.getParameter("appointment");

if (!oAppointment) {
    console.error("Appointment object not found in event. Event parameters:", oEvent.getParameters());
    return;  // Exit if the appointment is not found
}

// Set the appointment data to modelModelObjectData.
modelModelObjectData.setData(oAppointment);

// Set the appointment properties data to modelModelObjectChangeDataCheck if available.
if (oAppointment.mProperties) {
    modelModelObjectChangeDataCheck.setData(oAppointment.mProperties);
} else {
    console.error("Appointment properties not found.");
}

// Get the appointment properties data.
var data = modelModelObjectChangeDataCheck.getData();

// Extract relevant information with safe defaults.
var id = data.key || '';
var changeable = data.description || '';
var employee_id = data.text || '';
var type = data.type || '';
var store_id = data.title || '';

// Set txtSimpleFormNewRequeststore_id with the store_id.
txtSimpleFormNewRequeststore_id && txtSimpleFormNewRequeststore_id.setText(store_id);

// Define the target date format.
var targetDateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

// Convert the start and end dates if defined.
var startDate = data.startDate ? convertDateFormat(data.startDate, targetDateFormat) : '';
var endDate = data.endDate ? convertDateFormat(data.endDate, targetDateFormat) : '';

// Set txtSimpleFormNewRequestTime_start and txtSimpleFormNewRequestTime_end if available.
txtSimpleFormNewRequestTime_start && txtSimpleFormNewRequestTime_start.setText(startDate);
txtSimpleFormNewRequestTime_end && txtSimpleFormNewRequestTime_end.setText(endDate);

// Get the old start and end time formats.
var old_start_time_format = TextStartTime.getText();
var old_end_time_format = TextEndTime.getText();

// Set the old request data variables.
var old_request_data_time_start = old_start_time_format || '';
var old_request_data_time_end = old_end_time_format || '';

// Get the old store ID.
var old_request_data_store_id = TextStoreID.getText() || '';

// Set the old request details if elements are defined.
txtSimpleFormOld_Request_store_id && txtSimpleFormOld_Request_store_id.setText(old_request_data_store_id);
txtoSimpleForm_Old_Details_Time_start && txtoSimpleForm_Old_Details_Time_start.setText(old_request_data_time_start);
txtoSimpleForm_Old_Details_Time_end && txtoSimpleForm_Old_Details_Time_end.setText(old_request_data_time_end);

// Open the oDialogChangeLog dialog if it exists.
if (oDialogChangeLog) {
    oDialogChangeLog.open();
} else {
    console.error("Dialog oDialogChangeLog is not defined.");
}
