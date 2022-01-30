import * as React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {PageTitle, TopBar} from '../../styles';
import {DataTable} from 'react-native-paper';
import {useTeamStandings, useTeamTeamDetailsRequest} from '../../store/hooks/team';
import {AppXScroll, BottomBar, Footer, InfoText, LeagueInfo, ScrollPage, TextContainer, TopInfo} from './styles';
import {LeagueStandingsModel} from '../../shared/models/league-standings.model';
import {TeamStandingsModel} from '../../shared/models/team-standings.model';

export default function Classification({navigation}: any) {
    const screenWidth = Dimensions.get('window').width;
    const leagueStandings: LeagueStandingsModel = useTeamStandings();
    const getTeamDetails = useTeamTeamDetailsRequest();

    const selectTeam = async (team: any) => {
        await getTeamDetails(team.team.id);
        navigation.navigate('TeamDetailComponent');
    };

    return (
        <>
            <AppXScroll showsHorizontalScrollIndicator={false}>
                <ScrollPage style={{width: screenWidth}}>
                    <TopBar>
                        <TopInfo>
                            <TextContainer>
                                <PageTitle>{'League'}</PageTitle>
                            </TextContainer>
                        </TopInfo>
                    </TopBar>
                    <ScrollView>
                        <LeagueInfo>
                            <InfoText>Name: {leagueStandings?.name}</InfoText>
                            <InfoText>Country: {leagueStandings?.country}</InfoText>
                            <InfoText>Season: {leagueStandings?.season}</InfoText>
                        </LeagueInfo>

                        {leagueStandings.standings ? leagueStandings.standings.map((group: any[], index: number) => (
                            <DataTable key={index}>
                                <DataTable.Header>
                                    <DataTable.Title>{group[0].group}</DataTable.Title>
                                    <DataTable.Title numeric>G</DataTable.Title>
                                    <DataTable.Title numeric>W</DataTable.Title>
                                    <DataTable.Title numeric>D</DataTable.Title>
                                    <DataTable.Title numeric>L</DataTable.Title>
                                    <DataTable.Title numeric>P</DataTable.Title>
                                </DataTable.Header>

                                {group ? group.map((team: TeamStandingsModel, i: number) => (
                                    <DataTable.Row key={i} onPress={() => selectTeam(team)}>
                                        <DataTable.Cell>{team?.team?.name}</DataTable.Cell>
                                        <DataTable.Cell numeric>{team?.all?.played}</DataTable.Cell>
                                        <DataTable.Cell numeric>{team?.all?.win}</DataTable.Cell>
                                        <DataTable.Cell numeric>{team?.all?.draw}</DataTable.Cell>
                                        <DataTable.Cell numeric>{team?.all?.lose}</DataTable.Cell>
                                        <DataTable.Cell numeric>{team?.points}</DataTable.Cell>
                                    </DataTable.Row>
                                )) : <></>}
                            </DataTable>
                        )) : <></>}
                    </ScrollView>
                    <BottomBar>
                        <Footer/>
                    </BottomBar>
                </ScrollPage>
            </AppXScroll>
        </>
    );
}
