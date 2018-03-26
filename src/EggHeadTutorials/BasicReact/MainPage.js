import React from 'react'
import BasicProp from './PassingProps'

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <BasicProp cat={1} txt="I have a couple of cats"></BasicProp>
            </div>
        )
    }
}

export default MainPage