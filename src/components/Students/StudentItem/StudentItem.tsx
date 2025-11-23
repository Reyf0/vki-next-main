import type StudentInterface from '@/types/StudentInterface';
import styles from './StudentItem.module.scss';
import Link from 'next/link';

interface Props {
  student: StudentInterface;
  onDelete: (id: number) => void;
}

const Student = ({ student, onDelete }: Props): React.ReactElement => {
  const onDeleteHandler = (): void => {
    onDelete(student.id);
  };

  const modifier = student.isDeleted ? '--isDeleted' : student.isNew ? '--isNew' : '';

  return (
    <div className={`${styles.StudentItem} ${styles[modifier]}`}>
      <Link href={`/students/${student.id}`}>
        {`${student.id || 'xxxx'} - ${student.lastName} ${student.firstName} ${student.middleName} (${student?.group?.name})`}
      </Link>
      <button className="border rounded-full px-2 hover:scale-110 transition" onClick={onDeleteHandler}>Удалить</button>
    </div>
  );
};

export default Student;
