var oAppointment;
const context = oEvent.oSource.getBindingContext();  
// debugger;
oAppointment = context.getObject();
modelModelObjectData.setData(oAppointment);

var old_shift_id = TextChangeRequestID.getText();
var data = modelModelObjectData.getData();
var startDate = new Date(oAppointment.startDate).toLocaleString();
var endDate = new Date(oAppointment.endDate).toLocaleString();
var wf_id = TextWf_id.getText();

var options = {
    data: {
        "shift_id": oAppointment.id,
        "Time_start":new Date(oAppointment.Time_start),
        "Time_end":new Date(oAppointment.Time_end),
        "store_id": "Store A",
        "date": new Date(oAppointment.date),
        "type": oAppointment.type,
        "employee_id": oAppointment.employee_id,
        "changeable": oAppointment.changeable,
        "status": "Requested",
        "change_request_id": old_shift_id,
        "wf_id": wf_id,
    }
};

apiRestAPIShiftChangeRequest(options);
ButtonChangeRequest.setVisible(false);
// oDialogUpdate.close();
App.to(oPageDetail);