import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import itemReducer from "./reducers";

// State の型。redux ではアプリケーションが持つ状態を一元管理するが、そのすべての状態をまとめた型 ApplicationState が欲しいため、まず reducers.ts で部分状態である id と name の型をそれぞれ IdState, NameState と定義して、createStores.ts でそれらをまとめて ApplicationState を定義

const store = configureStore({
    reducer: {
        item: itemReducer,
    }
});

type ApplicationState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<ApplicationState> = rawUseSelector;

export default store;
