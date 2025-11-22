import { notFound } from 'next/navigation';
import Student from '@/components/Student/Student';
import Page from '@/components/layout/Page/Page';
import { META_DESCRIPTION, META_TITLE } from '@/constants/meta';
import type { Metadata } from 'next';
import { getStudentByIdApi } from '@/api/studentsApi';

interface PageProps {
    params: Promise<{ id: string }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { id } = await params;

    return {
        title: `Студент ${id} — ${META_TITLE}`,
        description: META_DESCRIPTION,
    };
};


const StudentPage = async ({ params }: PageProps) => {
    const { id } = await params;
    const student = await getStudentByIdApi(id);

    if (!student) notFound();

    return (
        <Page>
            <Student student={student} />
        </Page>
    );
};


export default StudentPage;
