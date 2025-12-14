interface Point {
    x: number;
    y: number;
}

function centroid(points: Set<Point>): Point | undefined {
    if(points.size === 0)
        return undefined
    
    let x_sum: number = 0;
    let y_sum: number = 0;
    let ctr: number = 0;

    points.forEach(
        (a) => {
            x_sum += a.x;
            y_sum += a.y;
            ctr++;
        }
    );

    return {x: x_sum/ctr, y: y_sum/ctr};
}