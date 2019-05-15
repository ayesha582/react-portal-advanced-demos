import React from "react";

import { storiesOf } from "@storybook/react";
import Modal from "react-portal-ayesha";
import WithoutTrigger from "../src/components/WithoutTrigger";
import OpenCloseCB from "../src/components/OpenCloseCB";
import Size from "../src/components/Size";
import CloseOnEsc from "../src/components/CloseOnEsc";
import CloseOnOuterClick from "../src/components/CloseOnOuterClick";
import CloseAfter from "../src/components/CloseAfter";
import ChildComp from "../src/components/ChildComp";
import Props from "../src/components/Props";

const node = document.getElementById("root");

storiesOf("Props", module)
.add('documentation',()=>{
  return <Props/>
})

storiesOf("Portal Examples", module)
  .add("With Trigger", () => {
    return (
      <Modal
        node={node}
        trigger={<button type="button">Click to Open</button>}
        size={"medium"}
        closeable
      >
        This is basic Modal with trigger and text node!
      </Modal>
    );
  })
  .add("Without Trigger", () => {
    return <WithoutTrigger />;
  })
  .add("Open and Close Callbacks", () => {
    return <OpenCloseCB />;
  })
  .add("Size", () => {
    return <Size />;
  })
  .add("Close on Esc", () => {
    return <CloseOnEsc />;
  })
  .add("Close on outside click", () => {
    return <CloseOnOuterClick />;
  })
  .add("Close after interval", () => {
    return <CloseAfter />;
  })
  .add("Controlled Child Component", () => {
    return <ChildComp />;
  });
