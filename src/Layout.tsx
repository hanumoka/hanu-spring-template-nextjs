import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Image from 'next/image';
import ThemeToggler from './ThemeToggler';

import { useQuery } from 'react-query';
import UserApi from './api/UserApi';
import useLoginStore from "./store/useLoginStore";


type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  // const { isLoading, isError, data, error} = useQuery('loginInfo', );

  // const { updateLoginInfo, userId, userEmail, resetLoginInfo } = useLoginStore((state) => state);
  //
  // const { data, isLoading, error } = useQuery(
  //   ['loginInfo'],
  //   async () => {
  //     const res = await UserApi.loginInfo();
  //     // console.log(JSON.stringify(res));
  //     // console.log(JSON.stringify(res.data));
  //     console.log('loginInfo...');
  //     console.log(JSON.stringify(res.data.result));
  //     const { userId, email } = res.data.result;
  //     updateLoginInfo(userId, email);
  //     return res;
  //   },
  //   {
  //     retry: false,
  //   }
  // );

  // const logout = (e : React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   alert("로그아웃");
  //   resetLoginInfo();
  //   router.push('/');
  // }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/*<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-10 transition duration-300">*/}
      <header className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-300 mt-3" href="/">
                <span className="sr-only">Home</span>
                {theme === 'dark' ? (
                  <Image src="/SEBURE-logo-white.png" alt="SEBURE logo" width="64" height="64" />
                ) : (
                  <Image src="/SEBURE-logo.png" alt="SEBURE logo" width="64" height="64" />
                )}
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav className="hidden md:block" aria-labelledby="header-navigation">
                <h2 className="sr-only" id="header-navigation">
                  Header navigation
                </h2>

                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 transition"
                      href="/about"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 transition"
                      href="/blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <ThemeToggler />
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:gap-4 sm:flex">
                  <a
                    className="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow"
                    href="/auth/signin"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="px-5 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-md"
                      href="/auth/register"
                    >
                      Register
                    </a>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="p-2 text-white transition bg-gray-800 rounded hover:text-white/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
};

export default Layout;
