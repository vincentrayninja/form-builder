import React from "react";
import { Input, Upload, Button } from "antd";
import { AiOutlineToTop } from "react-icons/ai";

const CommentControl = ({ controls }: any) => {
  console.log("controls", controls);

  return (
    <>
      {controls.attachment ? (
        <Upload>
          <Button icon={<AiOutlineToTop />} size="small">
            &nbsp;Click to Upload
          </Button>
        </Upload>
      ) : (
        <Input
          placeholder={`Drop your ${
            controls.comment ? "comment" : "action"
          }...`}
        />
      )}
    </>
  );
};

export default React.memo(CommentControl);
