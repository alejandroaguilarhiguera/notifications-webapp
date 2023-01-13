import { Category, Channel } from '@/types';

export interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  subscribed: Category[];
  channels: Channel[];
}
