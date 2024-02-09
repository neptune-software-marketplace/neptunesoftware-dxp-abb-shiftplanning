var data  = wfData.objectKey;

await entities.shift_plannin_app_shifts_change_request.createQueryBuilder()
    .delete()
    .where("id = :id", {id: data})
    .execute();

await entities.shift_plannin_app_shifts_change_request.createQueryBuilder()
    .delete()
    .where("wf_id = :id", {id: data})
    //.andWhere(...)
    //.orWhere(...)
    .execute();


complete()