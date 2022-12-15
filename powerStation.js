//Link station for every given point.

const points = [
    [0, 0],
    [100, 100],
    [15, 10],
    [18, 18]
];

//Array on points represent x, y coordinates [x, y].

const stations = [
    [0, 0, 0],
    [20, 20, 5],
    [10, 0, 12]
];


//Distance between 2 points using Pythagoras theory (a^2 + b^2 = c^2) 
//a and b represent the hypothetical triangle subtracting the Xs and Ys of each point
// c represents the distance between the points.

const findDistance = (pointA, pointB) => {
    return Math.sqrt(Math.pow(Math.abs(pointA[0] - pointB[0]), 2) + Math.pow(Math.abs(pointA[1] - pointB[1]), 2));
};

//Calculation the power between a point and a station utilizing the given power formula.

const findPower = (point, station) => {
    const distance = findDistance(point, station);
    if (distance > station[2]) {
        return 0;
    } else {
        return Math.pow(Math.abs(station[2] - distance), 2);
    }
};

//Loop that checks every point for each station and outputs the coordinates of the station 
//with the best power for every given point. A besStation array variable is introduced as a placeholder for the station 
//with the best power and its element represent z the power of station and x,y the coordinates of the station [z, x, y]

for (let i = 0; i < points.length; i++) {
    let besStation = [0, 0, 0];
    for (let j = 0; j < stations.length; j++) {
        let power = findPower(points[i], stations[j]);
        if (power > besStation[0]) {
            besStation[0] = power;
            besStation[1] = stations[j][0];
            besStation[2] = stations[j][1];
        }
    };

    if (besStation[0] == 0) {
        console.log('No link station within reach for point ' + points[i][0] + ',' + points[i][1]);
    } else {
        console.log('Best link station for point ' + points[i][0] + ',' + points[i][1] + ' is ' + besStation[1] + ',' + besStation[2] + ' with power ' + besStation[0]);
    };
};



