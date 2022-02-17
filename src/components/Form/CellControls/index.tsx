import React, { useState } from "react";
import { Button, Row, Col } from "antd";
import { AiOutlineMessage } from "react-icons/ai";
import CommentControl from "./CommentControl";

const CellControls = () => {
  let controls = { comment: false, action: false, attachment: false };
  const [control, setControl] = useState(controls);
  const controlView = (
    comment: boolean,
    action: boolean,
    attachment: boolean
  ) => {
    setControl({ comment, action, attachment });
  };
  return (
    <Row align="top" justify="center">
      <Col span={1}>
        <Button
          type="primary"
          shape="circle"
          size="small"
          onClick={() => controlView(true, false, false)}
        >
          <AiOutlineMessage />
        </Button>
      </Col>
      <Col span={21}>{control.comment === true ? <CommentControl /> : ""}</Col>
    </Row>
  );
};

export default CellControls;
