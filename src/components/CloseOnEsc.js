import React from "react";
import Modal from "react-portal-ayesha";
const node = document.getElementById("root");

class CloseOnEsc extends React.Component {

  render() {
    return (
      <div>
        <Modal
          node={node}
          size={"medium"}
          trigger={<button type="button">Open Modal</button>}
          closeable
          closeOnEsc
        >
          This is Modal will close on esc press;
        </Modal>
      </div>
    );
  }
}

export default CloseOnEsc;
