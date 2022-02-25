let dataArr: any = [];
export const GetValidations = (objs: any): any[] => {
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
        GetValidations(lanes);
      } else {
        if (data?.required === true) {
          dataArr.push(data.id);
        }
      }
    });
  }
  return dataArr;
};
