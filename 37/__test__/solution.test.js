'use strict';

let TreeNode = require('../lib/treenode');
let BinaryTree = require('../lib/binary-tree');
let SLL = require('../lib/sll');
let solution = require('../lib/solution');
require('jest');

let treeOne = new BinaryTree(), treeTwo = new BinaryTree();
let oneOne = new TreeNode(1), twoOne = new TreeNode(2), threeOne = new TreeNode(3), fourOne = new TreeNode(4),
  fiveOne = new TreeNode(5), sixOne = new TreeNode(6), oneTwo = new TreeNode(1), twoTwo = new TreeNode(2),
  threeTwo = new TreeNode(3), fourTwo = new TreeNode(4), fiveTwo = new TreeNode(5), sixTwo = new TreeNode(6);

treeOne.root = oneOne; oneOne.left = twoOne; oneOne.right = sixOne; twoOne.right = threeOne; twoOne.left = fiveOne; sixOne.right = fourOne;
treeTwo.root = twoTwo; twoTwo.left = oneTwo; twoTwo.right = fiveTwo; oneTwo.right = threeTwo; oneTwo.left = sixTwo; fiveTwo.right = fourTwo;

let answerOne = solution(treeOne), answerTwo = solution(treeTwo);

describe('Solution Whiteboard 37', () => {
  describe('Valid Input', () => {
    it('Should return a SLL for a valid tree input', () => {
      expect(answerOne).toBeInstanceOf(SLL);
      expect(answerTwo).toBeInstanceOf(SLL);
    });
    it('Should return the correct order for a valid tree input', () => {
      expect(answerOne.head.val).toBe(1);
      expect(answerOne.head.next.val).toBe(2);
      expect(answerOne.head.next.next.val).toBe(3);
      expect(answerOne.head.next.next.next.val).toBe(4);
      expect(answerTwo.head.val).toBe(1);
      expect(answerTwo.head.next.val).toBe(2);
      expect(answerTwo.head.next.next.val).toBe(3);
      expect(answerTwo.head.next.next.next.val).toBe(4);
    });
  });
  describe('Invalid Input', () => {
    it('Should return null for invalid input', () => {
      expect(solution('invalid')).toBeNull();
    });
    it('Should return null for no input', () => {
      expect(solution()).toBeNull();
    });
  });
});