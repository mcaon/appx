import * as React from 'react';
import {useEffect, useState} from 'react';
import {AppXScroll, BottomBar, Footer, PageTitle, ScrollPage, TextContainer, TopBar, TopInfo} from '../../styles';
import {Dimensions, ScrollView} from 'react-native';
import {
    useTeamLeagues,
    useTeamLeaguesRequest,
    useTeamSeasons,
    useTeamSeasonsRequest,
    useTeamSetLeagueSelected,
    useTeamSetSeasonSelected,
    useTeamStandings,
    useTeamStandingsRequest,
} from '../../store/hooks/team';
import {Avatar, List} from 'react-native-paper';
import {LeagueModel} from '../../shared/models/league.model';

export default function Home({navigation}: any) {
    const getSeasons = useTeamSeasonsRequest();
    const getLeagues = useTeamLeaguesRequest();
    const getStandings = useTeamStandingsRequest();
    const setSeasonSelected = useTeamSetSeasonSelected();
    const setLeagueSelected = useTeamSetLeagueSelected();
    const seasons = useTeamSeasons();
    const leagues = useTeamLeagues();
    const standings = useTeamStandings();
    const screenWidth = Dimensions.get('window').width;
    const [expandedSeasons, setExpandedSeasons] = useState(false);
    const [expandedLeagues, setExpandedLeagues] = useState(false);

    const selectSeason = (season: string) => {
        setSeasonSelected(season);
        setExpandedSeasons(false);
        getLeagues();
    };

    const selectLeague = async (league: LeagueModel) => {
        setLeagueSelected(league);
        await getStandings();
        if (standings) {
            navigation.navigate('StandingsComponent');
        }
    };

    useEffect(() => {
        getSeasons();
    }, [getSeasons, getLeagues]);

    return (
        <>
            <AppXScroll showsHorizontalScrollIndicator={false}>
                <ScrollPage style={{width: screenWidth}}>
                    <TopBar>
                        <TopInfo>
                            <TextContainer>
                                <PageTitle>Home</PageTitle>
                            </TextContainer>
                        </TopInfo>
                    </TopBar>
                    <ScrollView>
                        <List.Section title="Filtros">
                            <List.Accordion
                                title="Seasons"
                                left={props => <List.Icon {...props} icon="calendar"/>}
                                expanded={expandedSeasons}
                                onPress={() => {
                                    setExpandedSeasons(!expandedSeasons);
                                }}>
                                {seasons.map((l: string, i: number) => (
                                    <List.Item key={i} onPress={() => selectSeason(l)}
                                               title={l}/>
                                ))}
                            </List.Accordion>
                            <List.Accordion
                                title="Leagues"
                                left={props => <List.Icon {...props} icon="soccer"/>}
                                expanded={expandedLeagues}
                                onPress={() => {
                                    setExpandedLeagues(!expandedLeagues);
                                }}>
                                {leagues.map((l: LeagueModel, index: number) => (
                                    <List.Item key={index} onPress={() => selectLeague(l)}
                                               title={l.league?.name}
                                               left={() => <Avatar.Image size={40}
                                                                         source={{uri: l.league?.logo}}/>}/>

                                ))}
                            </List.Accordion>
                        </List.Section>
                    </ScrollView>
                    <BottomBar>
                        <Footer/>
                    </BottomBar>
                </ScrollPage>
            </AppXScroll>
        </>
    );
}
