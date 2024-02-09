var activitiesChangeable = modelModelArrayShifts.getData();
var changeableShifts = [];
activitiesChangeable.forEach(function(item) {
  var itemDate = new Date(item.Time_start);
  var today = new Date(DatePicker.getValue());
  today.setHours(0, 0, 0, 0); 
  if (
    item.employee_id.indexOf(username) === -1 &&
    itemDate.toDateString() === today.toDateString()
  ) {
    changeableShifts.push(item);
  }
});
const convertedEventsChaneable = changeableShifts.map((event) => ({
    Time_start: new Date(event.Time_start),
    Time_end: new Date(event.Time_end),
    date: new Date(event.date),
    store_id: event.store_id,
    shift_id: event.shift_id,
    type: event.type,
    id: event.id,
    employee_id: event.employee_id,
    changeable :  event.changeable,
}));
activitiesChangeable = [];
activitiesChangeable = convertedEventsChaneable;
modeloSinglePlanningCalendar1.setData(activitiesChangeable);
modelList.setData(activitiesChangeable);