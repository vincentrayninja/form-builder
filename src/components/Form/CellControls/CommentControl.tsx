import React, { useContext } from "react";
import { Input, Upload, Button } from "antd";
import { AiOutlineToTop } from "react-icons/ai";
import { Interactions } from "../hooks/interactions";
import { InteractContext } from "../util";
const CommentControl = ({ controls, id }: any) => {
  const interactions = useContext<Interactions>(InteractContext);

  const changeHandler = React.useCallback(
    (e: any) => {
      interactions.control(
        id,
        controls.comment ? "comment" : "action",
        e.target.value
      );
      // console.log("change handler", e.target.value, interactions);
    },
    [controls]
  );
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
          onChange={changeHandler}
        />
      )}
    </>
  );
};

export default React.memo(CommentControl);
