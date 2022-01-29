import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import Colors from '../../../config/Colors';
import {ActivityIndicatorStyled, LoaderStyled} from './styles';
import Text from '../Text';
import Whitespace from '../Whitespace';
import {Metrics} from '../../../config';
import {useTeamIsFetching} from '../../../store/hooks/team';

const Loader = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const [loading, setLoading] = useState(false);
  const teamLoading = useTeamIsFetching();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [loading, fadeAnim]);

  useEffect(() => {
    setLoading(
      teamLoading,
    );
  }, [
    teamLoading,
  ]);

  return loading ? (
    <Animated.View
      style={{
        ...styles,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      <LoaderStyled>
        <Text size={Metrics.fontSize.xsm} color={Colors.mainTheme.black}>
          'Aguarde, carregando'
        </Text>
        <Whitespace height={Metrics.spacingLG}/>
        <ActivityIndicatorStyled size="large" color={Colors.mainTheme.black}/>
      </LoaderStyled>
    </Animated.View>
  ) : (
    <></>
  );
};

export default Loader;

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'absolute',
  width: '100%',
  height: '100%',
};
