import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostList extends Component {

    createListItems(){
        return this.props.allPost.map((post)=>{
            return(
                <li key={post.id}>{post.title} {post.body}</li>
            )
        })
    }

    render() {
        if(!this.props.allPost){
            console.log("none")
            return <h1>Click Button First</h1>
            
        }
        return(    
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        allPost:state.allPost
    }
}

export default connect (mapStateToProps)(PostList);
