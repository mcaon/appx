export class TeamModel {
    constructor(
        public id?: number,
        public name?: string,
        public country?: string,
        public founded?: number,
        public national?: boolean,
        public logo?: string,
    ) {
    }
}
