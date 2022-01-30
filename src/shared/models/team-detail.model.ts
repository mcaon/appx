class VenueModel {
    constructor(
        public id?: number,
        public name?: string,
        public address?: string,
        public city?: string,
        public capacity?: number,
        public surface?: string,
        public image?: string,
    ) {
    }
}

export class TeamDetailModel {
    constructor(
        public id?: number,
        public name?: string,
        public country?: string,
        public founded?: number,
        public national?: boolean,
        public logo?: string,
        public venue?: VenueModel,
    ) {
        this.venue = new VenueModel();
    }
}
