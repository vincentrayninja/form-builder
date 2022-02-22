import React, { useCallback, useContext, useState } from "react";
import { LaneData, LanedCellData } from "../../../schema";
import { Pool } from "../GridCell/Pool";
import { CustomCell } from "../index";
import styled from "styled-components";
import { DesignerContext } from "../../index";
import update from "immutability-helper";
import { InstanceContext } from "../../../index";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
interface PageCellProps {
  data: LanedCellData;
  customCells?: CustomCell[];
}

const Tab = styled("div")`
  /* display: inline-block; */
  padding: 5px 10px;
  font-weight: bold;
  min-width: 40px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #bdbcbc;
`;
const ActiveTab = styled(Tab)`
  /* border-bottom: 2px solid darkgreen; */
  background-color: #00c3ff97;
  color: white;
`;
const Tabs = styled("div")`
  /* border-bottom: 1px solid #d3d3d3; */
  display: flex;
  justify-content: center;
`;

export const PageCell = ({ data, customCells }: PageCellProps): JSX.Element => {
  const designerDispatch = useContext(DesignerContext);
  const instanceDispatch = useContext(InstanceContext);
  const isDesigner = instanceDispatch === null;
  const dispatch = !isDesigner ? instanceDispatch : designerDispatch;
  const [tabIndex, setTabIndex] = useState<number>(
    data.lanes.findIndex((item) => item.span === 24)
  );
  const handleSwitch = useCallback(
    (index) => {
      setTabIndex(index);
      dispatch({
        type: "UPDATE",
        data: update(data, {
          lanes: {
            $apply: (x: LaneData[] | undefined): LaneData[] =>
              (x || []).map((y) => ({
                ...y,
                span: data.lanes?.indexOf(y) === index ? 24 : 0,
              })),
          },
        }),
      });
    },
    [data, dispatch]
  );

  return (
    <>
      <Tabs>
        {data.lanes?.map((lane, index) => {
          if (index === tabIndex) {
            return (
              <>
                {tabIndex > 0 ? (
                  <Tab key={index} onClick={() => handleSwitch(tabIndex - 1)}>
                    <AiOutlineDoubleLeft />
                  </Tab>
                ) : (
                  <></>
                )}
                <ActiveTab>{index + 1}</ActiveTab>
                {data.lanes?.length > tabIndex + 1 ? (
                  <Tab key={index} onClick={() => handleSwitch(tabIndex + 1)}>
                    <AiOutlineDoubleRight />
                  </Tab>
                ) : (
                  <></>
                )}
              </>
            );
          }
        })}
      </Tabs>

      <Pool cellData={data} customCells={customCells} />
      <TabComponent
        data={data}
        tabIndex={tabIndex}
        handleSwitch={handleSwitch}
      />
    </>
  );
};

function TabComponent({ data, tabIndex, handleSwitch }: any) {
  return (
    <Tabs>
      {data.lanes?.map((lane = "", index: any) => {
        if (index === tabIndex) {
          return (
            <>
              {tabIndex > 0 ? (
                <Tab key={index} onClick={() => handleSwitch(tabIndex - 1)}>
                  <AiOutlineDoubleLeft />
                </Tab>
              ) : (
                <></>
              )}
              <ActiveTab>{index + 1}</ActiveTab>
              {data.lanes?.length > tabIndex + 1 ? (
                <Tab key={index} onClick={() => handleSwitch(tabIndex + 1)}>
                  <AiOutlineDoubleRight />
                </Tab>
              ) : (
                <></>
              )}
            </>
          );
        }
      })}
    </Tabs>
  );
}