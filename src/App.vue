<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-img alt="Sultans of Stats Logo" class="shrink mr-2" contain src="sos.jpg" transition="scale-transition" width="40" />

                <v-toolbar-title class="headline text-uppercase">
                    <span>Sultans of Stats Leaderboard</span>
                </v-toolbar-title>
            </div>

            <v-spacer></v-spacer>

            <span>Last Updated: {{formattedDate}}</span>

            <v-btn href="https://github.com/danhogan/sos-leaderboard" target="_blank" text>
                <span class="mr-2">Github</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
    import jsonData from "../src/allTheData.json";

    export default {
        data: () => ({
            date: jsonData.updateDate,
        }),
        computed: {
            formattedDate: function(){
                const theDate = new Date(this.date);
                return `${theDate.toLocaleDateString()} @ ${theDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
            }
        }
    }
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #222;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #555;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #888;
}
</style>
