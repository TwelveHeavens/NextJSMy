import * as React from 'react';
import { Container } from './container';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';


interface Props {
    className?: string;
    }

    export const Header: React.FC<Props> = ({ className }) => {
        return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                {/* Левый блок */}
                <div className='flex gap-4'>
                    <img src="./iconpizza.svg" alt='Лого' width={35} height={35}/>
                    <div className='text-center'>
                        <h1 className='text-2xl uppercase font-black'>next pizza</h1>
                        <p className='text-base'>вкуснее уже некуда</p>
                    </div>
                </div>
                {/* Правый блок */}
                <div className=''>
                    <Button variant='outline' className=''>Войти</Button>
                </div>
            </Container>
        </header>
        );
    }