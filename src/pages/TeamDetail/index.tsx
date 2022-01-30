import * as React from 'react';
import {useContext} from 'react';
import {AppXInnerScrollView, AppXScroll, BottomBar, Footer, PageTitle, ScrollPage, TopBar} from '../../styles';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {
    IconContainer,
    LogoView,
    TeamDetailsView,
    TeamInfoText,
    TeamInfoView,
    TeamName,
    TextContainer,
    TopInfoTeamDetail,
    VenueDetaisView,
    VenueLabel,
} from './styles';
import {Avatar} from 'react-native-paper';
import {Icon} from 'react-native-elements';
// @ts-ignore
import {ThemeContext} from 'styled-components/native';
import {useTeamTeamDetails} from '../../store/hooks/team';

export default function TeamDetail({navigation}: any) {
    const screenWidth = Dimensions.get('window').width;
    const themeContext: any = useContext(ThemeContext);
    const selectedTeam = useTeamTeamDetails();

    const styles = StyleSheet.create({
        image: {
            width: screenWidth,
            height: 200,
        },
    });

    const goBack = () => {
        navigation.goBack();
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
                                <PageTitle>Team Detail</PageTitle>
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
                                <TeamDetailsView>
                                    <TeamInfoText>{selectedTeam.team?.country}</TeamInfoText>
                                </TeamDetailsView>
                                <TeamDetailsView>
                                    <TeamInfoText>{selectedTeam.team?.founded}</TeamInfoText>
                                </TeamDetailsView>
                            </TeamInfoView>
                            <VenueDetaisView>
                                <VenueLabel>Venue</VenueLabel>
                                <TeamInfoText>Name: {selectedTeam.venue?.name}</TeamInfoText>
                                <TeamInfoText>Address: {selectedTeam.venue?.address}</TeamInfoText>
                                <TeamInfoText>City: {selectedTeam.venue?.city}</TeamInfoText>
                                <TeamInfoText>Capacity: {selectedTeam.venue?.capacity}</TeamInfoText>
                                <TeamInfoText>Surface: {selectedTeam.venue?.surface}</TeamInfoText>

                            </VenueDetaisView>
                            <Image resizeMode={'contain'}
                                   style={styles.image}
                                   source={{uri: selectedTeam.venue?.image}}
                            />

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


