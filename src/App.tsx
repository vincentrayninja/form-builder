import React from "react";
import "./App.css";
import { Designer } from "./components/Form/Designer";
import Form from "./components/Form";
import { CellLocation } from "./components/Form/schema";
import { Interactions } from "./components/Form/hooks/interactions";
import { useForm, SubmitHandler } from "react-hook-form";
function App() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();
  console.log("control", control);
  const onSubmit: SubmitHandler<any> = (data) => console.log("data", data);
  console.log("watcher", watch("myname"));
  return (
    <div style={{ padding: 20 }}>
      {/* <h1>Dynamic Form</h1> */}
      {/* <hr /> */}
      {/* <h2>Form example</h2> */}
      <div style={{ border: "1px solid #d3d3d3", padding: 20, width: "100%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("myname")} />
          <Form
            register={register}
            control={control}
            data={{
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
                            },
                            {
                              type: "input",
                              id: "lname",
                              active: false,
                              label: "Last name",
                            },
                            {
                              type: "input",
                              id: "email",
                              active: false,
                              label: "Email",
                              format: "email",
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
                            },
                            {
                              type: "input",
                              id: "address",
                              active: false,
                              label: "Address",
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
            }}
          />
        </form>
      </div>

      <h2 style={{ marginTop: 30 }}>Form Builder</h2>
      <Designer />
    </div>
  );
}

export default App;
