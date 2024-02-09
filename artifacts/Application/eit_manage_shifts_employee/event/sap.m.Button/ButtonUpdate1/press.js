// var oAppointment = modelModelObjectChangeDataCheck.getData();

// var oStartDate = oAppointment.mProperties.startDate;
// var oEndDate = oAppointment.mProperties.endDate;

// TextStartDate.setText(formatDate(oStartDate));
// TextEndDate.setText(formatDate(oEndDate));

// DateTimePicker2.setValue(oAppointment.mProperties.startDate);
// DateTimePicker3.setValue(oAppointment.mProperties.endDate);

// TextStoreName.setText(oAppointment.mProperties.title);
// Textid.setText(oAppointment.mProperties.key);
// const timeDifferenceInMillis = oEndDate.getTime() - oStartDate.getTime();
// const hoursDifference = timeDifferenceInMillis / (1000 * 60 * 60);
// Title1ShiftHour1.setText(hoursDifference + " " + "hours of working");

// var veri = oAppointment.mProperties.employee_id;
// MultiComboBoxAssignit1.setSelectedKeys(oAppointment.mProperties.employee_id);





var data = modelModelObjectChangeDataCheck.getData();
var id = data.key;
var changeable = data.description;
var enddate = data.endDate;
var startdate = data.startDate;
var employee_id = data.text;
var type = data.type;
var store_id = data.title;
console.log(data);

var old_shift_id = TextChangeRequestID.getText();
var startDate = new Date(startdate);
var endDate = new Date(enddate);
var wf_id = TextWf_id.getText();

var options = {
    data: {
        "shift_id": id,
        "Time_start":new Date(startDate),
        "Time_end":new Date(endDate),
        "store_id": "Store A",
        "date": new Date(startDate),
        "type": type,
        "employee_id": employee_id,
        "changeable": changeable,
        "status": "Requested",
        "change_request_id": old_shift_id,
        "wf_id": wf_id,
    }
};

apiRestAPIShiftChangeRequest(options);
ButtonChangeRequest.setVisible(false);
App.to(oPageDetail);
oDialogChangeLog.close();




