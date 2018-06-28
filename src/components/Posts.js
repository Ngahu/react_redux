import React, { Component } from 'react';


class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts:[]
        }

    }

    componentWillMount(){
        console.log("componentWillMount")
    }


    componentDidMount(){
        console.log("component did mount")
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res =>res.json()) 
                .then(data =>  this.setState({
                    posts:data
                }))
                    
    }




    render() {

        const postItems = this.state.posts.map(postIem => (
            <div key={postIem.id}> 
                <h3>{postIem.title}</h3>
                <p>{postIem.body} </p>
                </div>
        ));
        return (
            <div>
                <h1> posts </h1>
                {postItems}
            </div>
        );
    }
}



export default Posts;