const d1List = [23172];
const d2List = [
    23173,
    23174,
    23175,
];
const d3List = [
    23176,
    23177,
    23178,
    23179,
    23180,
    23181,
];
const d4List = [
    23182,
    23183,
    23184,
    23185,
    23186,
    21599,
    21600,
    21601,
    21602,
];
const leagueIds = [...d1List, ...d2List, ...d3List, ...d4List];

const getDivision = ((leagueId) => {
    if (d1List.includes(leagueId)){
        return 1;
    }

    if (d2List.includes(leagueId)){
        return 2;
    }

    if (d3List.includes(leagueId)){
        return 3;
    }

    return 4;
});

module.exports = {
    leagueIds,
    getDivision
}