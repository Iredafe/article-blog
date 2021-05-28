import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';

const App=()=>{
    return (
    <div className="ui container comments">
    <CommentDetail author="Osas"/>
    <CommentDetail author="Jane"/>
    <CommentDetail author="Sam"/>
    </div>)
}

ReactDOM.render(<App/>, document.querySelector('#root'));