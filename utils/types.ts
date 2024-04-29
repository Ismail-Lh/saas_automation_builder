import { ConnectionProviderProps } from '@/providers/connections-provider';

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
