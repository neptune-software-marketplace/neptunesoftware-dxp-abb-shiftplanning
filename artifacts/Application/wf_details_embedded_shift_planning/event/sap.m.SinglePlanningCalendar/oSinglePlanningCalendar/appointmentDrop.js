var oAppointment = oEvent.getParameter("appointment"),
    oStartDate = oEvent.getParameter("startDate"),
    oEndDate = oEvent.getParameter("endDate"),
    sAppointmentTitle = oAppointment.getTitle();


var shift_id = oAppointment.mProperties.key;
oAppointment.setStartDate(oStartDate);
oAppointment.setEndDate(oEndDate);

var options = {
    parameters: {
        "where": JSON.stringify({"shift_id" : shift_id})
    },
    data: {
        "Time_start": oStartDate,
        "Time_end": oEndDate,
    }
};

apiRestAPIShiftPost(options);