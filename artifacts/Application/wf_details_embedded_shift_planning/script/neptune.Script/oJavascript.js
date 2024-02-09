if (sap.n) {
    sap.n.Shell.attachInit(function (data) {
        FlexBox.setBusy(true);
        const change_request_id = data.objectKey;

        var options = {
            parameters: {
                where: JSON.stringify({ wf_id: change_request_id }),
            },
        };

        apiRestAPIShiftGetChangeRequestNew(options);


        jQuery.sap.addUrlWhitelist("blob");
    });
}
