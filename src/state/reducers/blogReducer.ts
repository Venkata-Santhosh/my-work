import {BlogActionTypes} from '../action-types';
import { BlogActions } from '../actions';
import { MarkdownTypeDef } from '../type-defs';

interface BlogState {
    loading: boolean;
    error: string | null;
    markdowns: MarkdownTypeDef[] | null;
}

const initialState = {
    loading: true,
    error: null,
    markdowns : null
};

export const blogReducer = (state: BlogState = initialState, action: BlogActions):BlogState => {

    switch(action.type) {
        case BlogActionTypes.FETCH_BLOGS: 
            return {
                loading: true,
                error: null,
                markdowns:[]
            };
        case BlogActionTypes.FETCH_BLOGS_SUCCESS:
            return {
                loading: false,
                error: null,
                markdowns: action.payload
            };
        case BlogActionTypes.FETCH_BLOGS_ERROR:
            return {
                loading: false,
                error: action.payload,
                markdowns: []
            };
        default:
            return state;
    }
};

