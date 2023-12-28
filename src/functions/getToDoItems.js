const TO_DO_ITEMS_LIST = 'https://localhost:7046/api/ToDo'

export const getToDoItems = async() =>
    {
        const resp = await fetch(TO_DO_ITEMS_LIST);
        const data = await resp.json();
        console.log(data);
        return data;
    }