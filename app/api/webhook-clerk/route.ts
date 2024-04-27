import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma-db';

export async function POST(req: Request, res: NextResponse) {
  try {
    const body = await req.json();
    const {
      id: clerkId,
      emailAddresses,
      name,
      profileImage,
    } = body?.data ?? {};

    console.log('User data: ', body);
    const email = emailAddresses?.[0]?.emailAddress ?? '';

    await prisma.user.upsert({
      where: { clerkId },
      update: { email, name, profileImage },
      create: { clerkId, email, name, profileImage },
    });

    return new NextResponse('User created/updated successfully!', {
      status: 200,
    });
  } catch (error: unknown) {
    const message = (error as Error).message || 'An error occurred';

    console.error(`Updating/Creating user error: ${message}`);
    return new NextResponse(`Updating/Creating user error: ${message}`, {
      status: 500,
    });
  }
}
