import {TeamModel} from './team.model';

export class VenueModel {
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
        public team?: TeamModel,
        public venue?: VenueModel,
    ) {
        this.venue = new VenueModel();
    }
}
