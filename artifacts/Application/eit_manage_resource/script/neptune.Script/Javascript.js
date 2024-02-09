apiRestAPIGetEmployee();


var multiComboBoxDaysData = [
  { key: "Monday", text: "Monday" },
  { key: "Tuesday", text: "Tuesday" },
  { key: "Wednesday", text: "Wednesday" },
  { key: "Thursday", text: "Thursday" },
  { key: "Friday", text: "Friday" },
  { key: "Saturday", text: "Saturday" },
  { key: "Sunday", text: "Sunday" },
];
var multiComboBoxGendersData = [
  { key: "Female", text: "Female" },
  { key: "Male", text: "Male" }
];
var multiComboBoxLocationsData = [
  { key: "Store A", text: "Store A" },
  { key: "Store B", text: "Store B" },
  { key: "Store C", text: "Store C" },
  { key: "Store D", text: "Store D" }
];
modelinSimpleForm1Location_can_work.setData(multiComboBoxLocationsData);
modelinSimpleForm1Days_not_working.setData(multiComboBoxDaysData);
modelinSimpleForm1Days_working.setData(multiComboBoxDaysData);
modelinoFormTripDetailsGender.setData(multiComboBoxGendersData);