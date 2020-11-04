/**
 * Javascript Object functions
 *
 * keys
 * values
 * entries
 * fromEntries
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#
 *
 */

const data = {
  id: 1,
  jobTitle: "Graphic Designer",
  gender: "Female",
  dept: "Operations",
  seniority: 2,
  basePay: 42363,
};

// keys
const keys = Object.keys(data);
// expected output:
// [
//   id,
//   jobTitle,
//   gender,
//   dept,
//   seniority,
//   basePay,
// ]

// values
const values = Object.values(data);
// expected output:
// [
//   1,
//   "Graphic Designer",
//   "Female",
//   "Operations",
//   2,
//   42363,
// ]

const entries = Object.entries(data);
// expected output
// [
//   ["id", 1],
//   ["jobTitle", "Graphic Designer"],
//   ["gender", "Female"],
//   ["dept", "Operations"],
//   ["seniority", 2],
//   ["basePay", 42363]
// ]

const data2 = Object.fromEntries(entries);
// expected output
// {
//   id: 1,
//   jobTitle: "Graphic Designer",
//   gender: "Female",
//   dept: "Operations",
//   seniority: 2,
//   basePay: 42363,
// };

// example when this is useful
const articles = {
  10247138: {
    id: "10247138",
    articleId: "10247138",
    name: "LEKMAN box 33x37x33 white",
    type: "insert",
    model: "BOX_330_330_330",
    isEnclosedArticle: false,
    isAccessory: false,
  },
  10275862: {
    id: "10275862",
    articleId: "10275862",
    name: "KALLAX shelving unit 147x147 black-brown",
    type: "frame",
    model: "KALLAX_frm_147x147",
    isEnclosedArticle: false,
    isAccessory: false,
  },
  10301564: {
    id: "10301564",
    articleId: "10301564",
    name: "KALLAX N insert w door 33x33 turquoise",
    type: "insert",
    model: "BOX_330_330_330",
    isEnclosedArticle: false,
    isAccessory: false,
  },
};

export default () => {
  console.log("object");
};
