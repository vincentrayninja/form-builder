import React from "react";
import { Pool } from "./Pool";
import { CustomCell } from "../index";
import { LanedCellData } from "../../../schema";

interface SectionCellProps {
  data: LanedCellData;
  direction?: "horizontal" | "vertical";
  customCells?: CustomCell[];
}

export const SectionCell = ({
  data,
  direction,
  customCells,
}: SectionCellProps): JSX.Element => {
  return (
    <Pool cellData={data} direction={direction} customCells={customCells} />
  );
};
