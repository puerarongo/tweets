import IData from "./interface/data.interface";

function filterUniqueObjects(array: IData[] | []) {
  const uniqueObjects: IData[] = [];

  array.forEach((obj: IData) => {
    const objExist = uniqueObjects.some((el: IData) => {
      return JSON.stringify(el) === JSON.stringify(obj);
    });

    if (!objExist) {
      uniqueObjects.push(obj);
    }
  });

  return uniqueObjects;
}

export default filterUniqueObjects;
