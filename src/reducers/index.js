import { combineReducers } from 'redux'
import fish from './fish';
import aquarium from './aquarium';
const appReducers = combineReducers({
    fish,
    aquarium
});

export default appReducers;