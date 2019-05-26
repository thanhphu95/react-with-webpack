import { ADD_AQUARIUM } from "../actions/AquariumConstant";


const initialState = {
    aquariumList: [
    ]
}

export default function aquarium(state = initialState, action) {
    switch(action.type) {
        case ADD_AQUARIUM: {
            const { data } = action;
            const aquariumList = [];
            console.log('--------', action.data);
            aquariumList.push(data);
            if(data)
            return {
                ...state,
                aquariumList,
            }
        }
        default:
            return {
                ...state,
            }
    }
}