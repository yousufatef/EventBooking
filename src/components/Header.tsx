'use client';
import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ModeToggle } from './ModeToggle';

// import { dark, light } from '@clerk/themes';
export default function Header() {
    const path = usePathname();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const searchParams = useSearchParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(searchParams);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        router.push(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(searchParams);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [searchParams]);
    return (
        <Navbar className='border-b-2'>
            <Link
                href='/'
                className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
            >
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                    Our
                </span>
                Blog
            </Link>
            <form onSubmit={handleSubmit}>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <ModeToggle />
                <SignedIn>
                    <UserButton
                        // appearance={{
                        //     baseTheme: theme === 'light' ? light : dark,
                        // }}
                        userProfileUrl='/dashboard?tab=profile'
                    />
                </SignedIn>
                <SignedOut>
                    <Link href='/sign-in'>
                        <Button className="bg-gradient-to-br from-purple-600 to-blue-500 !text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800" outline>
                            Sign In
                        </Button>
                    </Link>
                </SignedOut>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <Link href='/'>
                    <NavbarLink active={path === '/'} as={'div'}>
                        Home
                    </NavbarLink>
                </Link>
                <Link href='/about'>
                    <NavbarLink active={path === '/about'} as={'div'}>
                        About
                    </NavbarLink>
                </Link>
                <Link href='/projects'>
                    <NavbarLink active={path === '/projects'} as={'div'}>
                        Projects
                    </NavbarLink>
                </Link>
            </NavbarCollapse>
        </Navbar>
    );
}