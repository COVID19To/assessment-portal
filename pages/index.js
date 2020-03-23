import MainLayout from '../components/MainLayout';
import Router from 'next/router';

export default function Index() {
    // if (!localStorage.getItem('assessmentPortalLogin')) return Router.replace('/login');
    return (
        <MainLayout>
            <p>Hello to COVID-19 assessment portal.</p>
        </MainLayout>
    );
};