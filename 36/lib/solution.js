'use strict';

module.exports = (treeA, treeB) => {
  if (!treeA || !treeB) return null;
  if (typeof treeA !== 'object' || typeof treeB !== 'object') return null;
  if (Array.isArray(treeA) || Array.isArray(treeB)) return null;
  return treeA.root ? treeB.root ? verStructure(treeA.root, treeB.root) : false : treeB.root? false : true;

};

const verStructure = (RootA, RootB) => {
  let bool = false;
  bool = RootA.left?
    RootB.left? true : false:
    !RootB.left? true : false;
  bool = RootA.right?
    RootB.right ? true : false:
    !RootB.right ? true : false;
  if (bool && RootA.left) 
    bool = verStructure(RootA.left, RootB.left);
  if (bool && RootA.right)
    bool = verStructure(RootA.right, RootB.right);
  return bool;
};