import React from "react";
import "./App.css";
import { Designer } from "./components/Form/Designer";
import Form from "./components/Form";
import { CellLocation } from "./components/Form/schema";
import { Interactions } from "./components/Form/hooks/interactions";

function App() {
  return (
    <div style={{ padding: 20 }}>
      {/* <h1>Dynamic Form</h1>
      <hr />
      <h2>Form example</h2>
      <div style={{ border: "1px solid #d3d3d3", padding: 20, width: 600 }}>
        <Form
          data={{
            type: "grid",
            id: "1127",
            lanes: [
              {
                cellDataList: [
                  {
                    type: "input",
                    id: "sn",
                    label: "Single Number",
                    value: "00000001",
                  },
                  {
                    id: "detail",
                    type: "list",
                    label: "Details",
                    lanes: [
                      {
                        cellDataList: [
                          {
                            id: "price",
                            type: "input",
                            label: "Unit Price",
                            width: "30%",
                            value: 10,
                          },
                          {
                            id: "count",
                            type: "input",
                            label: "Quantity",
                            width: "30%",
                            value: 10,
                            onChange: function (
                              val: unknown,
                              { getValue, setValue, set }: Interactions,
                              valueObject: never,
                              location: CellLocation
                            ) {
                              const price = getValue(
                                `${location.parentId}.${location.index}.price`
                              );
                              set(
                                `${location.parentId}.${location.index}.amount`,
                                "value",
                                price * (val as number)
                              );
                            },
                          },
                          {
                            id: "amount",
                            type: "input",
                            label: "Subtotal",
                            width: "40%",
                            value: 100,
                          },
                        ],
                      },
                      {
                        cellDataList: [
                          {
                            id: "price",
                            type: "input",
                            label: "Unit Price",
                            width: "30%",
                            value: 10,
                          },
                          {
                            id: "count",
                            type: "input",
                            label: "Quantity",
                            width: "30%",
                            value: 10,
                          },
                          {
                            id: "amount",
                            type: "input",
                            label: "Subtotal",
                            width: "40%",
                            value: 100,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          }}
        />
      </div> */}

      <h2 style={{ marginTop: 30 }}>Form Builder</h2>
      <Designer />
    </div>
  );
}

export default App;
