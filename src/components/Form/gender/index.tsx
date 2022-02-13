import React from "react";
import { Select } from "antd";
import { FormGroup } from "../Designer/FormGroup";
import { CellProps } from "../schema";
import { GenderCellData } from "./schema";

const { Option } = Select;

interface GenderCellProps extends CellProps {
  data: GenderCellData;
}

export const GenderCell = ({
  data,
  layout,
  onChange,
}: GenderCellProps): JSX.Element => {
  return (
    <>
      <FormGroup
        required={!!data.required}
        warning={data.warning}
        layout={layout}
        warnable={data.warnable}
        label={
          data.labeled ? <label title={data.label}>{data.label}</label> : <></>
        }
        element={
          <Select
            placeholder={data.placeholder}
            disabled={data.disabled}
            style={{ width: "100%" }}
            onChange={(value) => onChange(value)}
          >
            {data.options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        }
      />
    </>
  );
};
