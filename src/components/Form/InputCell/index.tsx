import React, { useCallback, useMemo } from "react";
import { Input } from "antd";
import { CellProps } from "../schema";
import { FormGroup } from "../Designer/FormGroup";
import CellControls from "../CellControls";
import { Controller, useForm } from "react-hook-form";

const InputCell = ({
  data,
  layout,
  onChange,
  control,
}: CellProps): JSX.Element => {
  console.log("sdfsdzf", control);
  // const { control } = useForm();
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
  // console.log("data.id", typeof data);
  const element = useMemo(
    () => (
      <>
        <Controller
          name={`${data.id}` as any}
          defaultValue={data.value}
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              disabled={data.disabled}
              value={data.value}
              placeholder={data.placeholder}
              onChange={handleChange}
            />
          )}
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
