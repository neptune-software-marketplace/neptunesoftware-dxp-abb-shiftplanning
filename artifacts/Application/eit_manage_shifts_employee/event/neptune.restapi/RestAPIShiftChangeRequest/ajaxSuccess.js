// This line makes the ButtonUpdate element visible by setting its visibility to true in the user interface.
ButtonUpdate.setVisible(true);

// This line retrieves the text entered by the user and assigns it to the variable wf_id.
var wf_id = TextWf_id.getText();

// Here, a JavaScript object named wfData is created. This object contains the necessary data for a workflow.
var wfData = {
    "id": "586F3E13-FEBA-EE11-B661-0022489E2BA0",
    "objectType": "KUNNR",
    "objectKey": wf_id,
    "amount": "1000",
    "currency": "EUR",
    "approver": ""
};

// An AJAX request is initiated.
$.ajax({
    type: "POST", // The HTTP request type is specified as POST.
    contentType: "application/json", // The type of data being sent is specified as JSON.
    url: "/api/functions/WorkflowInbox/Start", // The URL to which the request will be made is specified.
    headers: { // Request headers are specified.
        "Authorization": "Basic xxxx ", // Authorization credentials
        "X-Requested-With": "XMLHttpRequest", // XMLHttpRequest will be used.
    },
    data: JSON.stringify(wfData), // The data to be sent is specified by converting the wfData object to JSON format.
    success: function(data) { // The function to be executed if the request is successful.
        console.log("sent to workflow!"); // A message is logged to the console.
        sap.m.MessageToast.show("Your change request has been sent to approval"); // A message is displayed to the user.
    },
    error: function(result, status) {
        // Error Handler
    }
});
