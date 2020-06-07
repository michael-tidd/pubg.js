/**
 * An API returned game mode stats
 * @class RankedGameModeStats
 */
class RankedGameModeStats {
    constructor(content) {

        if (content === undefined) return;

        /**
         * Current Tier
         * @type {String}
         */
        this.currentTier = content.currentTier.tier;

        /**
         * Current Sub Tier
         * @type {Number}
         */
        this.currentSubTier = content.currentTier.subTier;

        /**
         * Current Rank Point
         * @type {Number}
         */
        this.currentRankPoint = content.currentRankPoint;

        /**
         * Best Tier
         * @type {String}
         */
        this.bestTier = content.bestTier.tier;

        /**
         * Best Sub Tier
         * @type {Number}
         */
        this.bestSubTier = content.bestTier.subTier;

        /**
         * Best Rank Point
         * @type {Number}
         */
        this.bestRankPoint = content.bestRankPoint;

        /**
         * Average Rank
         * @type {Number}
         */
        this.avgRank = content.avgRank;

        /**
         * Top 10 Ratio
         * @type {Number}
         */
        this.top10Ratio = content.top10Ratio;

        /**
         * Win Ratio
         * @type {Number}
         */
        this.winRatio = content.winRatio;

        /**
         * Assists
         * @type {Number}
         */
        this.assists = content.assists;

        /**
         * Wins
         * @type {Number}
         */
        this.wins = content.wins;

        /**
         * Kills
         * @type {Number}
         */
        this.kills = content.kills;

        /**
         * Damage Dealt
         * @type {Number}
         */
        this.damageDealt = content.damageDealt;

        /**
         * Deaths
         * @type {Number}
         */
        this.deaths = content.deaths;

        /**
         * DBNOs (down but not outs)
         * @type {Number}
         */
        this.dBNOs = content.dBNOs;

        /**
         * Kill Death Assists
         * @type {Number}
         */
        this.kda = content.kda;

        /**
         * Rounds Played
         * @type {Number}
         */
        this.roundsPlayed = content.roundsPlayed;

    }
}

module.exports = RankedGameModeStats;
