import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineMinusCircle } from "react-icons/ai";
import { Button, Input } from "antd";
import { useVerticalDragDropMemberRef } from "../../../hook";

interface OptionConfigProps {
  index: number;
  label: string;
  value: string;
  move: (from: number, to: number) => void;
  onRemove: (index: number) => void;
  onChange: (index: number, data: string, value: string) => void;
}

export default function OptionConfig({
  index,
  label,
  value,
  move,
  onRemove,
  onChange,
}: OptionConfigProps): JSX.Element {
  const ref = useVerticalDragDropMemberRef(index, move);
  const [Flabel, setFlabel] = useState(label);
  return (
    <>
      <div ref={ref}>
        <AiOutlineMenu style={{ cursor: "move" }} />
        <b>Label:</b>
        <Input
          onChange={(event) => {
            setFlabel(event.target.value);
            onChange(index, event.target.value, new Date().toString());
          }}
          value={label}
          size={"small"}
          style={{
            width: "90px",
            margin: "0 4px",
          }}
        />
        <b>Value:</b>
        <Input
          onChange={(event) => {
            onChange(index, Flabel, event.target.value);
          }}
          value={value}
          size={"small"}
          style={{
            width: "80px",
            margin: "0 4px",
          }}
        />
        <Button
          type={"link"}
          onClick={() => {
            onRemove(index);
          }}
          style={{ padding: "0" }}
        >
          <AiOutlineMinusCircle />
        </Button>
      </div>
    </>
  );
}
