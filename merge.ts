export function merge(collection1: number[], collection2: number[]): number[] {
    let i = 0;
    let j = 0;
    const merged: number[] = [];
    while (i < collection1.length && j < collection2.length) {
      if (collection1[i] < collection2[j]) {
        merged.push(collection1[i]);
        i++;
      } else {
        merged.push(collection2[j]);
        j++;
      }
    }
    return merged.concat(collection1.slice(i), collection2.slice(j));
  }
  
