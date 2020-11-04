import _ from "lodash";
const { groupBy } = _;

const data = [
  {
    id: 1,
    jobTitle: "Graphic Designer",
    gender: "Female",
    dept: "Operations",
    seniority: 2,
    basePay: 42363,
  },
  {
    id: 2,
    jobTitle: "Software Engineer",
    gender: "Female",
    dept: "Operations",
    seniority: 5,
    basePay: 90520,
  },
  {
    id: 2,
    jobTitle: "Software Engineer",
    gender: "Male",
    dept: "Management",
    seniority: 5,
    basePay: 108476,
  },
];

const groupedData = groupBy(data, "gender");
const entries = Object.entries(groupedData);
const modifiedData = entries.map(([key, value]) => {
  const basePay = value.map(({ basePay }) => basePay); // [1231, 213123]
  return [key, basePay];
});
const normalizedData = Object.fromEntries(modifiedData);
// => { Female: [ 42363, 90520 ], Male: [ 108476 ] }

// Alternative way
const normalizedData2 = Object.fromEntries(
  Object.entries(groupedData).map(([key, value]) => {
    const basePay = value.map(({ basePay }) => basePay);
    return [key, basePay];
  })
);
export default () => {
  console.log("lodash_example");
};
