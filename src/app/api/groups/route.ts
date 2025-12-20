import { getGroupsDb } from '@/db/groupDb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const groups = await getGroupsDb();
    return NextResponse.json(groups);
  } catch (err) {
    console.error('Failed to fetch groups:', err);
    return NextResponse.json({ error: 'Failed to fetch groups' }, { status: 500 });
  }
}
