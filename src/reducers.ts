'use strict';
import { ActionType } from './actions';

export type IdState = string;

const initialStateId = ""
export function id(state = initialStateId, action: ActionType) {
    console.log(action);
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'UPDATE_ID':
            newState = action.payload.id;
            break;
        default:
            return state;
    }
    console.log(newState)
    return newState;
};

export type NameState = string;

const initialStateName = ""
export function name(state = initialStateName, action: ActionType) {
    console.log(action);
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'UPDATE_NAME':
            newState = action.payload.name;
            break;
        default:
            return state;
    }
    return newState;
};