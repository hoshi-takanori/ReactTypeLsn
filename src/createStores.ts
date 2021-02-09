import { createStore as reduxCreateStore, combineReducers } from "redux";
import { ItemState, itemReducer } from "./reducers";

// State の型。redux ではアプリケーションが持つ状態を一元管理するが、そのすべての状態をまとめた型 ApplicationState が欲しいため、まず reducers.ts で部分状態である id と name の型をそれぞれ IdState, NameState と定義して、createStores.ts でそれらをまとめて ApplicationState を定義

interface ApplicationState {
    item: ItemState,
}

export function getIdState(state: ApplicationState): string {
    return state.item.id;
}

export function getNameState(state: ApplicationState): string {
    return state.item.name;
}

export function getCheckName(state: ApplicationState): boolean {
    return state.item.checkName;
}

export default function createStore() {
    const store = reduxCreateStore(
        combineReducers({
            item: itemReducer
        })
    );
    return store;
}

