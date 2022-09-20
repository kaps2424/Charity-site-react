import React, { Component } from "react";
import axios from 'axios';

class Home extends Component {
    state = {
        posts: []
    }
    //axios gets the data from the url 
    //and stores it in the posts array in the state
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(10, 20)
                })
            })
    }
    deletePost = (id) => {
        // todoList runs through the array of todos on list
        const postList = this.state.posts.filter(posto => {
            //finds the selected todo and deletes it
            return posto.id !== id
        });
        this.setState({
            posts: postList
        })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content" onClick={() => { this.deletePost(post.id) }}>
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }

}

export default Home;