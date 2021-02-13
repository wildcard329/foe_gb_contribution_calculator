export const STORE_BUILDING = 'STORE_BUILDING';
export const REMOVE_BUILDING = 'REMOVE_BUILDING';

export const storeBuilding = building => {
    return { type: STORE_BUILDING, building }
}

export const removeBuilding = id => {
    return { type: REMOVE_BUILDING, id }
}
