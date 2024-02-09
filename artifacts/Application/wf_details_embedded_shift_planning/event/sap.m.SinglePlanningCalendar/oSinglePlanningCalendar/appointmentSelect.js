var oAppointment = oEvent.getParameter("appointment");
console.log("oAppointment",oAppointment);
// var oStartDate = oAppointment.mProperties.startDate;
// var oEndDate = oAppointment.mProperties.endDate;
// DateTimePicker2.setValue(oAppointment.mProperties.startDate);
// DateTimePicker3.setValue(oAppointment.mProperties.endDate);
// Textid.setText(oAppointment.mProperties.key);
// const timeDifferenceInMillis = oEndDate.getTime() - oStartDate.getTime();
// const hoursDifference = timeDifferenceInMillis / (1000 * 60 * 60);
// Title1ShiftHour1.setText(hoursDifference + " " + "hours of working");
// // inSimpleForm1Location_can_work1.setSelectedKey(oAppointment.mProperties.title);
// // debugger;
// var veri = oAppointment.mProperties.employee_id;
// MultiComboBoxAssignit1.setSelectedKeys(oAppointment.mProperties.employee_id);


// if(oAppointment.mProperties.description === "changeable"){
oDialogUpdate.open();
// }else{
// sap.m.MessageToast.show("This Shift is not changeable");
// }

modelModelObjectData.setData(oAppointment);