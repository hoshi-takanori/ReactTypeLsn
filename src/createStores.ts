import { createStore as reduxCreateStore, combineReducers } from "redux";
import { IdState, NameState, id, name } from "./reducers";

interface ApplicationState {
    id: IdState,
    name: NameState
}

export function getIdState(state: ApplicationState): IdState {
    return state.id;
}

export function getNameState(state: ApplicationState): NameState {
    return state.name;
}

export default function createStore() {
    const store = reduxCreateStore(
        combineReducers({
            id,
            name
        })
    );
    return store;
}

