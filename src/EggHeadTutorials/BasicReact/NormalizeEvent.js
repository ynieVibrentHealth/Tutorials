import React from 'react'

class NormalizeEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentEvent:'---',
            update: this.update.bind(this)
        }
    }

    update(event) {
        this.setState = {
            currentEvent: event.type
        }
    }

    render() {
        return (
            <div>
                <textarea
                    onKeyPress={
                        this.update
                    }
                    onCopy={
                        this.update
                    }
                    onPaste={
                        this.update
                    }
                    cols="30" rows="10"></textarea>
            </div>
        )
    }
}

export default NormalizeEvent