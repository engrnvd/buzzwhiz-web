import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <header className="bg-background shadow">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          {title}
        </h2>
      </div>
    </header>
  )
}

export default Header
