import fetcher from '@/common/utils/fetcher';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetcher<any>({
      path: '/users',
      isExternal: true,
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
