import React from "react";
import Modal from "react-portal-advanced";
const node = document.getElementById("root");

class OpenCloseCB extends React.Component {
  handleOpen = () => {
    alert("portal opened!");
  };

  handleClose = () => {
    alert("portal closed!");
  };

  render() {
    return (
      <div>
        <Modal
          node={node}
          size={"medium"}
          trigger={<button type="button">Open Modal</button>}
          closeable
          onClose={this.handleClose}
          onOpen={this.handleOpen}
        >
          This is basic Modal without Open/Close Callbacks;
        </Modal>
      </div>
    );
  }
}

export default OpenCloseCB;
