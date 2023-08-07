import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-yellow-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="data:image/jpeg;base64,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"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-yellow-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&lt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 `}>
            Instantly deploy your <span className={`group-hover:text-2xl`}>rishabh</span>  Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
