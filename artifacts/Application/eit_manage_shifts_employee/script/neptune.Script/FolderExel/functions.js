function getTableData(tableName, formatted) {
    username = AppCache.userInfo.email;
    sap.ui.core.BusyIndicator.show(0);
    const endpoint = `/api/entity/${tableName}`;
    $.ajax({
        url: endpoint,
        type: "GET",
        contentType: "application/json",
        success: (data) => {
            var yourShifts = [];
            data.forEach(function (item) {
                if (item.employee_id.includes(username)) {
                    yourShifts.push(item);
                }
            });
            data = yourShifts;

            function formatDate(dateString) {
                const options = {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZone: "UTC",
                };
                return new Date(dateString).toLocaleDateString("en-US", options);
            }

            function formatResponse(response) {
                return response.map((item) => ({
                    shift_end_time: formatDate(item.Time_end),
                    shift_start_time: formatDate(item.Time_start),
                    changeable: item.changeable,
                    created_At: formatDate(item.createdAt),
                    created_By: item.createdBy,
                    created_date: formatDate(item.date),
                    employee: item.employee_id,
                    store_id: item.store_id,
                    updatedAt: formatDate(item.updatedAt),
                    updatedBy: item.updatedBy,
                }));
            }

            const formattedResponse = formatResponse(data);

            data = formattedResponse;

            sap.ui.core.BusyIndicator.hide();
            if (data.length > 0) {
                 downloadCSV(tableName, data);
                if (formatted) createDownloadExcel(tableName, data);
                else downloadExcel(tableName, data);
            }
        },
        error: (error) => {
            sap.m.MessageToast.show(error.responseJSON);
            sap.ui.core.BusyIndicator.hide();
        },
    });
}

function downloadExcel(tableName, data) {
    filename = `${tableName}.xlsx`;
    var ws = XLSX.utils.json_to_sheet(data);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, tableName);
    XLSX.writeFile(wb, filename);
}

function createDownloadExcel(tableName, data) {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet(tableName);
    ws.addTable({
        name: "MyTable",
        ref: "A1",
        headerRow: true,
        style: {
            theme: "TableStyleMedium4",
            showRowStripes: true,
        },
        columns: getHeader(data),
        rows: getRows(data),
    });
    wb.xlsx
        .writeBuffer({
            base64: true,
        })
        .then(function (xls64) {
            // build anchor tag and attach file (works in chrome)
            var a = document.createElement("a");
            var data = new Blob([xls64], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });

            var url = URL.createObjectURL(data);
            a.href = url;
            a.download = `${tableName}.xlsx`;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        })
        .catch(function (error) {
            console.log(error.message);
        });
}


function downloadCSV(tableName, data) {
    const csvContent = convertToCSV(data);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    filename = `${tableName}.csv`;

    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        const link = document.createElement("a");

        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

function convertToCSV(data) {
    const header = Object.keys(data[0]);
    const rows = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName])).join(','));
    return [header.join(','), ...rows].join('\n');
}


function getHeader(data) {
    var retArr = [];
    Object.keys(data[0]).forEach((key) => {
        retArr.push({ name: key });
    });
    return retArr;
}

function getRows(data) {
    var retArr = [];
    data.forEach((row) => {
        retArr.push(Object.values(row));
    });
    return retArr;
}
