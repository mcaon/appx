import {LeagueDetailModel} from './league-detail.model';
import {CountryModel} from './country.model';
import {SeasonModel} from './season.model';

export class LeagueModel {
    constructor(
        public league?: LeagueDetailModel,
        public country?: CountryModel,
        public seasons?: SeasonModel[],
    ) {
        this.seasons = [];
    }
}
