import React from 'react';
import './display.css';
class Display extends React.Component {

    array = [1, 4, 5, 2, 324, 335];
    render() {
        let displayData = this.array.map(each => {
            return (
                <div className="Display">
                    <div>{each}</div>

                </div>
            );
        });
        return (
            <div>
                {displayData}
            </div>
        )
    };
}

export default Display;
