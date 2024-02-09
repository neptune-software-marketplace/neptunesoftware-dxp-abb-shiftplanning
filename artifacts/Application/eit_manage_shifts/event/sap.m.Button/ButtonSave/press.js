// Generate a UUID for the shift.
const myUUID = generateUUID();

// Close the oDialogCreate dialog.
oDialogCreate.close();

// Initialize variables for type and date calculations.
var type;
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

// Create a Date object with the current date.
var dateObject = new Date(year, month - 1, day);

// Get the selected employees from MultiComboBoxAssignit.
var employees = MultiComboBoxAssignit.getSelectedKeys();

// Get the data from modelModelArray.
var data = modelModelArray.getData();

// Check for intersection of selected date and time with existing shifts.
checkIntersection(data, DateTimePicker1.getDateValue(), DateTimePicker.getDateValue());

// Initialize concatenatedString variable.
var concatenatedString;

// Concatenate selected employee keys into a single string separated by semicolons.
if (employees.length >= 1) {
    concatenatedString = employees.join("; ");
    concatenatedString = concatenatedString + ";";
}

// If no employees are selected, set concatenatedString to an empty string.
if (employees.length == 0) {
    concatenatedString = employees.join("; ");
}

// Determine the type based on the selected option in SelectChangeable1.
if (SelectChangeable1.getSelectedKey() === "Not Changeable") {
    // If the shift is not changeable, do nothing.
} else {
    // If the shift is changeable, set type to "Type07".
    type = "Type07";
}

// Define options for the API request.
var options = {
    data: {
        shift_id: myUUID, // Assign the generated UUID to the shift_id.
        Time_start: DateTimePicker1.getDateValue(), // Assign the start time of the shift.
        Time_end: DateTimePicker.getDateValue(), // Assign the end time of the shift.
        store_id: inSimpleForm1Location_can_work.getSelectedKey(), // Assign the selected store ID.
        date: dateObject, // Assign the current date.
        type: type, // Assign the determined type of shift.
        employee_id: concatenatedString, // Assign the concatenated string of employee IDs.
        changeable: SelectChangeable1.getSelectedKey(), // Assign the selected changeable option.
    },
};

// Make an API call to post the shift with the defined options.
apiRestAPIShiftPost(options);
