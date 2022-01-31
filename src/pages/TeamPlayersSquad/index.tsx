import * as React from 'react';
import {useContext, useEffect} from 'react';
import {
    AppXInnerScrollView,
    AppXScroll,
    BottomBar,
    EventTitleLabel,
    Footer,
    PageTitle,
    ScrollPage,
    TopBar,
} from '../../styles';
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
import {useTeamPlayersSquadRequest, useTeamTeamDetails, useTeamTeamPlayersSquad} from '../../store/hooks/team';
import {PlayerModel} from '../../shared/models/player.model';

export default function TeamPlayersSquad({navigation}: any) {
    const screenWidth = Dimensions.get('window').width;
    const themeContext: any = useContext(ThemeContext);
    const selectedTeam = useTeamTeamDetails();
    const playersSquad = useTeamTeamPlayersSquad();
    const setPlayersSquad = useTeamPlayersSquadRequest();

    const goBack = () => {
        navigation.navigate('TeamDetailComponent');
    };

    const goPlayer = () => {
        navigation.navigate('TeamDetailComponent');
    };

    useEffect(() => {
        setPlayersSquad();
    }, [setPlayersSquad]);

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
                                {playersSquad ? playersSquad.map((player: PlayerModel, i: number) => (
                                    <ButtonPlayerView key={i}>

                                        <ButtonPlayerTouchable onPress={() => {
                                            goPlayer();
                                        }}>
                                            <EventPlayersDescriptionView>
                                                <PlayerPhotoView>
                                                    <Avatar.Image size={100}
                                                                  source={{uri: player?.photo}}/>
                                                </PlayerPhotoView>
                                                <PlayerTextView>
                                                    <EventTitleLabel>Name: {player?.name}</EventTitleLabel>
                                                    <EventTitleLabel>Age: {player?.age}</EventTitleLabel>
                                                    <EventTitleLabel>Number: {player?.number}</EventTitleLabel>
                                                    <EventTitleLabel>Position: {player?.position}</EventTitleLabel>
                                                </PlayerTextView>
                                            </EventPlayersDescriptionView>
                                        </ButtonPlayerTouchable>
                                    </ButtonPlayerView>

                                )) : <></>
                                }
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
