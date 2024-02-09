var response = xhr.responseJSON;
// debugger
var convertedEventsChaneable = [];
convertedEventsChaneable = response.map((event) => ({
    Time_start: new Date(event.Time_start),
    Time_end: new Date(event.Time_end),
    date: new Date(event.date),
    store_id: event.store_id + " " + "New shift",
    shift_id: event.shift_id,
    type: "Type07",
    id: event.id,
    employee_id: event.employee_id,
    changeable: event.changeable,
    createdBy: event.createdBy,
    createdAt: event.createdAt,
}));
var data = [];
modelModelArrayData.setData(data);
modelModelArrayData.setData(convertedEventsChaneable[0]);

var options1 = {
    parameters: {
        where: JSON.stringify({ id: response[0].change_request_id }),
    },
};
apiRestAPIShiftGetChangeRequestOld(options1);
