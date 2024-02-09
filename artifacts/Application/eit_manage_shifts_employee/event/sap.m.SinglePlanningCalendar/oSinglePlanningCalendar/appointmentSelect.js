// Check if the appointment parameter is undefined.
if (oEvent.getParameter("appointment") == undefined) {
    return; // Exit the if the appointment is undefined.
}

// Get the appointment object.
var oAppointment = oEvent.getParameter("appointment");

// Get the key property of the appointment.
var key = oAppointment.mProperties.key;

// Get the username from AppCache.userInfo.email.
var username = AppCache.userInfo.email;

// Define options for the API request to check if a request for this shift already exists.
var options = {
    parameters: {
        where: JSON.stringify({ change_request_id: key, createdBy: username }),
    },
};

// Make an API call to check if there's a pending request for this shift.
apiRestAPIGetisRequested(options)
    .then(function (response) {
        // If there's a pending request for this shift, show a message and return.
        if (response.length > 0) {
            sap.m.MessageToast.show("You already have a pending request for this shift");
            return;
        }

        // If the shift is changeable, open the oDialogUpdate dialog.
        if (oAppointment.mProperties.description === "changeable") {
            oDialogUpdate.open();
        } else {
            // If the shift is not changeable, show a message.
            sap.m.MessageToast.show("This Shift is not changeable");
        }

        // Set TextStartDate and TextEndDate with the start and end dates of the appointment.
        var oStartDate = oAppointment.mProperties.startDate;
        var oEndDate = oAppointment.mProperties.endDate;
        TextStartDate.setText(formatDate(oStartDate));
        TextEndDate.setText(formatDate(oEndDate));

        // Set DateTimePicker2 and DateTimePicker3 values with the start and end dates of the appointment.
        DateTimePicker2.setValue(oAppointment.mProperties.startDate);
        DateTimePicker3.setValue(oAppointment.mProperties.endDate);

        // Set TextStoreName and Textid with the title and key properties of the appointment.
        TextStoreName.setText(oAppointment.mProperties.title);
        Textid.setText(oAppointment.mProperties.key);

        // Calculate the difference in hours between the start and end dates and set Title1ShiftHour1.
        const timeDifferenceInMillis = oEndDate.getTime() - oStartDate.getTime();
        const hoursDifference = timeDifferenceInMillis / (1000 * 60 * 60);
        Title1ShiftHour1.setText(hoursDifference + " " + "hours of working");

        // Set the selected keys in MultiComboBoxAssignit1 with the employee_id property of the appointment.
        MultiComboBoxAssignit1.setSelectedKeys(oAppointment.mProperties.employee_id);

        // Log an error message to the console.
        console.error("error:");
    })
    .catch(function (error) {
        // Log an error message to the console if there's an error.
        console.error("error:", error);
    });
