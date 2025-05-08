'use client';
import {
    Button,
    Navbar,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    TextInput,
} from 'flowbite-react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from '@clerk/nextjs';
import { useEffect, useState } from 'react';
// import {useSearchParams } from 'next/navigation';
import { ModeToggle } from './ModeToggle';
import { useTheme } from 'next-themes';
import { dark, neobrutalism } from '@clerk/themes';

export default function Header() {
    const { theme } = useTheme();
    const path = usePathname();
    // const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    // const searchParams = useSearchParams();

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    const handleSubmit = () => {
        // e.preventDefault();
        // const urlParams = new URLSearchParams(searchParams);
        // urlParams.set('searchTerm', searchTerm);
        // const searchQuery = urlParams.toString();
        // router.push(`/search?${searchQuery}`);
    };

    // useEffect(() => {
    //     const urlParams = new URLSearchParams(searchParams);
    //     const searchTermFromUrl = urlParams.get('searchTerm');
    //     if (searchTermFromUrl) {
    //         setSearchTerm(searchTermFromUrl);
    //     }
    // }, [searchParams]);

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
                    {hasMounted && (
                        <UserButton
                            appearance={{
                                baseTheme: theme === 'dark' ? dark : neobrutalism,
                            }}
                        />
                    )}
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <Button className="bg-gradient-to-br from-purple-600 to-blue-500 !text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800" outline>
                            Sign In
                        </Button>
                    </SignInButton>
                </SignedOut>
                <NavbarToggle />
            </div>

            <NavbarCollapse>
                <NavbarLink active={path === '/'} as='div'>
                    <Link href='/'>Home</Link>
                </NavbarLink>
                <NavbarLink active={path === '/about'} as='div'>
                    <Link href='/about'>About</Link>
                </NavbarLink>
                <NavbarLink active={path === '/projects'} as='div'>
                    <Link href='/projects'>Projects</Link>
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
