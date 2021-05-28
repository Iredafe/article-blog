import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';

const App=()=>{
    return (
    <div className="ui container comments">
    <CommentDetail author="Osas" time="Today at 6:00PM"/>
    <CommentDetail author="Jane" time="Today at 2:00PM"/>
    <CommentDetail author="Sam" time="Today at 10:00AM"/>
    </div>)
}

ReactDOM.render(<App/>, document.querySelector('#root'));