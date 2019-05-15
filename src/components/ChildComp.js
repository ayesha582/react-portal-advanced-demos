import React from "react";
import Modal from "react-portal-advanced";
const node = document.getElementById("root");

const Child = ({close,...rest}) =>{
    return(
        <div>
            <button type="button" onClick={close}>Close</button>
            <div>All other props</div>
            <ul>
            {
                Object.keys(rest).map(k=><li>{k}:-{typeof rest[k]}</li>)
            }
            </ul>
        </div>
    )
}

class Parent extends React.Component {

  render() {
    return (
      <div>
        <Modal
          node={node}
          size={"medium"}
          trigger={<button type="button">Open Modal</button>}
          closeable
        >
         <Child/>
        </Modal>
      </div>
    );
  }
}

export default Parent;
