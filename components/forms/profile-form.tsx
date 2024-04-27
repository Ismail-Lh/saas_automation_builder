'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@prisma/client';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

const formSchema = z.object({
  name: z.string().min(3, 'Required'),
  email: z.string().email(),
});

type ProfileFormProps = {
  user: User;
  onUpdate: (name: string, email: string) => any;
};

function ProfileForm({ user, onUpdate }: ProfileFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name ?? '',
      email: user.email,
    },
  });

  const handelSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    await onUpdate(data.name, data.email);
    setIsLoading(false);
  };

  useEffect(() => {
    form.reset({
      name: user.name ?? '',
      email: user.email,
    });
  }, [user, form]);
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handelSubmit)}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Update your username" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Update your email"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="self-start hover:bg-[#2F006B] hover:text-white "
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Saving
            </>
          ) : (
            'Save User Settings'
          )}
        </Button>
      </form>
    </Form>
  );
}

export default ProfileForm;
