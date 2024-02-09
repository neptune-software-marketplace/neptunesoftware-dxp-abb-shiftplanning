var multiComboBoxShiftsData = [
    { key: "Standart shift", text: "Standart shift" },
    { key: "Overtime shift", text: "Overtime shift" },
];
var multiComboBoxChangeableData = [
    { key: "changeable", text: "Changeable" },
    { key: "Not Changeable", text: "Not Changeable" },
];
var multiComboBoxLocations = [
    { key: "Store A", text: "Store A" },
];
modelSelectChangeable.setData(multiComboBoxChangeableData);
modelSelectChangeable1.setData(multiComboBoxChangeableData);
modelinSimpleForm1Location_can_work.setData(multiComboBoxLocations);
modelSelectTitle.setData(multiComboBoxShiftsData);
modelSelectTitle1.setData(multiComboBoxShiftsData);

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var formattedDate = (day < 10 ? '0' : '') + day + '/' +
                        (month < 10 ? '0' : '') + month + '/' +
                        year;

    var formattedTime = (hours < 10 ? '0' : '') + hours + ':' +
                        (minutes < 10 ? '0' : '') + minutes;

    return formattedDate + ' ' + formattedTime;
}

function checkIntersection(arr, startDateTime, endDateTime) {
    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        let itemStart = new Date(currentItem.Time_start);
        let itemEnd = new Date(currentItem.Time_end);
        if (
            (startDateTime >= itemStart && startDateTime < itemEnd) ||
            (endDateTime > itemStart && endDateTime <= itemEnd) ||
            (startDateTime <= itemStart && endDateTime >= itemEnd)
        ) {
            sap.m.MessageToast.show("Shift hours are overlapping!");
            throw new Error("Shift hours are overlapping!");
        }
    }
}