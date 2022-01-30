import * as React from 'react';
import {useContext} from 'react';
import {AppXInnerScrollView, AppXScroll, BottomBar, Footer, PageTitle, ScrollPage, TopBar} from '../../styles';
import {Dimensions} from 'react-native';
import {
    IconContainer,
    LogoView,
    TeamDetailsView,
    TeamInfoView,
    TeamName,
    TextContainer,
    TopInfoTeamDetail,
} from './styles';
import {Avatar} from 'react-native-paper';
import {Icon} from 'react-native-elements';
// @ts-ignore
import {ThemeContext} from 'styled-components/native';
import {useTeamTeamDetails} from '../../store/hooks/team';

export default function TeamPlayersSquad({navigation}: any) {
    const screenWidth = Dimensions.get('window').width;
    const themeContext: any = useContext(ThemeContext);
    const selectedTeam = useTeamTeamDetails();


    const goBack = () => {
        navigation.navigate('TeamDetailComponent');
    };

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


