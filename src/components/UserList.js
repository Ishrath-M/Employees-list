import React, { Component } from 'react'
import PostData from '../data/data.json'

class UserList extends Component { 
    render() {
        return (
            <div>
                <h1>Dashboard : </h1>
                {PostData.user.map((post)=>{
                    return <React.Fragment>
                        <div>Name is : {post.name}</div>
                        <div>Age is : {post.age}</div>
                        <div>Gender is : {post.gender}</div>
                        <div>Email is : {post.email}</div>
                        <div>Phone number is : {post.phoneNo}</div><br/>
                    </React.Fragment>
                })}
            </div>
        )
    }
}

export default UserList
