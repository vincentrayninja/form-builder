import React, { useEffect, useState } from "react";
import "./App.css";
import { Designer } from "./components/Form/Designer";
import Form from "./components/Form";
import { CellLocation } from "./components/Form/schema";
import { Interactions } from "./components/Form/hooks/interactions";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GetValidations } from "./components/Healper";
function App() {
  const FormFormation1 = {
    type: "grid",
    id: "11270307",
    lanes: [
      {
        span: 24,
        cellDataList: [
          {
            type: "section",
            id: "section1645016485435",
            active: false,
            label: "Personal Details",
            lanes: [
              {
                span: 24,
                cellDataList: [
                  {
                    type: "input",
                    id: "fname",
                    active: false,
                    label: "First Name",
                    required: true,
                  },
                  {
                    type: "input",
                    id: "lname",
                    active: false,
                    label: "Last name",
                    required: true,
                  },
                  {
                    type: "input",
                    id: "email",
                    active: false,
                    label: "Email",
                    format: "email",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "section",
            id: "section1645016608924",
            active: false,
            label: "Address",
            lanes: [
              {
                span: 24,
                cellDataList: [
                  {
                    type: "input",
                    id: "building",
                    active: false,
                    label: "Building / Appartment",
                    required: true,
                  },
                  {
                    type: "input",
                    id: "address",
                    active: false,
                    label: "Address",
                    required: true,
                  },
                  {
                    type: "grid",
                    id: "grid1645016776706",
                    active: false,
                    label: "grid",
                    lanes: [
                      {
                        span: 12,
                        cellDataList: [
                          {
                            type: "select",
                            id: "country",
                            active: false,
                            label: "Country",
                            required: true,
                            options: [
                              { label: "India", value: "in" },
                              { label: "Australia", value: "au" },
                            ],
                          },
                        ],
                      },
                      {
                        span: 12,
                        cellDataList: [
                          {
                            type: "select",
                            id: "state",
                            active: false,
                            label: "State",
                            required: true,
                            options: [
                              { label: "Gujrat", value: "gu" },
                              { label: "Rajasthan", value: "rj" },
                              { label: "Melborn", value: "Mb" },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    active: true,
  };

  const FormFormation2 = {
    type: "grid",
    id: "11270307",
    lanes: [
      {
        span: 24,
        cellDataList: [
          {
            type: "pages",
            id: "pages1645687000867",
            active: false,
            label: "pages",
            lanes: [
              {
                span: 24,
                cellDataList: [
                  {
                    type: "section",
                    id: "section1645687006596",
                    active: true,
                    label: "section",
                    lanes: [
                      {
                        span: 24,
                        cellDataList: [
                          {
                            type: "textarea",
                            id: "textarea1645687017089",
                            active: false,
                            label: "textarea",
                            disabled: false,
                            required: true,
                          },
                          {
                            type: "input",
                            id: "input1645687013711",
                            active: false,
                            label: "input",
                            required: true,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              { span: 0, cellDataList: [] },
            ],
            tabs: ["Page 1", "Page 2"],
          },
        ],
      },
    ],
    active: false,
  };

  const [schemaFormValid, setSchemaFormValid] = useState<any>([]);

  useEffect(() => {
    setSchemaFormValid(GetValidations(FormFormation2.lanes));
  }, []);

  useEffect(() => {
    const makeSchema = schemaFormValid.map((s: any) => {
      return { [s]: yup.string().required() };
    });
    console.log("key-->here", makeSchema);
  }, [schemaFormValid]);

  let schema = yup.object().shape({
    textarea1645687017089: yup.string().required(),
    input1645687013711: yup.string().required(),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<any> = (data) => console.log("data", data);

  return (
    <div style={{ padding: 20 }}>
      {/* <h1>Dynamic Form</h1> */}
      {/* <hr /> */}
      {/* <h2>Form example</h2> */}
      <div style={{ border: "1px solid #d3d3d3", padding: 20, width: "100%" }}>
        {JSON.stringify(errors)}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form register={register} control={control} data={FormFormation2} />
        </form>
      </div>

      <h2 style={{ marginTop: 30 }}>Form Builder</h2>
      <Designer />
    </div>
  );
}

export default App;
