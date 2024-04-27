'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import UploadCareButton from './uploadcare-button';

type ProfilePictureProps = {
  onDelete: () => void;
  onUpload: (e: string) => any;
  userImage: string;
};

function ProfilePicture({
  onDelete,
  userImage,
  onUpload,
}: ProfilePictureProps) {
  const router = useRouter();

  const onDeleteProfileImage = async () => {
    onDelete();
    router.refresh();
  };

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image src={userImage} alt="Profile Image" fill />
            </div>

            <Button
              onClick={onDeleteProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
}

export default ProfilePicture;
