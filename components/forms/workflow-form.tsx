import React from 'react';
import { useRouter } from 'next/navigation';
import { workflowFormSchema } from '@/utils/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

type WorkflowFormProps = {
  title?: string;
  subTitle?: string;
};

function WorkflowForm({ title, subTitle }: WorkflowFormProps) {
  const form = useForm<z.infer<typeof workflowFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(workflowFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const { isLoading } = form.formState;
  const router = useRouter();

  const handelSubmit = async (data: z.infer<typeof workflowFormSchema>) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-[658px] border-none">
      {title && subTitle && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subTitle}</CardDescription>
        </CardHeader>
      )}

      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4 text-left"
            onSubmit={form.handleSubmit(handelSubmit)}
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Your name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Description</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter a description" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-4 hover:bg-[#2F006B] hover:text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Saving Workflow Settings
                </>
              ) : (
                'Save Workflow Settings'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default WorkflowForm;
