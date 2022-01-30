class GoalModel {
    constructor(
        public pro?: number,
        public against?: number,
    ) {
    }
}

class TeamInfoDetailModel {
    constructor(
        public played?: number,
        public win?: string,
        public draw?: string,
        public lose?: string,
        public goals?: GoalModel,
    ) {
        this.goals = new GoalModel();
    }
}

class TeamModel {
    constructor(
        public id?: number,
        public name?: string,
        public logo?: string,
    ) {
    }
}

export class TeamStandingsModel {
    constructor(
        public rank?: number,
        public team?: TeamModel,
        public points?: number,
        public goalsDiff?: number,
        public group?: string,
        public form?: string,
        public status?: string,
        public description?: string,
        public all?: TeamInfoDetailModel,
        public home?: TeamInfoDetailModel,
        public away?: TeamInfoDetailModel,
        public update?: Date,
    ) {
        this.team = new TeamModel();
        this.all = new TeamInfoDetailModel();
        this.home = new TeamInfoDetailModel();
        this.away = new TeamInfoDetailModel();
    }
}
