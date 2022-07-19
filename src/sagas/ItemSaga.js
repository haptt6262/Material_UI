import { takeLatest, put } from 'redux-saga/effects'
import { ItemAction } from '../actions'
import { actionTypes } from '../container'
import { itemApi } from '../api'

function* handleFetchListItems({ payload }) {
    try {
        const res = yield itemApi.fetchList()
        yield put(ItemAction.fetchListSuccess({
            list : res
        }))
    } catch (error) {
        yield put(ItemAction.fetchListFailure({
            message: error.message
        }))
    }
}

const itemSaga = [
    takeLatest(actionTypes.ItemTypes.FETCH_ITEMS_REQUEST, handleFetchListItems)
]

export default itemSaga;