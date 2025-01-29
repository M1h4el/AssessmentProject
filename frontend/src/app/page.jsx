'use client';

import LogBar from './LogBar'
import { useData } from '@/context/DataContext';
import RegisterForm from './RegisterForm'

export default function HomePage() {

    let { login, isLogin } = useData();

    return (
        <>
            <LogBar />
            <RegisterForm />
        </>
    )
}