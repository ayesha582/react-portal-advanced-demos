import React from "react";
import Modal from "react-portal-advanced";
const node = document.getElementById("root");

class CloseOnOuterClick extends React.Component {

  render() {
    return (
      <div>
        <Modal
          node={node}
          size={"medium"}
          trigger={<button type="button">Open Modal</button>}
          closeable
          closeOnOuterClick
        >
          This is Modal will close on outside click.
        </Modal>
      </div>
    );
  }
}

export default CloseOnOuterClick;
