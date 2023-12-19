import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import Notion from '@/Components/Notion';
import { useForm, Head} from '@inertiajs/react';
 
export default function Index({ auth, notion }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: ''
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('notion.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Notion" />
 
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="Add your notion...(255 char max, required)"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Add</PrimaryButton>
                </form>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight mt-3">Todo</h2>
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {notion.map(notion =>
                        notion.user.id === auth.user.id &&
                            <Notion key={notion.id} notion={notion} finish={true} />
                    )}
                </div>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight mt-3">Finish</h2>
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {notion.map(notion =>
                        notion.user.id === auth.user.id &&
                            <Notion key={notion.id} notion={notion} finish={false} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}