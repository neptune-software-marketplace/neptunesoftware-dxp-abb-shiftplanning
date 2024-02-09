// Generate a UUID for the shift.
const myUUID = generateUUID();

// Close the oDialogCreate dialog.
oDialogCreate.close();

// Determine the type of shift based on the selected key in SelectTitle.
var type;
if (SelectTitle.getSelectedKey() == "Standart shift") {
    type = "Type07";
} else {
    type = "Type03";
}

// Get the current date.
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var dateObject = new Date(year, month - 1, day);

// Get the selected employees from MultiComboBoxAssignit and concatenate them into a string.
var employees = MultiComboBoxAssignit.getSelectedKeys();
var concatenatedString = employees.join('; ');

// Log the concatenated string to the console.
console.log(concatenatedString);

// Define options for the API request.
var options = {
    data: {
        "shift_id": myUUID, // Assign the generated UUID to the shift_id.
        "Time_start": DateTimePicker1.getDateValue(), // Assign the start time of the shift.
        "Time_end": DateTimePicker.getDateValue(), // Assign the end time of the shift.
        "store_id": inSimpleForm1Location_can_work.getSelectedKey(), // Assign the selected store ID.
        "date": dateObject, // Assign the current date.
        "type": type, // Assign the determined type of shift.
        "employee_id": concatenatedString, // Assign the concatenated string of employee IDs.
    }
};

// Make an API call to post the shift with the defined options.
apiRestAPIShiftPost(options);


