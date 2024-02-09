// Get the appointment object from the event parameter.
var oAppointment = oEvent.getParameter("appointment");

// Set the appointment data to modelModelObjectData.
modelModelObjectData.setData(oAppointment);

// Set the appointment properties data to modelModelObjectChangeDataCheck.
modelModelObjectChangeDataCheck.setData(oAppointment.mProperties);

// Get the appointment properties data.
var data = modelModelObjectChangeDataCheck.getData();

// Extract relevant information from the appointment properties.
var id = data.key;
var changeable = data.description;
var employee_id = data.text;
var type = data.type;
var store_id = data.title;

// Set txtSimpleFormNewRequeststore_id with the store_id.
txtSimpleFormNewRequeststore_id.setText(store_id);

// Define the target date format.
var targetDateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

// Convert the start and end dates to the target date format.
var startDate = convertDateFormat(data.startDate, targetDateFormat);
var endDate = convertDateFormat(data.endDate, targetDateFormat);

// Set txtSimpleFormNewRequestTime_start and txtSimpleFormNewRequestTime_end with the converted dates.
txtSimpleFormNewRequestTime_start.setText(startDate);
txtSimpleFormNewRequestTime_end.setText(endDate);

// Get the old start and end time formats.
var old_start_time_format = TextStartTime.getText();
var old_end_time_format = TextEndTime.getText();

// Set the old start and end time formats to variables.
var old_request_data_time_start = old_start_time_format;
var old_request_data_time_end = old_end_time_format;

// Get the old store ID.
var old_request_data_store_id= TextStoreID.getText();

// Set txtSimpleFormOld_Request_store_id with the old store ID.
txtSimpleFormOld_Request_store_id.setText(old_request_data_store_id);

// Set txtoSimpleForm_Old_Details_Time_start with the old start time format.
txtoSimpleForm_Old_Details_Time_start.setText(old_request_data_time_start);

// Set txtoSimpleForm_Old_Details_Time_end with the old end time format.
txtoSimpleForm_Old_Details_Time_end.setText(old_request_data_time_end);

// Open the oDialogChangeLog dialog.
oDialogChangeLog.open();
