import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Creators} from '../reducers/example';

export const example = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(Creators.logout());
    }, [dispatch]);
};
