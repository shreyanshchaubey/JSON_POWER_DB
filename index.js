var token = "90931275|-31949327982200659|90961042";
var dbName = "PROJECT-MANAGEMENT";
var relName = "PROJECT-TABLE";

function resetForm() {
    $("#projectID").val("").prop("disabled", false);
    $("#projectName").val("").prop("disabled", true);
    $("#assignedTo").val("").prop("disabled", true);
    $("#assignmentDate").val("").prop("disabled", true);
    $("#deadline").val("").prop("disabled", true);
    $("#save").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);
}

function recordcheck() {
    var projectIDvar = $("#projectID").val();
    if (jsonObj === "") {
        alert("Project ID required");
        $("#projectID").focus();
        return "";
    }

    var jsonObj = {
        projectID: projectIDvar
    };

    var jsonStr = JSON.stringify(jsonObj);
    if (jsonStr === "") {
        return;
    }

    jQuery.ajaxSetup({ async: false });
    var getReqStr = (createGET_BY_KEYRequest(token, dbName, relName, jsonStr, true, true));
    var resultObj = executeCommandAtGivenBaseUrl(getReqStr, "http://api.login2explore.com:5577", "/api/irl");
    if (resultObj.status !==200) {
        Inputenable();
        $("#update").prop("disabled", true);
    }
    else{
        Inputenable()
        $("#save").prop("disabled", true);
        fillData(resultObj);
        return true;
    }
}

function Inputenable() {
    $("#projectID").prop("disabled", false);
    $("#projectName").prop("disabled", false);
    $("#assignedTo").prop("disabled", false);
    $("#assignmentDate").prop("disabled", false);
    $("#deadline").prop("disabled", false);
    $("#save").prop("disabled", false);
    $("#update").prop("disabled", false);
    $("#reset").prop("disabled", false);
}

function fillData(resultObj) {
    var data = JSON.parse(resultObj.data);
    var data1 = JSON.stringify(data.record);
    var data2 = JSON.parse(data1);
    $("#projectID").val(data2.projectID);
    $("#projectName").val(data2.projectName);
    $("#assignedTo").val(data2.assignedTo);
    $("#assignmentDate").val(data2.assignmentDate);
    $("#deadline").val(data2.deadline);
    jQuery.ajaxSetup({ async: true });
    savetolocalstorage(resultObj);
    Inputenable();
    $("#save").prop("disabled", true);
    $("#projectID").prop("disabled", true);
}

function savetolocalstorage(resultObj) {
    var data = JSON.parse(resultObj.data);
    localStorage.setItem('rec_no', data.rec_no);
}

function Register() {
    var jsonStr = checkformddata();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest(token, jsonStr, dbName, relName);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
    if (resultObj.status === 200) {
        alert("Data added Successfully");
    }
    else if (resultObj.status === 401) {
        alert("Invalid Token");
    }
    else if (resultObj.status === 400) {
        alert("Something went wrong, Try after some time");
    }
    jQuery.ajaxSetup({ async: true });
    resetForm();
}

function checkformddata() {
    var projectIDvar = $("#projectID").val();

    if (projectIDvar === "") {
        alert("projectID is required");
        $("#projectID").focus();
        return "";
    }

    var projectNamevar = $("#projectName").val();
    if (projectNamevar === "") {
        alert("Project Name is required");
        $("#projectName").focus();
        return "";
    }

    var assignedTovar = $("#assignedTo").val();
    if (assignedTovar === "") {
        alert("Assigned To is required");
        $("#assignedTo").focus();
        return "";
    }

    var assignmentDatevar = $("#assignmentDate").val();
    if (assignmentDatevar === "") {
        alert("Assingment Date is required");
        $("#assignmentDate").focus();
        return "";
    }

    var deadlinevar = $("#deadline").val();
    if (deadlinevar === "") {
        alert("Deadline is required");
        $("#deadline").focus();
        return "";
    }

    var jsonStrObj = {
        projectID: projectIDvar,
        projectName: projectNamevar,
        assignedTo: assignedTovar,
        assignmentDate: assignmentDatevar,
        deadline: deadlinevar,
    };

    return JSON.stringify(jsonStrObj);
}

function Update() {
    var jsonStr = checkformddata();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createUPDATERecordRequest(token, jsonStr, dbName, relName, localStorage.getItem("rec_no"));
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
    if (resultObj.status === 200) {
        alert("Data updated Successfully");
    }
    else if (resultObj.status === 401) {
        alert("Invalid Token");
    }
    else if (resultObj.status === 400) {
        alert("Something went wrong, Try after some time");
    }
    jQuery.ajaxSetup({ async: true });
    resetForm();
}