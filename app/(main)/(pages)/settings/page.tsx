import React from 'react';

import prisma from '@/lib/prisma-db';
import ProfileForm from '@/components/forms/profile-form';
import ProfilePicture from './_components/profile-picture';

function SettingsPage() {
  const deleteProfileImage = async () => {
    'use server';

    const response = await prisma.user.update({
      where: { clerkId: '' },
      data: { profileImage: '' },
    });
  };

  const uploadProfileImage = async (image: string) => {
    'use server';
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
          userImage=""
          onUpload={uploadProfileImage}
        />
        <ProfileForm />
      </div>
    </div>
  );
}

export default SettingsPage;
