export function find(haystack: number[], needle: number): number | never {
  const binarySearch = (left: number = 0, right: number = haystack.length - 1): number | never => {
    if(left > right) throw new Error('Value not in array');
    let mid = Math.floor((left + right) / 2);
    
    if(needle === haystack[mid]) return mid;
    else if(needle < haystack[mid]) return binarySearch(left, mid - 1);
    else return binarySearch(mid + 1, right);
  }

  return binarySearch();
}
