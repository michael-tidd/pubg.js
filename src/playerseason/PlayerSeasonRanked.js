const GameModeStats = require('./GameModeStats');
const RankedGameModeStats = require('./RankedGameModeStats');
const Player = require('../Player');
const Match = require('../matches/Match');
const Season = require('../Season');

/**
 * An API returned player season ranked object
 * @class PlayerSeasonRanked
 */
class PlayerSeasonRanked {
    constructor(content, client) {
        /**
         * Attributes of the PlayerSeasonRanked
         * @type {Object}
         * @property {Object} attributes.gameModeStats An object full of all ranked game mode types being `squad`, `squadFPP`
         */
        this.attributes = {
            rankedGameModeStats: {
                squad: new RankedGameModeStats(content.attributes.rankedGameModeStats.squad)
                /**,
                squadFPP: new RankedGameModeStats(
                    content.attributes.rankedGameModeStats['squad-fpp']
                ),**/
            },
        };

        /**
     * Relationships of the PlayerSeasonRanked
     * @type {Object}
     * @property {Player} relationships.player Player of the PlayerSeason
     * @property {Season} relationships.season All solo matches played during the season by the player
     */
        this.relationships = {
            player: content.relationships.player instanceof Player ?
                content.relationships.player :
                new Player(content.relationships.player.data.id, client),
            season: new Season(content.relationships.season.data.id),
        };
    }
}

module.exports = PlayerSeasonRanked;
