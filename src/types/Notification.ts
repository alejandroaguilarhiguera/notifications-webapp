export type Category = 'sports' | 'finance' | 'movies';
export type Channel = 'sms' | 'email' | 'pushNotification';

export interface NotificationAttributes {
  id?: number;
  category: Category;
  channel: Channel;
  message: string;
}
export type NewNotification = Omit<NotificationAttributes, 'id'>;

export interface Notification {
  id: NotificationAttributes['id'];
  category: Category;
  channel: Channel;
  message: string;
  createdAt: string;
}

export default Notification;
