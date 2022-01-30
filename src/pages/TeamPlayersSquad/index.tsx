import * as React from 'react';
import {useContext, useEffect} from 'react';
import {AppXInnerScrollView, AppXScroll, BottomBar, Footer, PageTitle, ScrollPage, TopBar,} from '../../styles';
import {Dimensions} from 'react-native';
import {
    ButtonPlayerTouchable,
    ButtonPlayerView,
    EventPlayersDescriptionView,
    IconContainer,
    LogoView,
    PlayerPhotoView,
    PlayerTextView,
    TeamDetailsView,
    TeamInfoView,
    TeamName,
    TeamPlayerScroll,
    TextContainer,
    TopInfoTeamDetail,
} from './styles';
import {Avatar} from 'react-native-paper';
import {Icon} from 'react-native-elements';
// @ts-ignore
import {ThemeContext} from 'styled-components/native';
import {useTeamTeamDetails} from '../../store/hooks/team';
import {PlayerModel} from '../../shared/models/player.model';

export default function TeamPlayersSquad({navigation}: any) {
    const screenWidth = Dimensions.get('window').width;
    const themeContext: any = useContext(ThemeContext);
    const selectedTeam = useTeamTeamDetails();

    const goBack = () => {
        navigation.navigate('TeamDetailComponent');
    };

    const goPlayer = () => {
        navigation.navigate('TeamDetailComponent');
    };

    useEffect(() => {
        const playa = new PlayerModel(1, 'N. Bishop', 22, 30, 'Goalkeeper', 'https://media.api-sports.io/football/players/20319.png')
    }, []);

    return (
        <>
            <AppXScroll showsHorizontalScrollIndicator={false}>
                <ScrollPage style={{width: screenWidth}}>
                    <TopBar>
                        <TopInfoTeamDetail>
                            <IconContainer>
                                <Icon type={'material'} name={'keyboard-arrow-left'}
                                      underlayColor={themeContext.palette.backgroundTransparent} size={35}
                                      color={themeContext.palette.backGroundGrey} onPress={() => goBack()}
                                      tvParallaxProperties={undefined}/>
                            </IconContainer>
                            <TextContainer>
                                <PageTitle>Jogadores</PageTitle>
                            </TextContainer>
                        </TopInfoTeamDetail>
                    </TopBar>
                    {selectedTeam ?
                        <AppXInnerScrollView>
                            <TeamInfoView>
                                <LogoView>
                                    <Avatar.Image size={150}
                                                  source={{uri: selectedTeam.team?.logo}}/>
                                </LogoView>
                                <TeamDetailsView>
                                    <TeamName>{selectedTeam.team?.name}</TeamName>
                                </TeamDetailsView>
                            </TeamInfoView>
                            <TeamPlayerScroll>
                                <ButtonPlayerView key={123}>
                                    <ButtonPlayerTouchable onPress={() => {
                                        goPlayer();
                                    }}>
                                        <EventPlayersDescriptionView>
                                            <PlayerPhotoView>
                                                <Avatar.Image size={100}
                                                              source={{uri: 'https://media.api-sports.io/football/players/20319.png'}}/>
                                            </PlayerPhotoView>
                                            <PlayerTextView>
                                                {/*<EventTitleLabel>Name: {player?.name}</EventTitleLabel>*/}
                                                {/*<EventTitleLabel>Age: {player?.age}</EventTitleLabel>*/}
                                                {/*<EventTitleLabel>Number: {player?.number}</EventTitleLabel>*/}
                                                {/*<EventTitleLabel>Position: {player?.position}</EventTitleLabel>*/}
                                            </PlayerTextView>
                                        </EventPlayersDescriptionView>
                                    </ButtonPlayerTouchable>
                                </ButtonPlayerView>
                            </TeamPlayerScroll>
                        </AppXInnerScrollView>
                        : <></>
                    }
                    <BottomBar>
                        <Footer/>
                    </BottomBar>
                </ScrollPage>
            </AppXScroll>
        </>
    );
}


