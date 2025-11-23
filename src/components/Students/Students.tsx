'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';
import StudentItem from './StudentItem/StudentItem';
import AddStudent, { type FormFields } from './AddStudent/AddStudent';
import { v4 as uuidv4 } from 'uuid';
import useGroups from '@/hooks/useGroups';
import React from 'react'

const Students = (): React.ReactElement => {
  const {
    students,
    deleteStudentMutate,
    addStudentMutate,
  } = useStudents();

  const { groups } = useGroups();

  const onDeleteHandler = (studentId: number): void => {
    if (confirm('Удалить студента?')) {
      console.log('onDeleteHandler', studentId);
      debugger;

      deleteStudentMutate(studentId);
    }
  };

  const onAddHandler = (studentFormField: FormFields): void => {
    console.log('Добавление студента', studentFormField);
    debugger;

    addStudentMutate({
      id: -1,
      ...studentFormField,
      uuid: uuidv4(),
    });
  };

  return (
    <div className={styles.Students}>
      <AddStudent onAdd={onAddHandler} groups={groups} />

      {students.map((student: StudentInterface) => (
        <StudentItem
          key={student.id || student.uuid}
          student={student}
          onDelete={onDeleteHandler}
        />
      ))}
    </div>
  );
};

export default Students;
