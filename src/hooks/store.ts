/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'

export const useCustomDispatch = () => useDispatch<AppDispatch>()
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector
