import * as React from 'react';
import {useEffect, useState} from 'react';
import {AppXScroll, BottomBar, Footer, ScrollPage, TextContainer, TopInfo} from './styles';
import {Dimensions, ScrollView} from 'react-native';
import {PageTitle, TopBar} from '../../styles';
import {
    useTeamLeaguesRequest,
    useTeamSeasons,
    useTeamSeasonsRequest,
    useTeamSetSeasonSelected,
} from '../../store/hooks/team';
import {List} from 'react-native-paper';

export default function Home({}) {
    const getSeasons = useTeamSeasonsRequest();
    const getLeagues = useTeamLeaguesRequest();
    const setSeasonSelected = useTeamSetSeasonSelected();
    const seasons = useTeamSeasons();
    const screenWidth = Dimensions.get('window').width;

    const [expanded, setExpanded] = useState(false);

    const selectSeason = (season: string) => {
        setSeasonSelected(season);
        setExpanded(false);
        getLeagues();
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
                                expanded={expanded}
                                onPress={() => {
                                    setExpanded(!expanded);
                                }}>
                                {seasons.map((l: string, i: number) => (
                                    <List.Item key={i} onPress={() => selectSeason(l)}
                                               title={l}/>
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
