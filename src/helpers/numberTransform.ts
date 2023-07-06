const numberTransform = (value: number) => {
  const stringValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return stringValue;
};

export default numberTransform;
