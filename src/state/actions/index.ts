import { BlogActionTypes } from "../action-types";
import { MarkdownTypeDef } from "../type-defs";


interface FetchBlogsAction {
    type : BlogActionTypes.FETCH_BLOGS;
}

interface FetchBlogsSuccessAction {
    type: BlogActionTypes.FETCH_BLOGS_SUCCESS;
    payload: MarkdownTypeDef[];
}

interface FetchBlogsErrorAction {
    type: BlogActionTypes.FETCH_BLOGS_ERROR;
    payload: string;
}

export type BlogActions = 
 | FetchBlogsAction
 | FetchBlogsSuccessAction
 | FetchBlogsErrorAction