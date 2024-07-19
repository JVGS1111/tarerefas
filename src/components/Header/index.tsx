import { ArrowLeft, GithubLogo } from '@phosphor-icons/react'

interface HeaderProps {
  title: string
  variante: 'home' | 'create'
}

export function Header({ title, variante = 'home' }: HeaderProps) {
  function renderActionBar() {
    if (variante === 'home') {
      return (
        <div className="flex w-full" data-testid="home-variant">
          <a
            className="ml-auto"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JVGS1111/tarerefas"
          >
            <button>
              <GithubLogo className="text-title" size={32} />
            </button>
          </a>
        </div>
      )
    }

    return (
      <div className="flex w-full justify-between" data-testid="create-variant">
        <button>
          <ArrowLeft className="text-title" size={32} />
        </button>
        <button className="font-medium text-title disabled:text-text">
          done
        </button>
      </div>
    )
  }

  return (
    <header className="flex h-52 w-full justify-center bg-white">
      <div className="flex w-full max-w-app flex-col justify-between pb-9 pl-6 pr-6 pt-6">
        {renderActionBar()}
        <div className="mt-auto max-w-80 text-2xl font-medium text-title">
          {title}
        </div>
      </div>
    </header>
  )
}
