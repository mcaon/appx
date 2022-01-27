import * as React from 'react';
import {AppXScroll, BottomBar, Footer, ScrollPage, TextContainer, TopInfo} from './styles';
import {Dimensions} from 'react-native';
import {PageTitle, TopBar} from '../../styles';
import {useEffect} from 'react';
import {useTeamSeasonsRequest} from '../../store/hooks/team';

export default function Home({}) {
    const getSeasons = useTeamSeasonsRequest();
    const screenWidth = Dimensions.get('window').width;

    useEffect(() => {
        getSeasons();
    }, [getSeasons]);

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
                        {/*<Footer>*/}

                        {/*</Footer>*/}
                    </TopBar>
                    <BottomBar>
                        <Footer/>
                    </BottomBar>
                </ScrollPage>
            </AppXScroll>
        </>
    );
}
