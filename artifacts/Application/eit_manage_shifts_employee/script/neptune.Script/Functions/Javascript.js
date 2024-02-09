const today = new Date();
DatePicker.setMinDate(today);
DatePicker.setValue(today);

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

function convertDateFormat(dateString, targetFormat) {
    var inputDate = new Date(dateString);

    var targetDateFormat = new Intl.DateTimeFormat("en-US", targetFormat);

    var convertedDate = targetDateFormat.format(inputDate);

    return convertedDate;
}

var targetDateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

