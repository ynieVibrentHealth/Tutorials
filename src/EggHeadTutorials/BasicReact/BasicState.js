import React from 'react'

class BasicState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: 'this is the state text',
            cat:0
        }
    }

    update(inputText) {
        this.setState({
            txt:inputText.target.value
        })
    }

    render() {
        return (
            <div>
                <Widget update={this.update.bind(this)}></Widget>
                <div>
                    <h2>{this.state.txt} {this.state.cat}</h2>
                </div>
            </div>
        )
    }
}

const Widget = (props) =>
    <input type="text" onChange={props.update}/>

export default BasicState