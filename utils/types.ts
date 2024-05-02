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

export type EditorCanvasTypes =
  | 'Email'
  | 'Condition'
  | 'AI'
  | 'Slack'
  | 'Google Drive'
  | 'Notion'
  | 'Custom Webhook'
  | 'Google Calendar'
  | 'Trigger'
  | 'Action'
  | 'Wait';

export type EditorCanvasCardType = {
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
  metadata: any;
  type: EditorCanvasTypes;
};

export type EditorNodeType = {
  id: string;
  type: EditorCanvasCardType['type'];
  position: {
    x: number;
    y: number;
  };
  data: EditorCanvasCardType;
};
