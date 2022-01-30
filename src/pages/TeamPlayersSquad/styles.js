import styled from 'styled-components/native';

export const TeamInfoView = styled.View`
    elevation: 5;
    background: ${({theme}) => theme.palette.textGrey};
    flex: 1;
    padding: 10px;
`;

export const LogoView = styled.View`
    flex-direction: row;
    justify-content: center;
    padding: 20px;
    background: ${({theme}) => theme.palette.textGrey};
`;

export const TopInfoTeamDetail = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding-right: 20px
`;

export const TextContainer = styled.View`
    padding: 20px;
`;

export const IconContainer = styled.View`
    padding: 20px 0px 0px 20px;
`;

export const TeamDetailsView = styled.View`
    justify-content: center;
    flex-direction: row;
`;

export const TeamName = styled.Text`
    font-size: 30px;
    font-weight: bold;
    padding: 5px;
`;

export const PlayerTextView = styled.View`
    justify-content: flex-start;
`;

export const PlayerPhotoView = styled.View`
    justify-content: center;
    padding: 0px 20px 0px 30px;
    margin-left: 40px;
    flex-direction: row;
`;

export const ButtonPlayerTouchable = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    padding: 5px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 2px;
    height: 100px;
    width: 100px;
    border-radius: 20px;
`;

export const ButtonPlayerView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    elevation: 4;
    background: ${({theme}) => theme.palette.textGrey};
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 2px;
    height: 110px;
    border-radius: 20px;
`;

export const TeamPlayerScroll = styled.ScrollView`
    padding: 10px;
    background: ${({theme}) => theme.palette.backGround};
`;

export const EventPlayersDescriptionView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
