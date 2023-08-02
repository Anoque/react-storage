import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { RootState } from "./store"
import { AnyAction, Store } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
