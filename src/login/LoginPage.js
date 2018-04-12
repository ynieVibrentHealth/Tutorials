import React from 'react'
import UserManager from '../UserManager/UserManager'

const LoginTextField = ({labelText, onEdit}) => (
    <label>
        {labelText}
        <input type={"text"} onChange={(text) => {
            onEdit(text)
        }}/>
    </label>
);

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "userName":"",
            "password":""
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
                    <input type="submit" value={"Submit"}/>
                </form>
            </div>
        )
    }
}