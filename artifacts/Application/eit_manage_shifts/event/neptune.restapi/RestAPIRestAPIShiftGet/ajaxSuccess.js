// Get the response JSON from the XMLHttpRequest object.
var response = xhr.responseJSON;

// Create an empty array to hold activities.
var activities = [];

// Set the activities array as data for modelModelArray.
modelModelArray.setData(activities);

// Set the response JSON data as data for modelModelArray.
modelModelArray.setData(response);

// Get the data from modelModelArray and assign it to the activities array.
activities = modelModelArray.getData();

// Convert the activities data into the desired format.
const convertedEvents = activities.map((event) => ({
    Time_start: new Date(event.Time_start),
    Time_end: new Date(event.Time_end),
    date: new Date(event.date),
    store_id: event.store_id,
    shift_id: event.shift_id,
    type: event.type,
    id: event.id,
    employee_id: event.employee_id,
}));

// Reset the activities array.
activities = [];

// Assign the converted events to the activities array.
activities = convertedEvents;

// Set the data for modeloSinglePlanningCalendar.
modeloSinglePlanningCalendar.setData(convertedEvents);
