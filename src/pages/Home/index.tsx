import * as React from 'react';
import {useEffect, useState} from 'react';
import {AppXScroll, BottomBar, Footer, ScrollPage, TextContainer, TopInfo} from './styles';
import {Dimensions, ScrollView} from 'react-native';
import {PageTitle, TopBar} from '../../styles';
import {
    useTeamLeagues,
    useTeamLeaguesRequest,
    useTeamSeasons,
    useTeamSeasonsRequest,
    useTeamSetSeasonSelected,
} from '../../store/hooks/team';
import {Avatar, List} from 'react-native-paper';
import {LeagueModel} from '../../shared/models/league.model';

export default function Home({}) {
    const getSeasons = useTeamSeasonsRequest();
    const getLeagues = useTeamLeaguesRequest();
    const setSeasonSelected = useTeamSetSeasonSelected();
    const seasons = useTeamSeasons();
    const leagues = useTeamLeagues();
    const screenWidth = Dimensions.get('window').width;

    const [expandedSeasons, setExpandedSeasons] = useState(false);
    const [expandedLeagues, setExpandedLeagues] = useState(false);

    const selectSeason = (season: string) => {
        setSeasonSelected(season);
        setExpandedSeasons(false);
        getLeagues();
    };

    const selectLeague = (league: LeagueModel) => {
        console.log(league);
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
                                {leagues.map((l: LeagueModel, i: number) => (
                                    <List.Item key={i} onPress={() => selectLeague(l)}
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
