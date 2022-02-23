import React, { forwardRef, useImperativeHandle, useReducer } from "react";
import { Cell, CustomCell } from "./Designer/Cell";
import { forEach, reducer } from "./Designer/util";
import { CellData, ConstrainViolation } from "./schema";
import {
  getValues,
  InteractContext,
  validateFormat,
  validateRequired,
} from "./util";
import { useUpdateEffect } from "react-use";
import useInteractions from "./hooks/interactions";
import { InputCellData } from "./InputCell/schema";

export interface InstanceProps {
  data: CellData;
  customCells?: CustomCell[];
  register?: any;
  control?: any;
}

/**
 * Instance context provides the same utilities with designer context,
 * but also allows user's input
 */
export const InstanceContext = React.createContext<any>(null);
const Form = forwardRef(
  ({ data, customCells, register, control }: InstanceProps, ref: any) => {
    console.log("sdfsdf1111", control);
    const [innerData, dispatch] = useReducer(reducer, data);
    useImperativeHandle(ref, () => ({
      getData: function () {
        return getValues(innerData);
      },
      validate: function (): ConstrainViolation[] {
        dispatch({
          type: "VALIDATE",
        });
        const constraintViolations: ConstrainViolation[] = [];
        forEach(innerData, function (cellData) {
          if (!validateRequired(cellData)) {
            constraintViolations.push({
              id: cellData.id,
              message: `${cellData.label} Can not be empty`,
              value: cellData.value,
              description: "required",
            });
          }

          if (!validateFormat(cellData as InputCellData)) {
            constraintViolations.push({
              id: cellData.id,
              message: `${cellData.label} Incorrect Data Format`,
              value: cellData.value,
              description: "format",
            });
          }
        });
        return constraintViolations;
      },
    }));
    const interactions = useInteractions(dispatch, innerData);
    useUpdateEffect(() => {
      dispatch({ type: "INIT", data });
    }, [data]);
    return (
      <>
        <InstanceContext.Provider value={dispatch}>
          <InteractContext.Provider value={interactions}>
            <Cell
              register={register}
              control={control}
              ref={ref}
              cellData={innerData}
              className={"preview"}
              customCells={customCells}
            />
          </InteractContext.Provider>
        </InstanceContext.Provider>
        <input type="submit" value="submit" />
      </>
    );
  }
);

export default Form;
