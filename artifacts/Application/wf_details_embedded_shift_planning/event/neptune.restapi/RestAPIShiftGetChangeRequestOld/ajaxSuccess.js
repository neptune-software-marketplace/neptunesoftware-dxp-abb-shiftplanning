var response = xhr.responseJSON;
var convertedEventsChaneable = []
// debugger
convertedEventsChaneable = response.map((event) => ({
    Time_start: new Date(event.Time_start),
    Time_end: new Date(event.Time_end),
    date: new Date(event.date),
    store_id: event.store_id + " " + "Old Shift",
    shift_id: event.shift_id,
    type: "Type01",
    id: event.id,
    employee_id: "",
    changeable :  event.changeable,
    createdBy: event.createdBy,
    createdAt: event.createdAt,
}));
var data = modelModelArrayData.getData();
var newArray = [];
newArray.push(data); 
newArray.push(convertedEventsChaneable[0]); 
const reversedArray = newArray.reverse();
modeloSinglePlanningCalendar.setData(newArray);

console.log(newArray);

var startDate = newArray[0].Time_start;
oSinglePlanningCalendar.setStartDate(startDate);
FlexBox.setBusy(false);