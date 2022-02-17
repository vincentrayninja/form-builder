import React, { useState } from "react";
import { Button, Row, Col } from "antd";
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
      <Col span={10}>
        <Button
          type="primary"
          size="small"
          onClick={() => controlView(true, false, false)}
        >
          Comment
        </Button>
        &nbsp;
        <Button
          type="primary"
          size="small"
          onClick={() => controlView(false, true, false)}
        >
          Action
        </Button>
        &nbsp;
        <Button
          type="primary"
          size="small"
          onClick={() => controlView(false, false, true)}
        >
          Attachment
        </Button>
      </Col>
      <Col span={14}>
        {control.comment || control.action || control.attachment ? (
          <CommentControl controls={control} />
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
};

export default CellControls;
