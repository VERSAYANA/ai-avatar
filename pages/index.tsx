import Head from 'next/head'
import { useState } from 'react'
import { X } from 'react-feather'
import Image from 'next/image'

export default function Home() {
  const [generatedImage, setGeneratedImage] = useState('')
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  console.log(generatedImage)

  const retry = (estimatedTime: number) => {
    setIsGenerating(true)
    window.setTimeout(() => {
      generate()
    }, (estimatedTime + 5) * 1000)
  }

  const generate = async () => {
    setIsGenerating(true)
    console.log('versayana, ' + prompt)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({ prompt: 'versayana, ' + prompt }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (res.status === 503) {
        const data = await res.json()
        if (data?.estimated_time) {
          retry(data.estimated_time + 1)
        }
      } else if (res.ok) {
        setIsGenerating(false)
        const data = await res.json()
        if (data?.image) {
          setGeneratedImage(data.image)
        }
      } else {
        setIsGenerating(false)
        const err = await res.json()
        console.error(err)
      }
    } catch (error) {
      console.error(error)
      setIsGenerating(false)
    }
  }

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
              <div className="flex h-12 w-full rounded-md drop-shadow-sm">
                <span className="inline-flex cursor-default items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-4 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  versayana,{' '}
                </span>
                <input
                  type={'text'}
                  name="prompt"
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="z-10 block w-full flex-1 rounded-none border border-gray-300 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:text-sm"
                />
                <button
                  onClick={() => setPrompt('')}
                  className="inline-flex items-center justify-center rounded-md rounded-l-none border border-l-0 border-gray-300 bg-white py-2 px-3 text-sm font-medium text-gray-700 drop-shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-100 hover:dark:bg-neutral-800 focus:dark:ring-offset-slate-900"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <a
                href={'https://ai-art-prompt.vercel.app/'}
                target={'_blank'}
                rel="noreferrer"
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 drop-shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-100 hover:dark:bg-neutral-800 focus:dark:ring-offset-slate-900"
              >
                Prompt Generator
              </a>
              <button
                onClick={generate}
                type="button"
                disabled={isGenerating}
                className="inline-flex justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white drop-shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-purple-700 hover:dark:bg-purple-600 focus:dark:ring-offset-slate-900 "
              >
                {isGenerating ? (
                  <span className="loader"></span>
                ) : (
                  <span>Generate</span>
                )}
              </button>
            </div>
            {generatedImage && (
              <div className="flex justify-center py-6">
                <a href={generatedImage} download={`${prompt}`}>
                  <Image
                    className="rounded-2xl drop-shadow-sm"
                    unoptimized={true}
                    src={generatedImage}
                    alt={prompt}
                    width={512}
                    height={512}
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
