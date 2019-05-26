const initialState = {
    fishName: 'Ranchu',
    fishType: 'Gold Fish',
};

export default function fish(state = initialState, action) {
    switch(action.type) {
        case "UPDATE_GOLDFISH": {
            const lifeSpan = 10;
            return {
                ...state,
                lifeSpan,
            };
        }
        default:
        return state;
    }
}