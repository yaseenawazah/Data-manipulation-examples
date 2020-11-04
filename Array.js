/**
 * Javascript Array functions
 *
 * includes
 * some
 * every
 *
 * find
 * filter
 *
 * forEach
 * map
 *
 * reduce
 *
 * sort
 *
 * resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#
 *
 * How to name your booleans:
 * https://dev.to/michi/tips-on-naming-boolean-variables-cleaner-code-35ig
 *
 */

// arr.includes
const array1 = [1, 2, 3];
const isIncluded = array1.includes(2);
// expected output: true

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

// arr.some
const isAnyEmployeeMale = data.some((employee) => employee.gender === "Male");
// expected output: true

// arr.every
const isEveryEmployeeRich = data.every((employee) => employee.basePay > 50000);
// expected output: false

// arr.find
const softwareEngineer = data.find(
  (employee) => employee.jobTitle === "Software Engineer"
);
// expected output:
// {
//   id: 2,
//   jobTitle: "Software Engineer",
//   gender: "Male",
//   dept: "Management",
//   seniority: 5,
//   basePay: 108476,
// }

// arr.filter
const softwareEngineers = data.filter(
  (employee) => employee.jobTitle === "Software Engineer"
);
// expected output:
// [{
//   id: 2,
//   jobTitle: "Software Engineer",
//   gender: "Female",
//   dept: "Operations",
//   seniority: 5,
//   basePay: 90520,
// },
// {
//   id: 2,
//   jobTitle: "Software Engineer",
//   gender: "Male",
//   dept: "Management",
//   seniority: 5,
//   basePay: 108476,
// }]

// arr.map
const salaries = data.map((employee) => employee.basePay);
// expected output:
// [42363, 90520, 108476]

// arr.forEach
let salariesTotal = 0;
data.forEach((employee) => (salariesTotal += employee.basePay));

// arr.reduce
const test1 = data.reduce((accumulator, currentValue) => {
  if (accumulator.length === 0) {
    return [{ gender: currentValue.gender, basePay: [currentValue.basePay] }];
  }

  // [
  //   { 
  //     gender: "female",
  //     basePay: [42363]
  //   },
  // ]

  const genderFound = accumulator.find(
    (element) => element.gender === currentValue.gender
  );

  if (genderFound) {
    genderFound.basePay.push(currentValue.basePay);
    return accumulator;
  }

  // [
  //   { 
  //     gender: "female",
  //     basePay: [42363, 90520]
  //   },
  // ]

  return [
    ...accumulator,
    { gender: currentValue.gender, basePay: [currentValue.basePay] },
  ];
}, []);
// expected output
// [
//   {
//     "gender": "Female",
//     "basePay": [
//       42363,
//       90520
//     ]
//   },
//   {
//     "gender": "Male",
//     "basePay": [
//       108476
//     ]
//   }
// ]

const test2 = data.reduce((accumulator, currentValue) => {
  const genderFound = accumulator.find(
    (element) => element.gender === currentValue.gender
  );

  if (accumulator.length === 0 || !genderFound) {
    return [
      ...accumulator,
      { gender: currentValue.gender, basePay: [currentValue.basePay] },
    ];
  }

  genderFound.basePay.push(currentValue.basePay);
  return accumulator;
}, []);
// expected output
// [
//   {
//     "gender": "Female",
//     "basePay": [
//       42363,
//       90520
//     ]
//   },
//   {
//     "gender": "Male",
//     "basePay": [
//       108476
//     ]
//   }
// ]

const test3 = data.reduce((accumulator, currentValue) => {
  if (!accumulator) {
    accumulator[currentValue.gender] = [currentValue.basePay];
    return accumulator;
  }

  const genderFound = accumulator[currentValue.gender];
  if (!genderFound) {
    accumulator[currentValue.gender] = [currentValue.basePay];
    return accumulator;
  }
  accumulator[currentValue.gender] = [
    ...accumulator[currentValue.gender],
    currentValue.basePay,
  ];
  return accumulator;
}, {});
// expected output
//  { Female: [ 42363, 90520 ], Male: [ 108476 ] }

// arr.sort
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const unsorted = [1, 30, 4, 21, 100000];
unsorted.sort();
// expected output: Array [1, 100000, 21, 30, 4]

unsorted.sort((a, b) => a - b);
// expected output: Array [1, 4, 21, 30, 100000]

export default () => {
  console.log("array");
};
