import {createAction} from "@reduxjs/toolkit"
import {actionTypes} from "../container"



export const ItemAction =  {
    fetchListRequest : createAction(actionTypes.ItemTypes.FETCH_ITEMS_REQUEST),
    fetchListSuccess : createAction(actionTypes.ItemTypes.FETCH_ITEMS_SUCCESS),
    fetchListFailure : createAction(actionTypes.ItemTypes.FETCH_ITEMS_FAILURE)
}