import React from 'react'

class ProgressBar extends React.Component {
    render() {
        const {percentage} = this.props
        const barStyle = {
            width: percentage + "%",
        }
        return (
             <div className="progress" style={{height: "20px"}}>
                 <div className="progress-bar bg-info"
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