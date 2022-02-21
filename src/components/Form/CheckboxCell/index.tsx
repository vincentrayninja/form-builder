import React from "react";
import { CellProps } from "../schema";
import { FormGroup } from "../Designer/FormGroup";
import { Checkbox } from "antd";
import CellControls from "../CellControls";

export default function CheckboxCell({
  data,
  layout,
  onChange,
}: CellProps): JSX.Element {
  return (
    <>
      <FormGroup
        layout={layout}
        required={!!data.required}
        warnable={data.warnable}
        label={<label>{data.label}</label>}
        element={
          <>
            <Checkbox.Group
              options={data.options}
              onChange={(checkedValues) => onChange(checkedValues)}
            />
            {data.controls ? <CellControls data={data} /> : ""}
          </>
        }
      />
    </>
  );
}
