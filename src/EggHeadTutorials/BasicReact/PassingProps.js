import React from 'react'
import PropTypes from 'prop-types'

class BasicProp extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.txt} with {this.props.cat}</h1>
            </div>
        )
    }
}

BasicProp.propTypes = {
    txt:PropTypes.string,
    cat:PropTypes.number
};

BasicProp.defaultProps = {
    txt:"This is the default text"
};

export default BasicProp