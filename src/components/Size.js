import React from "react";
import Modal from "react-portal-advanced";
const node = document.getElementById("root");

class Size extends React.Component {
  render() {
    return (
      <div>
        <Modal
          node={node}
          size={"large"}
          trigger={<button type="button">Open Large Modal</button>}
          closeable
        >
          This is large Modal.
        </Modal>
        <Modal
          node={node}
          size={"medium"}
          trigger={<button type="button">Open Medium Modal</button>}
          closeable
        >
          This is medium Modal.
        </Modal>
        <Modal
          node={node}
          size={"tiny"}
          trigger={<button type="button">Open Tiny Modal</button>}
          closeable
        >
          This is tiny Modal.
        </Modal>
      </div>
    );
  }
}

export default Size;
