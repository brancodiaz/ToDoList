import { useEffect, useState } from "react";
import { getToDoItems } from "./getToDoItems";

export const useEffectToDoItems = (pendingType) => {
 
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getItems = async() => {
        const newItems = await getToDoItems(pendingType);
        setItems(newItems);
        setIsLoading(false);
    }

    useEffect( () => {
        getItems();
    }, []);

    return {
        items,
        isLoading
    }
}