"use client"
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '/public/logo.svg';
import { LogOutIcon } from 'lucide-react';
import {deleteCookie} from 'cookies-next';
import { useRouter } from 'next/navigation';

export function Header() {
    const router = useRouter();

    async function handleLogout(){
        deleteCookie("session",{path:"/"})
        router.replace("/")
    }
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>

                {/* Logo com link para o dashboard */}
                <Link href="/dashboard">
                    <Image 
                        alt="Logo Sujeito Pizza" 
                        src={logoImg}
                        width={190}
                        height={60}
                        priority={true}
                        quality={100}
                    />
                </Link>
                
                {/* Navegação */}
                <nav>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/dashboard/category">Categoria</Link>
                    <Link href="/dashboard/product">Produto</Link>

                    {/* Botão de logout */}
                    <form action={handleLogout}>
                        <button>
                            <LogOutIcon size={24} color="#FFF" />
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    );
}
