import type ChildrenType from '@/types/ChildrenType';

interface Props {
  children?: ChildrenType;
}

const Main = ({ children }: Props): React.ReactElement => (
  <main className="flex-1 pt-24 min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="animate-fade-in">
        {children}
      </div>
    </div>
  </main>
);

export default Main;
