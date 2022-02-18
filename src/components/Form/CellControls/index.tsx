import React, { useState, useMemo } from "react";
import { Button, Row, Col } from "antd";
import CommentControl from "./CommentControl";

const CellControls = ({ data }: any) => {
  // console.log("CellControls", data);
  const { id } = data;
  let controls = { comment: false, action: false, attachment: false };
  const [control, setControl] = useState(controls);
  const controlView = (
    comment: boolean,
    action: boolean,
    attachment: boolean
  ) => {
    setControl({ comment, action, attachment });
  };
  const controlCheck = useMemo(() => controlView, [control]);

  return (
    <Row align="top" justify="center">
      <Col span={10}>
        <Button
          type="primary"
          size="small"
          onClick={() => controlCheck(true, false, false)}
        >
          Comment
        </Button>
        &nbsp;
        <Button
          type="primary"
          size="small"
          onClick={() => controlCheck(false, true, false)}
        >
          Action
        </Button>
        &nbsp;
        <Button
          type="primary"
          size="small"
          onClick={() => controlCheck(false, false, true)}
        >
          Attachment
        </Button>
      </Col>
      <Col span={14}>
        {control.comment || control.action || control.attachment ? (
          <CommentControl controls={control} id={id} />
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
};

export default CellControls;
