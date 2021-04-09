<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" class="py-2">
                <v-btn-toggle v-model="selectedDivision">
                    <v-btn>All</v-btn>
                    <v-btn>D1</v-btn>
                    <v-btn>D2</v-btn>
                    <v-btn>D3</v-btn>
                    <v-btn>D4</v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row>

        <v-row>
            <v-data-table :headers="headers" :items="data" :items-per-page="500">
                <template v-for="(thing, index) in statTypes" v-slot:[`item.stats.${thing}`]="{ item }">
                    <v-chip :key="`thing${index}`" :color="getColor(item[statValueLocation][thing])" dark>{{ item.stats[thing] }} ({{ item[statValueLocation][thing] }})</v-chip>
                    <!-- <span :key="`thing${index}`">{{ item.statValues[thing] }}</span> -->
                </template>
                <template v-slot:[`item.teamName`]="{ item }">
                    <a target="_blank" :href="`https://www.fleaflicker.com/mlb/leagues/${item.leagueId}/teams/${item.teamId}`">{{item.teamName}}</a>
                </template>
                <template v-slot:[`item.leagueName`]="{ item }">
                    <a target="_blank" :href="`https://www.fleaflicker.com/mlb/leagues/${item.leagueId}`">{{item.leagueName}}</a>
                </template>
            </v-data-table>
        </v-row>
    </div>
</template>

<script>
import jsonData from "../../src/allTheData.json";

export default {
    name: "App",
    data: () => ({
        data: jsonData,
        selectedDivision: 0,
        statValueLocation: 'statValues',
        statTypes: ["HR", "R", "RBI", "SB", "OBP", "OPS", "SO", "SV", "HD", "ERA", "WHP", "QS"],
        headers: [
            { text: "Team Name", value: "teamName" },
            { text: "League", value: "leagueName" },
            { text: "League Ranking", value: "leagueRank" },
            { text: "Overall Ranking", value: "overallRank" },
            { text: "Total Points", value: "totalPoints" },

            { text: "HR", value: "stats.HR" },
            { text: "R", value: "stats.R" },
            { text: "RBI", value: "stats.RBI" },
            { text: "SB", value: "stats.SB" },
            { text: "OBP", value: "stats.OBP" },
            { text: "OPS", value: "stats.OPS" },
            { text: "SO", value: "stats.SO" },
            { text: "SV", value: "stats.SV" },
            { text: "HD", value: "stats.HD" },
            { text: "ERA", value: "stats.ERA" },
            { text: "WHP", value: "stats.WHP" },
            { text: "QS", value: "stats.QS" },
        ],
    }),
    created() {
        //put overall value calculations on the backend
        console.log("this.data:", this.data);
    },
    watch: {
        selectedDivision: function(){
            if (this.selectedDivision){ //0 is all
                this.data = jsonData.filter(x => x.division === this.selectedDivision);
                this.statValueLocation = 'divisionValues';
            } else {
                this.data = jsonData;
                this.statValueLocation = 'statValues';
                
            }
        }
    },
    methods: {
        getColor(rank){
            let dataCount = this.data.length;

            if (rank/dataCount < .25) return 'red darken-4'
            else if (rank/dataCount < .5) return 'red'
            else if (rank/dataCount < .75) return 'orange'
            else if (rank/dataCount < .95) return 'green lighten-2'
            else return 'green'
        },
    },
};
</script>
