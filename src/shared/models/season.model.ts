import {CoverageModel} from './coverage.model';

export class SeasonModel {
    constructor(
        public year?: number,
        public start?: string,
        public end?: string,
        public current?: string,
        public coverage?: CoverageModel,
    ) {
        this.coverage = new CoverageModel();
    }
}
