// Get the old shift ID from the TextChangeRequestID field.
var old_shift_id = TextChangeRequestID.getText();

// Get the data from modelModelObjectData.
var data = modelModelObjectData.getData();

// Get the start date from the TextStartDate  field.
var startDate = new Date(TextStartDate.getText());

// Get the end date from the TextEndDate  field.
var endDate = new Date(TextEndDate.getText());

// Get the ID from the TextWf_id  field.
var id = TextWf_id.getText();

// Define options for the API request.
var options = {
    data: {
        "shift_id": data.mProperties.key, // Assign the key from the data properties.
        "Time_start": startDate, // Assign the start date.
        "Time_end": endDate, // Assign the end date.
        "store_id": "Store A", // Assign a store ID.
        "date": startDate, // Assign the start date as the date.
        "type": data.mProperties.type, // Assign the type from the data properties.
        "employee_id": data.mProperties.text, // Assign the text from the data properties.
        "changeable": data.mProperties.description, // Assign the description from the data properties.
        "status": "Requested", // Set the status as "Requested".
        "change_request_id": old_shift_id, // Assign the old shift ID.
        "wf_id": id, // Assign the workflow ID.
    }
};

// Make an API call for the shift change request with the defined options.
apiRestAPIShiftChangeRequest(options);

// Hide the ButtonChangeRequest button.
ButtonChangeRequest.setVisible(false);

// Close the oDialogUpdate dialog.
oDialogUpdate.close();

// Navigate to the oPageDetail page.
App.to(oPageDetail);




























