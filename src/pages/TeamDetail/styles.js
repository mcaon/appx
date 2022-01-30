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

export const TeamInfoText = styled.Text`
    font-size: 20px;
`;

export const VenueDetaisView = styled.View`
    margin-top: 5px;
    padding: 20px;
`;

export const VenueLabel = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const TeamButtonsScroll = styled.View`
    flex: 9;
    flex-direction: row;
    padding: 10px;
    background: ${({theme}) => theme.palette.backGround};
    justify-content: center;
`;

export const ButtonView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    elevation: 4;
    background: ${({theme}) => theme.palette.textGrey};
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 2px;
    height: 70px;
    border-radius: 20px;
`;

export const ButtonTouchable = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    padding: 5px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 2px;
    height: 70px;
    width: 100px;
    border-radius: 20px;
`;

export const EventDescriptionView = styled.View`
    flex: 4;
`;

export const EventTitleLabel = styled.Text`
    color: ${({theme}) => theme.palette.textSecondary};
    font-weight: bold;
    font-size: 17px;
`;

export const ButtonTextView = styled.View`
    flex-direction: row;
    justify-content: center;
`;
