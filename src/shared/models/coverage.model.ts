import {FixturesModel} from './fixtures.model';

export class CoverageModel {
    constructor(
        public fixtures?: FixturesModel,
        public standings?: boolean,
        public players?: boolean,
        public top_scorers?: boolean,
        public top_assists?: boolean,
        public top_cards?: boolean,
        public injuries?: boolean,
        public predictions?: boolean,
        public odds?: boolean,
    ) {
        this.fixtures = new FixturesModel();
    }
}
