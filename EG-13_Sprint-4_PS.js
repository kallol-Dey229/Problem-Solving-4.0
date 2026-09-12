/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < s.length; i++) {

        if (map1[s[i]] && map1[s[i]] !== t[i]) {
            return false;
        }

        if (map2[t[i]] && map2[t[i]] !== s[i]) {
            return false;
        }

        map1[s[i]] = t[i];
        map2[t[i]] = s[i];
    }

    return true;
};


// console.log(isIsomorphic("egg", "add"))





/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    let words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < pattern.length; i++) {

        let letter = pattern[i];
        let word = words[i];

        // pattern → word
        if (map1[letter] && map1[letter] !== word) {
            return false;
        }


        if (map2[word] && map2[word] !== letter) {
            return false;
        }

        map1[letter] = word;
        map2[word] = letter;
    }

    return true;
};


// console.log(wordPattern("abba", "dog cat cat dog"))







/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {

    let used = [];

    for (let i = 0; i < s.length; i++) {

        for (let j = 0; j < t.length; j++) {

            if (s[i] === t[j] && !used[j]) {
                used[j] = true;
                break;
            }
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (!used[j]) {
            return t[j];
        }
    }
};

// console.log(findTheDifference("abcd", "abcde"))








/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    let previous = null;

    while (head !== null) {

        let next = head.next;

        head.next = previous;

        previous = head;

        head = next;
    }

    return previous;
};



// console.log(reverseList([1, 2, 3, 4, 5]))






/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    let count = 0;
    let current = head;

    while (current !== null) {
        count++;
        current = current.next;
    }

    current = head;

    for (let i = 0; i < Math.floor(count / 2); i++) {
        current = current.next;
    }

    return current;
};


// console.log(middleNode([1, 2, 3, 4, 5]))





/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let result = [];

    for (let i = 0; i < nums.length; i++) {

        let product = 1;

        for (let j = 0; j < nums.length; j++) {

            if (i !== j) {
                product = product * nums[j];
            }
        }

        result.push(product);
    }

    return result;
};



// console.log(productExceptSelf([1, 2, 3, 4]))





/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let count = 0;
    let current = head;

    while (current !== null) {
        count++;
        current = current.next;
    }

    if (n === count) {
        return head.next;
    }

    current = head;

    for (let i = 1; i < count - n; i++) {
        current = current.next;
    }

   
    current.next = current.next.next;

    return head;
};



// console.log(removeNthFromEnd([1, 2, 3, 4, 5], n = 2))





/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let start = -1;
    let end = -1;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === target) {

            if (start === -1) {
                start = i;
            }

            end = i;
        }
    }

    return [start, end];
};



// console.log(searchRange([5, 7, 7, 8, 8, 10], target = 8))







/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    let target = s1.split("").sort().join("");

    for (let i = 0; i <= s2.length - s1.length; i++) {

        let part = s2
            .substring(i, i + s1.length)
            .split("")
            .sort()
            .join("");

        if (part === target) {
            return true;
        }
    }

    return false;
};



// console.log(checkInclusion("ab", "eidbaooo"))










