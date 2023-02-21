import React from 'react'

class ProgressBar extends React.Component {
    render() {
        const {percentage} = this.props
        const barStyle = {
            width: percentage + "%",
        }
        return (
             <div className="progress m-3">
<<<<<<< HEAD
                 <div className="progress-bar progress-bar-striped progress-bar-animated bg-info"
=======
                 <div className="progress-bar progress-bar-striped bg-info"
>>>>>>> 8a806475368f579654546c3033a270f6edcbc291
                     role="progressbar"
                     aria-valuenow={percentage}
                     aria-valuemin="0"
                     aria-valuemax="100"
                     aria-label="progressbar"
                     style={barStyle}>
                </div>
            </div>
        )
    }
}

ProgressBar.defaultProps = {
    percentage: 0
}

export default ProgressBar