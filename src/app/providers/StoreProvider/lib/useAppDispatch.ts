import { useDispatch } from 'react-redux'
import { type AppDispatch } from '../config/store'

export const useAppDispatch = (): ReturnType<typeof useDispatch> => useDispatch<AppDispatch>()
