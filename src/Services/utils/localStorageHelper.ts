
export function getLocalStorage<T>(key: string, initalValue: T) {
    const jsonRes = localStorage.getItem(key);
    let objRes: T = jsonRes !== null ? JSON.parse(jsonRes) : initalValue;
    return objRes;
}

