import React, { forwardRef, useMemo } from "react";
import { Input } from "antd";
import { FormGroup } from "./Designer/FormGroup";
import { CellProps } from "./schema";
import CellControls from "./CellControls";

const { TextArea } = Input;

export const TextAreaCell = forwardRef(
  ({ data, layout, onChange }: CellProps, ref: any) => {
    const innerData = { ...data };
    const element = useMemo(
      () => (
        <>
          <TextArea
            rows={4}
            value={innerData.value}
            placeholder={innerData.placeholder}
            disabled={innerData.disabled}
            onChange={(event) => onChange(event.target.value)}
          />
          {innerData.controls ? <CellControls data={innerData} /> : ""}
        </>
      ),
      [innerData.disabled, innerData.placeholder, innerData.value, onChange]
    );
    return (
      <>
        <FormGroup
          ref={ref}
          required={!!innerData.required}
          warning={innerData.warning}
          layout={layout}
          warnable={innerData.warnable}
          label={
            innerData.labeled ? (
              <label title={innerData.label}>{innerData.label}</label>
            ) : (
              <></>
            )
          }
          element={element}
        />
      </>
    );
  }
);
