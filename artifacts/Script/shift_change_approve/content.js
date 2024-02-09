var data  = wfData.objectKey;

const entity_new_request_data = await entities.shift_plannin_app_shifts_change_request.createQueryBuilder("alias")
    .where("alias.wf_id = :id", {id: data})
    .getOne();

var userRequested = entity_new_request_data.createdBy;



const entity_employees = await entities.shift_plannin_app_shifts.createQueryBuilder("alias")
    .where("id = :id", {id: entity_new_request_data.change_request_id})
    .getOne();

var oldEmployees = entity_employees.employee_id;

var text = oldEmployees;


const entity_new_employees = await entities.shift_plannin_app_shifts.createQueryBuilder("alias")
    .where("id = :id", {id: entity_new_request_data.shift_id})
    .getOne();

var newEmployees = entity_new_employees.employee_id;

var text1 = newEmployees;

var newTextEmployees = text.replace(userRequested+";", "").replace(";;", ";").replace(" ;", ";").replace("; ", ";").replace("  ", " ");

var newTextEmployees2;
if (!text1.includes(userRequested)) {
    newTextEmployees2 = text1 + "; " + userRequested;
} else {
    newTextEmployees2 = text1;
}

var text2 = newTextEmployees2.replace(/^;+\s*/g, "");

if (!text2.endsWith(";")) {
    text2 += ";";
}

await entities.shift_plannin_app_shifts.createQueryBuilder()
    .update()
    .set({
    // "shift_id": entity_employees.shift_id,
    // "Time_start": entity_new_request_data.Time_start,
    // "Time_end": entity_new_request_data.Time_end,
    // "store_id":  entity_new_request_data.store_id,
    // "date":  entity_new_request_data.date,
    // "type":  entity_new_request_data.type,
    "employee_id":  newTextEmployees,
    // "changeable":  "Not changeable"
    })
    .where("id = :id", {id: entity_new_request_data.change_request_id})
    .execute();


await entities.shift_plannin_app_shifts.createQueryBuilder()
    .update()
    .set({
    // "shift_id": entity_employees.shift_id,
    // "Time_start": entity_new_request_data.Time_start,
    // "Time_end": entity_new_request_data.Time_end,
    // "store_id":  entity_new_request_data.store_id,
    // "date":  entity_new_request_data.date,
    // "type":  entity_new_request_data.type,
    "employee_id":  text2,
    // "changeable":  "Not changeable"
    })
    .where("id = :id", {id: entity_new_request_data.shift_id})
    .execute();


await entities.shift_plannin_app_shifts_change_request.createQueryBuilder()
    .delete()
    .where("wf_id = :id", {id: data})
    //.andWhere(...)
    //.orWhere(...)
    .execute();


complete();




























