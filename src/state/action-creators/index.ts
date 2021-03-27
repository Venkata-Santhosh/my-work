import axios from "axios";
import { Dispatch } from "react"
import { BlogActionTypes } from "../action-types";
import { BlogActions } from "../actions"
// import fs from 'fs';
// import path from 


export const fetchBlogActionCreator = () => {
    return async( dispatch: Dispatch<BlogActions>) => {
        dispatch({
            type: BlogActionTypes.FETCH_BLOGS
        });


        
        const {data} = await axios.get('https://github.com/Venkata-Santhosh/my-blog/blob/master/posts/multiple-git-accounts.md')
      //  fs.readdirSync("posts");
       //const files = fs.readdirSync ("posts");
        //console.log(files);

        // try {

        //     const {data} = await axios.get('https://github.com/Venkata-Santhosh/my-blog/blob/master/posts/multiple-git-accounts.md');
        //     // const names = data.objects.map((result: any) => {
        //     //     return result.package.name
        //     // })


        //     dispatch({
        //         type: BlogActionTypes.FETCH_BLOGS_SUCCESS,
        //         payload:data
        //     })

        // } catch(err) {
        //     dispatch({
        //         type: BlogActionTypes.FETCH_BLOGS_ERROR,
        //         payload: err.message
        //     })
        // }

        dispatch({
            type: BlogActionTypes.FETCH_BLOGS_SUCCESS,
            payload: [
                {title:'my blog', content:data},
                {title:'my blog 2', content:'This is my blog content 2'}
            ]
         });
    }
    
};