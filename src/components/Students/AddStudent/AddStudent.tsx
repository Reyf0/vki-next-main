import type StudentInterface from '@/types/StudentInterface';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type GroupInterface from '@/types/GroupInterface';

export type FormFields = Pick<StudentInterface, 'firstName' | 'lastName' | 'middleName' | 'groupId'>;

interface Props {
    onAdd: (studentForm: FormFields) => void;
    groups: GroupInterface[];
}

const AddStudent = ({ onAdd, groups }: Props): React.ReactElement => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = studentForm => onAdd(studentForm);

    return (
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-neutral-900 shadow-xl max-w-md">
            <h2 className="text-2xl font-bold text-center mb-4">Добавление студента</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <input
                        className="p-3 border rounded-2xl bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700 outline-none transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        placeholder="Фамилия"
                        {...register('lastName', { required: true })}
                    />
                    {errors.lastName && <div className="text-red-500 text-sm pl-2">Обязательное поле</div>}
                </div>

                <div className="flex flex-col gap-1">
                    <input
                        className="p-3 border rounded-2xl bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700 outline-none transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        placeholder="Имя"
                        {...register('firstName', { required: true })}
                    />
                    {errors.firstName && <div className="text-red-500 text-sm pl-2">Обязательное поле</div>}
                </div>

                <div className="flex flex-col gap-1">
                    <input
                        className="p-3 border rounded-2xl bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700 outline-none transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        placeholder="Отчество"
                        {...register('middleName', { required: true })}
                    />
                    {errors.middleName && <div className="text-red-500 text-sm pl-2">Обязательное поле</div>}
                </div>

                <div className="flex flex-col gap-1">
                    <select
                        className="p-3 border rounded-2xl bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700 outline-none transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        {...register('groupId', { required: true })}
                    >
                        <option value="">Выберите группу</option>
                        {groups.map(group => (
                            <option value={group.id} key={group.id} className="dark:bg-black">
                                {group.name}
                            </option>
                        ))}
                    </select>
                    {errors.groupId && <div className="text-red-500 text-sm pl-2">Обязательное поле</div>}
                </div>

                <input
                    className="p-3 border rounded-2xl bg-blue-600 text-white font-semibold cursor-pointer hover:bg-blue-700 hover:scale-105 active:scale-95 transition"
                    type="submit"
                    value="Добавить"
                />
            </form>
        </div>
    );
};

export default AddStudent;