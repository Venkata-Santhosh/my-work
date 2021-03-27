import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeBlock from "../components/CodeBlock";
import gfm from 'remark-gfm'


const BlogContainer:React.FC = ()=> {

    const { fetchBlogActionCreator } = useActions(); 
    
    useEffect(()=> {
        fetchBlogActionCreator();
    },[]);

    const {loading, error, markdowns} = useTypedSelector((state)=> state.blogs);
          
    return (
        <div>
            <h1>My Blogs</h1>
            {loading && <h3>Loading ... </h3>}
            {error && <h3>Error while retrieving blog</h3>}
            <ul>
                {
                    !error && !loading && markdowns && markdowns.map(markdown => <li key={markdown.title}><ReactMarkdown plugins={[gfm]} source={markdown.content} renderers={{code:CodeBlock}}/></li>)
                }
            </ul>
        </div>
    );
}

export default BlogContainer;