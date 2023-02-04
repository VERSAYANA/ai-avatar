import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="h-full min-h-screen w-full overflow-x-hidden dark:bg-black">
        <div className="container mx-auto flex h-full min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-6">
          <div className="flex flex-col px-2">
            <h1 className="text-center text-4xl font-bold text-gray-900/95 dark:text-gray-50/95 md:text-5xl lg:text-6xl">
              Turn me into anything you want
            </h1>
            <p className="mb-7 mt-10 text-center text-base font-medium text-gray-800/80 dark:text-gray-100/80 sm:text-lg md:text-xl">
              Use your creativty to create a prompt or use my prompt generator
              tool for inspiration
            </p>
          </div>
          <div className="flex w-full max-w-3xl flex-col gap-4">
            <div className="flex flex-col">
              {/* <label
                htmlFor="prompt"
                className="mb-2 ml-1 block text-base font-medium text-gray-800/80"
              >
                Prompt
              </label> */}
              <div className="flex h-12 w-full rounded-md drop-shadow-sm">
                <span className="inline-flex cursor-default items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-4 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  versayana,{' '}
                </span>
                <input
                  type={'text'}
                  name="prompt"
                  id="prompt"
                  className="block w-full flex-1 rounded-none rounded-r-md border border-gray-300 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <a
                href={'https://ai-art-prompt.vercel.app/'}
                target={'_blank'}
                rel="noreferrer"
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 drop-shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-100 hover:dark:bg-neutral-800"
              >
                Prompt Generator
              </a>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white drop-shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-700 hover:dark:bg-purple-600 "
              >
                Generate
              </button>
            </div>
            {/* <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                http://
              </span>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="www.example.com"
              />
            </div> */}
          </div>
        </div>
      </main>
    </>
  )
}
