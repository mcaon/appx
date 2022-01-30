export class LeagueStandingsModel {
    constructor(
        public id?: number,
        public name?: string,
        public country?: string,
        public logo?: string,
        public flag?: string,
        public season?: number,
        public standings?: any[],
    ) {
    }
}
