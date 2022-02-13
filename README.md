### Usage

###### Designer

``` typescript
<Designer
  ref={designerRef}
  toolbar={false}
  defaultData={{
    type: "grid",
    id: "1127",
    lanes: [
      { 
        cellDataList: [
          {
            "type": "input",
            "id": "sn",
            "label": "Single Number",
          },
          {
            "id": "detail",
            "type": "list",
            "label": "Order Details",
            "lanes": [
              {
                "cellDataList": [
                  {
                    "id": "price",
                    "type": "input",
                    "label": "Unit Price",
                    "width": "30%",
                  },
                  {
                    "id": "count",
                    "type": "input",
                    "label": "Quantity",
                    "width": "30%",
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
                    "id": "amount",
                    "type": "input",
                    "label": "Subtotal",
                    "width": "40%",
                  }
                ]
              }
            ],
          },
        ]
      }
    ],
  }}
/>
```

###### Form

``` typescript
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
```

### Preview

https://joyceworks.github.io/dynamic-form-react/
