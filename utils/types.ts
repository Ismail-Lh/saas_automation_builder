import { ConnectionProviderProps } from '@/providers/connections-provider';
import { z } from 'zod';

export type ConnectionTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord';

export type Connection = {
  title: ConnectionTypes;
  description: string;
  imageSrc: string;
  connectionKey: keyof ConnectionProviderProps;
  accessTokenKey?: string;
  alwaysTrue?: boolean;
  slackSpecial?: boolean;
};

export const workflowFormSchema = z.object({
  name: z.string().min(3, 'Required'),
  description: z.string().min(4, 'Required'),
});
