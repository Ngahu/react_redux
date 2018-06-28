import React, { Component } from 'react';


class PostCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:''
        };
        this.onChangeInput = this.onChangeInput.bind(this)

    }

    onChangeInput(e){
       
        this.setState({
            [e.target.name]:e.target.value
        });
    }


    

    render() {
        return (
            <div>
                <h1>add a post </h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label> <br/>
                        <input type="test" name="title" 
                            onChange={this.onChangeInput}
                            value={this.state.title} />

                    </div>
                    <br/>

                    <div>
                        <label>Body: </label> <br/>
                        <textarea name="body"
                            onChange={this.onChangeInput}
                            value={this.state.body}/>
                        
                    </div>
                    <br/>
                    <button type="submit">Submit </button>

                    </form>

            </div>
        );
    }
}



export default PostCreate;