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


console.log(middleNode([1, 2, 3, 4, 5]))
