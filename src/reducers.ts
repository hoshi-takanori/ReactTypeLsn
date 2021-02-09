'use strict';
import { ActionType } from './actions';


// action を ActionType 型としていますが、union 型の性質によって、case 'UPDATE_ID': や case 'UPDATE_NAME': の中では payload の型としてそれぞれ適切なものが選択され、action.payload.id や action.payload.name に安全にアクセスできる

// connect (mapStateToProps や mapDispatchToProps) のことは忘れて、Hooks 関数 (useSelector および useDispatch) を使うのがお勧め

// State の型。redux ではアプリケーションが持つ状態を一元管理するが、そのすべての状態をまとめた型 ApplicationState が欲しいため、まず reducers.ts で部分状態である id と name の型をそれぞれ IdState, NameState と定義して、createStores.ts でそれらをまとめて ApplicationState を定義

export interface ItemState {
    id: string,
    name: string,
    checkName: boolean,
}

const initialState = {
    id: '',
    name: '',
    checkName: false,
};

function checkName(state: ItemState): boolean {
    // バリデーションはここで定義
    return state.name.length >=3;

    // id と name の両方が 3 文字以上、の場合
    //return state.id.length >= 3 && state.name.length >= 3;
}

export function itemReducer(state = initialState, action: ActionType) {
    console.log(action);
    let newState;
    switch (action.type) {
        case 'UPDATE_ID':
            newState = { ...state, id: action.payload.id };
            return { ...newState, checkName: checkName(newState) };
        case 'UPDATE_NAME':
            newState = { ...state, name: action.payload.name };
            return { ...newState, checkName: checkName(newState) };
        case 'SAVE_ITEM':
            // SAVE ボタンの処理をここに書くこともできる。
            console.log("SAVE_ID: ", state.id);
            console.log("SAVE_NAME: ", state.name);
            return state;
        default:
            return state;
    }
};
