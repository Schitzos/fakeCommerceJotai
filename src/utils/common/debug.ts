export const debuglog = (label: string, data: any) => {
  return console.log(label, JSON.stringify(data, null, 2));
};
