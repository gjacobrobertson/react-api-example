const union = (a, b) => new Set([...a, ...b]);
const intersection = (a, b) => new Set([...a].filter(e => b.has(e)));
export default (a, b) => intersection(a, b).size / union(a, b).size;
