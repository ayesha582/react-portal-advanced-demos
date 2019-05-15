import React from "react";
import Modal from "react-portal-advanced";
const node = document.getElementById("root");

class WithoutTrigger extends React.Component {
  state = {
    openModal: false
  };

  handleOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () =>{
      this.setState({openModal: false});
  }

  render() {
    const { openModal } = this.state;
    return (
      <div>
        <button onClick={this.handleOpen}>Open Modal</button>
        {openModal && (
          <Modal node={node} size={"medium"} defaultOpen closeable onClose={this.handleClose}>
            This is basic Modal without trigger managed by component state.
          </Modal>
        )}
      </div>
    );
  }
}

export default WithoutTrigger;
