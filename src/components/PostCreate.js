import React, { Component } from 'react';


class PostCreate extends Component {
    constructor(props) {
        super(props);

    }

  

    componentDidMount() {

    }

    

    render() {
        return (
            <div>
                <h1>add a post </h1>
                <form>
                    <div>
                        <label>Title: </label> <br/>
                        <input type="test" name="title" />

                    </div>
                    <br/>

                    <div>
                        <label>Body: </label> <br/>
                        <textarea name="body"/>
                        
                    </div>
                    <br/>
                    <button type="submit">Submit </button>

                    </form>

            </div>
        );
    }
}



export default PostCreate;