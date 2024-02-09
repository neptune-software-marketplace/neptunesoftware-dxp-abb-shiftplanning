// Get the start date from DateTimePicker2.
var oStartDate = DateTimePicker2.getValue();

// Get the end date from DateTimePicker3.
var oEndDate = DateTimePicker3.getValue();

// Get the shift ID from Textid.
var shift_id = Textid.getText();

// Define the type as "Type07".
var type = "Type07";

// Get the selected employees from MultiComboBoxAssignit1.
var employees = MultiComboBoxAssignit1.getSelectedKeys();

// Initialize concatenatedString variable.
var concatenatedString;

// Concatenate selected employee keys into a single string separated by semicolons.
var concatenatedString = employees.join(";", "");

// Check if concatenatedString is empty.
if (concatenatedString == "") {
    concatenatedString = "";
} else {
    // Add a semicolon if concatenatedString is not empty.
    concatenatedString = concatenatedString + ";";
}

// Remove any consecutive semicolons from concatenatedString.
let clear = concatenatedString.replace(/;;/g, ";");

// Define options for the API request.
var options = {
    parameters: {
        where: JSON.stringify({ id: shift_id }), // Specify the parameters for the API request.
    },
    data: {
        Time_start: new Date(oStartDate), // Assign the start date.
        Time_end: new Date(oEndDate), // Assign the end date.
        store_id: Text_Store_id.getText(), // Get the store ID from Text_Store_id.
        type: type, // Assign the type.
        employee_id: clear, // Assign the cleaned concatenated string of employee IDs.
        changeable: SelectChangeable.getSelectedKey(), // Get the selected changeable option.
    },
};

// Make an API call to post the shift with the defined options.
apiRestAPIShiftPost(options);

// Close the oDialogUpdate dialog.
oDialogUpdate.close();
