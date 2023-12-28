const TO_DO_ITEMS_LIST = 'https://localhost:7046/api/ToDo/'

export const getToDoItems = async (pendingType) => {
    var uri = pendingType ? TO_DO_ITEMS_LIST + 'all-pending' : TO_DO_ITEMS_LIST + 'all-finished';
    const resp = await fetch(uri);
    const data = await resp.json();
    // console.log(data);
    return data;
}