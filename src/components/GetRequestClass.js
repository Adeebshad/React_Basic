import React,{ Component } from "react"
import axios from 'axios'

class GetRequestClass extends Component{
    constructor(){
        super()
        this.state = {
            post : [],
            errorMsg: []
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response.data)
            this.setState({post:response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({errorMsg:'Error in retriving msg'})
        })
    }

    render(){
        const {post, errorMsg} = this.state
        return(
            <div>
                List of posts
                {
                    post.length ? 
                    post.map(post=><div key ={post.id}>{post.title}</div>) :
                    null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default GetRequestClass