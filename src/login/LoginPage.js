import React from 'react'
import {
    withRouter
} from "react-router-dom";
import UserManager from '../UserManager/UserManager'

const Home = () => (
    <h1>
        Home
    </h1>
);

const LoginTextField = ({labelText, onEdit}) => (
    <label>{"\n"}
        {labelText}
        <input type={"text"} onChange={(text) => {
            onEdit(text)
        }}/>
    </label>
);

 const ErrorField = ({errorText}) => (
 <label style={{
      color:'red'
  }}>
 {errorText}
 </label>
 );

const SubmitButton = withRouter(({ history, loginAction }) => (
    <button
        type='button'
        onClick={() => {
            loginAction(history);
        }}
    >
        Login
    </button>
));

export default class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            "userName":"",
            "password":"",
            "errorMessage":""
        }
    }

    updatePassword(control) {
        this.setState({
            password:control.target.value
        });
    }

    updateUserName(control) {
        this.setState({
            userName:control.target.value
        });
    }

    callLogin(history) {
        UserManager.loadUser(this.state.userName, this.state.password, ((response)=> {
            if (response.error != null) {
                this.setState({
                    errorMessage:response.error
                })
            } else if (response.json != null) {
                console.log("token: "+response.json.token);
                history.push('/getTimes')
            }
        }));
    }

    render() {
        return (
            <div>
                <form action="">
                    <LoginTextField labelText={"Email"} onEdit ={(control)=> {
                        this.updateUserName(control)
                    }}
                    />
                    <LoginTextField labelText={"Password"} onEdit={(control)=> {
                        this.updatePassword(control)
                    }}/>
                    <SubmitButton loginAction={(history) => {
                        this.callLogin(history)
                    }}/>

                </form>
                <ErrorField errorText={this.state.errorMessage}/>
            </div>
        )
    }
}