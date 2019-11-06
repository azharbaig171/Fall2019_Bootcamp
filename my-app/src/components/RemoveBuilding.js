import React from 'react';

class RemoveBuilding extends React.Component {
    render(){ 
        const id = this.props.id
        const removeListing = this.props.removeListing
        return(
            <div>
                <button onClick={() => removeListing(id)}>
                    Remove Building
                </button>
            </div>
        )
    }

}
export default RemoveBuilding