export const GetValidations = (objs: any): any => {
  //   console.log("obj", obj);
  for (const obj of objs) {
    let { cellDataList } = obj;
    cellDataList.map((data: any) => {
      let { type } = data;
      if (
        type === "section" ||
        type === "pages" ||
        type === "tabs" ||
        type === "grid"
      ) {
        let { lanes } = data;
        lanes.map((lane: any) => {});
      } else {
      }
    });
  }
};

const getLanesData = (lanes: any) => {};
