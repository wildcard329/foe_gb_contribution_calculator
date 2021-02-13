import * as Actions from './action.js';

const initialState = {
    building: {},
    buildings: []
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case Actions.STORE_BUILDING:
            return {
                ...state,
                buildings: [...state.buildings, action.building]
            };
        case Actions.REMOVE_BUILDING:
            return {
                ...state,
                buildings: state.buildings.filter(building => building.id !== action.id)
            }
        default:
            return state
    }
}
