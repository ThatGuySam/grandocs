import { ReactNode } from 'react'

import Link from 'next/link'

import { AppConfig } from '@/utils/AppConfig'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => (
  <div className="px-1 w-full antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="text-3xl font-bold">{AppConfig.title}</div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="border-none">Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a className="border-none">About</a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>

      <div className="py-8 text-sm text-center border-t border-gray-300">
        This site is not associated with or endorsed by MA Lighting
        International GmbH
      </div>
    </div>
  </div>
)

export { Main }
