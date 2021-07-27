import React from 'react'

import Login from 'react-mua-login'
import http from "../../../network/http";

class LoginComponent extends React.Component{

    render() {
        return(
            <Login onLogin={(username,password)=>{
                //todo: make your own api call, this just an example
                http
                    .post(
                        "/auth/login",
                        {
                            username,
                            password
                        })
                    .then((res)=>{
                        //console.log(res.data);
                        localStorage.setItem("jwt",res.data["message"])
                    })
            }}/>
        )
    }

}

export default LoginComponent;

/*
For me, I had to call an API, with route to "xyz/auth/login", and post data like:
{
 "username":username,
 "password":password
}
And {username,password} does the same thing :wink:
And for response I was sending response like
{
   "message":"my-jwt-token"
}
 */
