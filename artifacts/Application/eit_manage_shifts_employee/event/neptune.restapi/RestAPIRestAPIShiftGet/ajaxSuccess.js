// Get the activities data from modelModelArrayShifts.
var activities = modelModelArrayShifts.getData();

// Get the username from AppCache.userInfo.email.
var username = AppCache.userInfo.email;

// Create an array to store shifts of the current user.
var yourShifts = [];

// Filter activities for shifts owned by the user.
activities.forEach(function(item) {
    if (item.employee_id.includes(username)) {
        yourShifts.push(item);
    }
});

// Update the activities array with the shifts owned by the user.
activities = yourShifts;

// Retrieve changeable activities data.
var activitiesChangeable = modelModelArrayShifts.getData();

// Create an array to store changeable shifts.
var changeableShifts = [];

// Get today's date and set the time to midnight.
var today = new Date();
today.setHours(0, 0, 0, 0);

// Filter changeable shifts that are not owned by the user and start after today.
activitiesChangeable.forEach(function(item) {
    var itemStartDate = new Date(item.Time_start);

    if (
        !item.employee_id.includes(username) &&
        itemStartDate > today
    ) {
        changeableShifts.push(item);
    }
});

// Convert changeable events to the desired format.
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

// Update activitiesChangeable array with the converted changeable events.
activitiesChangeable = [];
activitiesChangeable = convertedEventsChaneable;

// Set the data for modeloSinglePlanningCalendar1 and modelList.
modeloSinglePlanningCalendar1.setData(activitiesChangeable);
modelList.setData(activitiesChangeable);

// Convert events to the desired format.
const convertedEvents = activities.map((event) => ({
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

// Update the activities array with the converted events.
activities = [];
activities = convertedEvents;

// Set the data for modeloSinglePlanningCalendar.
modeloSinglePlanningCalendar.setData(convertedEvents);
