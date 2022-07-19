import { useDispatch, useSelector } from "react-redux"
import { ItemAction } from '../actions'

export const useItem = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.itemCollection.list)
    const isFetching = useSelector(state => state.itemCollection.isFetching)
    const isError = useSelector(state => state.itemCollection.isError)
    const message = useSelector(state => state.itemCollection.message)

    const handleFetchList = () => dispatch(ItemAction.fetchListRequest())


    return {
        list,
        isFetching,
        isError,
        message,
        handleFetchList
    }
}