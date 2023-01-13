import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import { MessageAlert } from '@/components';
import { Notification, ResponseValidationError, ValidationError } from '@/types';

const categories = ['sports', 'finance', 'movies'];
const channels = ['sms', 'email', 'pushNotification'];

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const useNotification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorType, setErrorType] = useState<'info' | 'warning' | 'error'>('info');
  const [defaultCategory] = categories;
  const [defaultChannel] = channels;
  const [categorySelected, setCategorySelected] = useState(defaultCategory);
  const [channelSelected, setChannelSelected] = useState(defaultChannel);
  const [userIdSelected, setUserIdSelected] = useState<number>();
  const [message, setMessage] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
  const { data: history, isLoading: historyIsLoading } = useSWR<Notification[]>(
    'notifications',
    () => {
      return axios.get<Notification[]>('/notifications').then(({ data }) => data);
    },
  );

  async function sendMessage() {
    const errors: ValidationError[] = [];
    setValidationErrors([]);
    if (message === '') {
      errors.push({
        field: 'message',
        message: "Your message don't should be empty",
      });
    }
    if (!userIdSelected) {
      errors.push({
        field: 'userIdSelected',
        message: 'You must select a user',
      });
    }

    if (errors.length) {
      setValidationErrors(errors);
      return;
    }
    // Clear field

    setIsLoading(true);
    setErrorType('info');
    // send a new message

    axios
      .post<{ message: string; notification: Notification }>('/notifications', {
        category: categorySelected,
        channel: channelSelected,
        message,
        UserId: userIdSelected,
      })
      .then(({ data }) => {
        setIsLoading(false);
        setPopupMessage(data.message);
        setUserIdSelected(Number(null));
        toast.custom(() => <MessageAlert>{data.message}</MessageAlert>);
      })
      .catch((payload) => {
        setIsLoading(false);
        setErrorType('warning');
        setPopupMessage(payload.response.body.message);
        toast.custom(() => <MessageAlert>{payload.response.body.message}</MessageAlert>);
        if (payload.response.statusCode === 422) {
          const responseError: ResponseValidationError = payload?.response?.body;
          console.info('responseError', responseError);
        }
      });
    setMessage('');
  }

  return {
    isLoading,
    setIsLoading,
    errorType,
    setErrorType,
    message,
    setMessage,
    sendMessage,
    categories,
    channels,
    categorySelected,
    setCategorySelected,
    channelSelected,
    setChannelSelected,
    setPopupMessage,
    popupMessage,
    history,
    historyIsLoading,
    userIdSelected,
    setUserIdSelected,
    validationErrors,
    setValidationErrors,
  };
};

export default useNotification;
