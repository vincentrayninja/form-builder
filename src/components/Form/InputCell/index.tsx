import React, { useCallback, useMemo } from "react";
import { Input } from "antd";
import { CellProps } from "../schema";
import { FormGroup } from "../Designer/FormGroup";
import CellControls from "../CellControls";

const InputCell = ({ data, layout, onChange }: CellProps): JSX.Element => {
  const label = useMemo(
    () =>
      data.labeled ? <label title={data.label}>{data.label}</label> : <></>,
    [data.label, data.labeled]
  );

  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  const element = useMemo(
    () => (
      <>
        <Input
          disabled={data.disabled}
          value={data.value}
          placeholder={data.placeholder}
          onChange={handleChange}
        />
        {data.controls ? <CellControls data={data} /> : ""}
      </>
    ),
    [data.disabled, data.placeholder, data.value, data.controls, handleChange]
  );

  return (
    <>
      <FormGroup
        required={typeof data.required === "function" ? true : data.required}
        warning={data.warning}
        layout={layout}
        warnable={data.warnable}
        label={label}
        element={element}
      />
    </>
  );
};
export default InputCell;
