import React, { useState } from 'react';
import UserApi from '../../api/UserApi';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const submitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submitLogin...');
    const res = await UserApi.signin(username, password);
    console.log(res);
  };

  return (
    <>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">로그인</h1>

          <p className="mt-4 text-gray-500">로그인을 하셔야 글을 작성하실수 있어요.</p>
        </div>

        <form onSubmit={submitLogin} className="max-w-md mx-auto mt-8 mb-0 space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter email"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              계정이없으세요?? &nbsp;
              <a className="underline" href="/auth/register">
                회원가입
              </a>
            </p>

            <button
              type="submit"
              className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
              로그인
            </button>
          </div>
        </form>
        {/*<button onClick={fetchTest}>자기정보조회</button>*/}
        {/*{isSuccess && (<div>*/}
        {/*  {JSON.stringify(data)}*/}
        {/*</div>)}*/}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      // csrfToken: await getCsrfToken(context),
    },
  };
}
