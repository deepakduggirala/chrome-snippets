const intersection = set1 => set2 => new Set([...set1].filter(x => set2.has(x)));
const difference = set1 => set2 => new Set([...set1].filter(x => !set2.has(x)));