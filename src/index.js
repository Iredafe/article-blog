import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import faker from 'faker'
import ApprovalCard from './components/ApprovalCard';

const App=()=>{
    return (
    <div className="ui container comments">
    <ApprovalCard>
    <CommentDetail 
    author="Osas" 
    time="Today at 6:00PM" 
    comment = "So inspirational" 
    img={faker.image.avatar()}
    />
    </ApprovalCard>
    
    <ApprovalCard>
    <CommentDetail author="Jane" 
    time="Yesterday at 2:00PM" 
    comment = "Lovely" 
    img={faker.image.avatar()}/>
    </ApprovalCard>

    <ApprovalCard>
    <CommentDetail 
    author="Sam" 
    time="Today at 10:00AM" 
    comment = "Nice Blog Post" 
    img={faker.image.avatar()}/>
    </ApprovalCard>

    </div>)
}

ReactDOM.render(<App/>, document.querySelector('#root'));