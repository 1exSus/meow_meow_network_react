import React from "react";



class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
                editMode: true,
            }
        )
    }
    deactivateEditMode = () => {

        this.setState({
                editMode: false,
            }
        )
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) =>{
        this.setState({status:   e.currentTarget.value})

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
           this.setState({
               status: this.props.status
           })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} value={this.state.status}></input>
                        : <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
                }
            </div>
        )
    }
}

export default ProfileStatus

