import store from '../store.js';
import * as Actions from '../model/state/action.js';

class BuildingController {
    async storeBuilding(building) {
        await store.dispatch(Actions.storeBuilding(building));
    };
    // async editBuilding(building) {
    //     await store.dispatch(Actions.editBuilding(building));
    // };
    async removeBuilding(id) {
        await store.dispatch(Actions.removeBuilding(id));
    };
};

export default new BuildingController();
