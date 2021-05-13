import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPost } from '../actions/PostAction'

class ButtonComponents extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.fetchPost()}>Click me</button>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPost: fetchPost}, dispatch)
}

export default connect(null,matchDispatchToProps)(ButtonComponents)