function volumeOfSphere(radius) {
    let volume = (4 * 3.14 * radius * radius) / 3;
    return volume;
}

function areaOfCirle(radius) {
    let area = 3.14 * radius * radius;
    return area;
}

function surfaceAreaOfSphere(radius) {
    let surfaceArea = 4 * 3.14 * radius * radius;
    return surfaceArea;
}

module.exports.volumeOfSphere = volumeOfSphere;
module.exports.areaOfCirle = areaOfCirle;
module.exports.surfaceAreaOfSphere = surfaceAreaOfSphere;