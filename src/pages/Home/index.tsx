import * as React from 'react';
import {AppXScroll, BottomBar, Footer, ScrollPage, TextContainer, TopInfo} from './styles';
import {Dimensions} from 'react-native';
import {PageTitle, TopBar} from '../../styles';

export default function Home({}) {
    const screenWidth = Dimensions.get('window').width;

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
