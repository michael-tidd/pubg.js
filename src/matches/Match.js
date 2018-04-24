const Asset = require('./Asset');
const Roster = require('./Roster');

/**
 * Match objects contain the results of a completed match such as the game mode played, duration, and which players participated
 * @class Match
 */
class Match {
    constructor(content, client, included) {
        /**
         * The client that created the Player
         * @type {Client}
         */
        Object.defineProperty(this, 'client', { value: client });

        if (typeof content === 'string') {
            this.id = content;
            this.full = false;
            return;
        }

        /**
         * API id of the player
         * @type {string}
         */
        this.id = content.id;

        /**
         * If the match contains full data or needs `.fetch()`
         * @type {boolean}
         */
        this.full = true;

        /**
         * Attributes of the Match
         * @type {Object}
         * @property {Date} attributes.createdAt Time this match object was stored in the API
         * @property {number} attributes.duration Length of the match
         * @property {string} attributes.gameMode Game mode played
         * * duo, duo-fpp, solo, solo-fpp, squad, squad-fpp
         * @property {string} attributes.mapName Map name
         * * Desert_Main, Erangel_Main
         * @property {string} attributes.patchVersion N/A
         * @property {string} attributes.shardId Platform-region shard
         * @property {Object} attributes.stats N/A
         * @property {Object} attributes.tags N/A
         * @property {string} attributes.titleId Identifies the studio and game
         */
        this.attributes = {
            createdAt: new Date(content.attributes.createdAt),
            duration: content.attributes.duration,
            gameMode: content.attributes.gameMode,
            mapName: content.attributes.mapName,
            patchVersion: content.attributes.patchVersion,
            shardId: content.attributes.shardId,
            stats: content.attributes.stats,
            tags: content.attributes.tags,
            titleId: content.attributes.titleId,
        };

        /**
         * Relations of the Match
         * @type {Object}
         * @property {Array<Asset>} relationships.assets Array of all refferenced assets
         * @property {Array<Roster>} relationships.rosters Array of all refferenced rosters
         */
        this.relationships = {
            assets: content.relationships.assets.data.map(p => new Asset(included.find(i => i.type === 'asset' && i.id === p.id), included)),
            // eslint-disable-next-line
            rosters: content.relationships.rosters.data.map(p => new Roster(included.find(i => i.type === 'roster' && i.id === p.id), included)),
        };
    }

    /**
     * Fetches the full match
     * @returns {Promise<Match>}
     * @memberof Match
     */
    fetch() {
        return this.client.getMatch(this.id);
    }

    /**
     * Fetches telemetry data of the match
     * @returns {Promise<Object>}
     * @memberof Match
     */
    fetchTelemetry() {
        return this.client.getTelemetry(this.relationships.assets[0].attributes.URL);
    }
}

module.exports = Match;
