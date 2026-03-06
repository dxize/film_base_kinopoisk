import { Suspense } from 'react';
import { connection } from 'next/server';
import FilmsClient from './FilmsClient';

export default async function Page() {
    await connection();

    return (
        <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
            <FilmsClient />
        </Suspense>
    );
}