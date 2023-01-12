import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import { MessageAlert } from '@/components';
import { Notification, ResponseValidationError } from '@/types';

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
  const [message, setMessage] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const { data: history, isLoading: historyIsLoading } = useSWR<Notification[]>(
    'notifications',
    () => {
      return axios.get<Notification[]>('/notifications').then((payload) => payload.data);
    },
  );

  useEffect(() => {
    if (message) {
      setErrorMessage(undefined);
    }
  }, [message]);

  async function sendMessage() {
    if (message === '') {
      setErrorMessage(`Your message don't should be empty`);
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
      })
      .then(({ data }) => {
        setIsLoading(false);
        setPopupMessage(data.message);
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

  // async function getHistory(): Promise<Notification[]> {
  //   // Clear field

  //   setIsLoading(true);
  //   setErrorType('info');
  //   // send a new message
  //   setPopupMessage('');
  //   const notifications = await axios.get<Notification[]>('/notifications');
  //   return notifications.data;
  // }

  return {
    isLoading,
    setIsLoading,
    errorType,
    errorMessage,
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
  };
};

export default useNotification;
