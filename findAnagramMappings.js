// You are given two integer arrays nums1 and nums2 where nums2 is an anagram of nums1.
// Both arrays may contain duplicates. Return an index mapping array mapping from nums1 to nums2
// where mapping[i] = j means the ith element in nums1 appears in nums2 at index j.
// If there are multiple answers, return any of them.
// An array a is an anagram of an array b means b is made by randomizing the order of the elements in a.

// create a map with the K,V's of nums1
// iterate over nums2 values, if value in map, push the key to mappings array

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const anagramMappings = function (nums1, nums2) {
  return nums1.map((value) => nums2.indexOf(value));
};
console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]));

const anagramMappingsTwo = function (nums1, nums2) {
  let map = new Map();
  let arr = [];
  const len = nums1.length;

  for (let i = 0; i < len; i++) {
    map.set(nums2[i], i);
  }

  for (let j = 0; j < len; j++) {
    arr.push(map.get(nums1[j]));
  }

  return arr;
};

console.log(anagramMappingsTwo([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]));
