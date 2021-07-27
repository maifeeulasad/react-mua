import React from 'react'

import Signup from 'react-mua-signup'
import http from "../../../network/http";

class SignupComponent extends React.Component{

    render() {
        return(
            <Signup onLogin={(username,password)=>{
                //todo: make your own api call, this just an example
                http
                    .post(
                        "/auth/signup",
                        {
                            username,
                            password
                        })
                    .then((res)=>{
                        if(res.data["message"]===true){
                            window.location = "/login"
                        }else{
                            alert("Signup Failed")
                        }
                    })
            }}/>
        )
    }

}

export default SignupComponent;
