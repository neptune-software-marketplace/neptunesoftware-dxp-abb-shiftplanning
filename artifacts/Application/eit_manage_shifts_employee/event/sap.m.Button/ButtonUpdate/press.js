// Get the shift ID from Textid input field.
var shift_id = Textid.getText();

// Set the shift ID to TextChangeRequestID input field.
TextChangeRequestID.setText(shift_id);

// Close the oDialogUpdate dialog.
oDialogUpdate.close();

// Get the start and end date from DateTimePicker2 and DateTimePicker3.
var originalDateFormat = DateTimePicker2.getValue();
var originalDateFormatend = DateTimePicker3.getValue();

// Set the value of DatePicker to the start date.
DatePicker.setValue(originalDateFormat);

// Get today's date and set the time to midnight.
var today = new Date();
today.setHours(0, 0, 0, 0);

// Check if the shift start date is before today. If so, show a message and return.
var itemStartDate = new Date(originalDateFormat);
if (itemStartDate < today) {
    sap.m.MessageToast.show("This shift can not be changed!");
    return;
}

// Show ButtonChangeRequest and hide ButtonUpdate.
ButtonChangeRequest.setVisible(true);
ButtonUpdate.setVisible(false);

// Define the target date format.
var targetDateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

// Convert the start and end date formats to the target format.
var result = convertDateFormat(originalDateFormat, targetDateFormat);
var resultenddate = convertDateFormat(originalDateFormatend, targetDateFormat);

// Set TextStartTime and TextEndTime with the converted date formats.
TextStartTime.setText(result);
TextEndTime.setText(resultenddate);

// Set TextStoreID with TextStoreName value.
TextStoreID.setText(TextStoreName.getText());

// Navigate to oPageDetailChangeShift page.
App.to(oPageDetailChangeShift);

// Set TextShiftType with SelectTitle1 selected key.
TextShiftType.setText(SelectTitle1.getSelectedKey());

// Generate a UUID for TextWf_id.
var id = generateUUID();
TextWf_id.setText(id);

// Get changeable activities from modelModelArrayShifts.
var activitiesChangeable = modelModelArrayShifts.getData();
var changeableShifts = [];

// Iterate through changeable activities and filter by start date and username.
activitiesChangeable.forEach(function (item) {
    var itemStartDate = new Date(item.Time_start);

    if (!item.employee_id.includes(username) && itemStartDate > today) {
        changeableShifts.push(item);
    }
});

// Convert changeable events to desired format and update data models.
const convertedEventsChaneable = changeableShifts.map((event) => ({
    Time_start: new Date(event.Time_start),
    Time_end: new Date(event.Time_end),
    date: new Date(event.date),
    store_id: event.store_id,
    shift_id: event.shift_id,
    type: event.type,
    id: event.id,
    employee_id: event.employee_id,
    changeable: event.changeable,
}));
activitiesChangeable = [];
activitiesChangeable = convertedEventsChaneable;
modeloSinglePlanningCalendar1.setData(activitiesChangeable);
modelList.setData(activitiesChangeable);

// Clone activitiesChangeable array.
var newArray = activitiesChangeable;

// Find earliest start hour and latest end hour among activitiesChangeable.
var earliestStartHour = 24;
var latestEndHour = 0;

activitiesChangeable.forEach(function (item) {
    var startHour = new Date(item.Time_start).getHours();
    var endHour = new Date(item.Time_end).getHours();

    if (startHour < earliestStartHour) {
        earliestStartHour = startHour;
    }

    if (endHour > latestEndHour) {
        latestEndHour = endHour;
    }
});

// Set start and end hour for oSinglePlanningCalendar1.
oSinglePlanningCalendar1.setStartHour(earliestStartHour);
oSinglePlanningCalendar1.setEndHour(latestEndHour);
