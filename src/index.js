/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    return preferences.filter((value, index, arr) => {
        const first = index + 1;
        const second = value;
        const third = arr[second - 1];
        const end = arr[third - 1];

        return first === end && first < second && first < third;
    }).length;
};

