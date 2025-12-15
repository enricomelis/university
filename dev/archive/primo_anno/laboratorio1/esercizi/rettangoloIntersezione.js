function intersecaR(r1, r2) {
    const r1Right = r1.left + r1.width;
    const r1Bottom = r1.top + r1.height;
    const r2Right = r2.left + r2.width;
    const r2Bottom = r2.top + r2.height;
  
    
    if (r1Right < r2.left || r2Right < r1.left || r1Bottom < r2.top || r2Bottom < r1.top) {
      return 0; 
    }
  
    const leftIntersect = Math.max(r1.left, r2.left);
    const topIntersect = Math.max(r1.top, r2.top);
    const rightIntersect = Math.min(r1Right, r2Right);
    const bottomIntersect = Math.min(r1Bottom, r2Bottom);
  
    const widthIntersect = rightIntersect - leftIntersect;
    const heightIntersect = bottomIntersect - topIntersect;
  
    if (widthIntersect === 0 && heightIntersect === 0) {
      return 1;
    } else if (widthIntersect === 0 || heightIntersect === 0) {
      return 2;
    } else {
      return 3;
    }
  }