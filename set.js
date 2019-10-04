function difference(set1, set2) {
  return new Set([...set1].filter(x => !set2.has(x)));
}

function intersection(set1, set2) {
  return new Set([...set1].filter(x => set2.has(x)));
}

function union(setA, setB) {
  var _union = new Set(setA);
  for (var elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function isSuperset(set, subset) {
  for (var elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function symmetricDifference(setA, setB) {
  var _difference = new Set(setA);
  for (var elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}
