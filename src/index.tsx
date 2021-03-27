import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import BlogContainer from './containers/BlogContainer';
import {store} from './state';

const BlogApp = () => {
    return (
        <Provider store={store}>
            <BlogContainer/>
        </Provider>
    );
};

ReactDom.render(<BlogApp/>, document.querySelector("#root"));
