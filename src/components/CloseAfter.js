import React from "react";
import Modal from "react-portal-ayesha";
const node = document.getElementById("root");

class CloseAfter extends React.Component {

  render() {
    return (
      <div>
        <Modal
          node={node}
          size={"medium"}
          trigger={<button type="button">Open Modal</button>}
          closeAfter={2000}
        >
          This is Modal will close after 2 seconds.
        </Modal>
      </div>
    );
  }
}

export default CloseAfter;
