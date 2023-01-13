import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { User } from '@/types';

export const useUser = () => {
  const [errorType, setErrorType] = useState<'info' | 'warning' | 'error'>('info');
  const [popupMessage, setPopupMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const { data: users, isLoading } = useSWR<User[]>('users', () => {
    return axios.get<User[]>('/users').then((payload) => payload.data);
  });

  return {
    isLoading,
    errorType,
    errorMessage,
    setErrorType,
    setErrorMessage,
    users,
    setPopupMessage,
    popupMessage,
  };
};

export default useUser;
