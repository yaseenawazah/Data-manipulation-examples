/**
 * Useful Lodash functions
 *
 * isEqual
 *
 * sortBy
 * orderBy
 * groupBy
 *
 * flatten
 * flattenDeep
 *
 * uniq
 * uniqBy
 *
 * Lodash docs https://lodash.com/docs/4.17.15
 */

import _ from "lodash";
const {
  isEqual,
  sortBy,
  groupBy,
  orderBy,
  flatten,
  flattenDeep,
  uniq,
  uniqBy,
} = _;

// isEqual
const object = { a: 1 };
const other = { a: 1 };

isEqual(object, other);
// => true

object === other;
// => false

// sortBy
var users = [
  { user: "fred", age: 48 },
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "barney", age: 34 },
];

const sortedUsers = sortBy(users, (o) => o.user);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

const sortedByNameAndAge = sortBy(users, ["user", "age"]);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

// groupBy
const groupedUsers = groupBy(users, (o) => o.user);
// alternative way to write it
// const groupedUsers = groupBy(users, "user");

// orderBy
const orderedUsers = orderBy(users, ["user", "age"], ["asc", "desc"]);

// flatten
const flattenedArray = flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

// flattenDeep
const deepFlattenedArray = flattenDeep([1, [2, [3, [4]], 5]]);
// => [ 1, 2, 3, 4, 5 ]

const uniqArray = uniq([1, 1, 2, 2, 3, 4]);
// => [1, 2, 3, 4]

const uniqByArray = uniqBy(users, "user");

export default () => {
  console.log("lodash");
};
