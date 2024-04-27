import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import { User } from '@prisma/client';

import prisma from '@/lib/prisma-db';
import ProfileForm from '@/components/forms/profile-form';
import ProfilePicture from './_components/profile-picture';

async function SettingsPage() {
  const authUser = await currentUser();

  if (!authUser) return null;

  const user = (await prisma.user.findUnique({
    where: { clerkId: authUser.id },
  })) as User;

  const deleteProfileImage = async () => {
    'use server';

    const response = await prisma.user.update({
      where: { clerkId: authUser.id },
      data: { profileImage: '' },
    });

    return response;
  };

  const uploadProfileImage = async (image: string) => {
    'use server';

    const response = await prisma.user.update({
      where: { clerkId: authUser.id },
      data: { profileImage: image },
    });

    return response;
  };

  const updateUserInfo = async (name: string, email: string) => {
    'use server';

    const response = await prisma.user.update({
      where: { clerkId: authUser.id },
      data: { name, email },
    });

    return response;
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-10 flex items-center border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Settings
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            {' '}
            Add or update your information
          </p>
        </div>
        <ProfilePicture
          onDelete={deleteProfileImage}
          userImage={user?.profileImage || ''}
          onUpload={uploadProfileImage}
        />
        <ProfileForm user={user} onUpdate={updateUserInfo} />
      </div>
    </div>
  );
}

export default SettingsPage;
