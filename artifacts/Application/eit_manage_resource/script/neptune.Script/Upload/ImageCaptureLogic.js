sap.ui.getCore().attachInit(function (data) {
    oHTMLObjectCameraUpload.setContent(
        '<input type="file" accept="image/*" id="file-input"  style="display:none">'
    );
});

setTimeout(function () {
    modeloModelArrayImageStorage.setData([]);
    const fileInput = oFlexBoxCameraUpload.getDomRef();
    fileInput.addEventListener("change", (e) => handleFileSelect(e.target.files[0]));
}, 500);


function generateRandomID() {
    return Math.random().toString(36).substr(2, 9);
}
var tempData = [];
var currentData = [];
function handleFileSelect(f) {
    var reader = new FileReader();
    reader.onload = (function (theFile) {
        return function (e) {
            var binaryData = e.target.result;
            var base64String = window.btoa(binaryData);

            var fullBase64picture = "data:image/png;base64," + base64String;

            Avatar.setSrc(fullBase64picture);
            
           
        };
    })(f);
    reader.readAsBinaryString(f);

}
