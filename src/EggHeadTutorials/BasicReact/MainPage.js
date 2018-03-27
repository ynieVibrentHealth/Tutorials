import React from 'react'
import BasicProp from './PassingProps'
import BasicState from './BasicState'

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <BasicProp cat={1} txt="I have a couple of cats"></BasicProp>
                <BasicState></BasicState>
            </div>
        )
    }
}

export default MainPage