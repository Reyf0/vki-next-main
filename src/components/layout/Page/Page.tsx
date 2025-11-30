import type ChildrenType from '@/types/ChildrenType';

interface Props {
  children?: ChildrenType;
}

const Page = ({ children }: Props): React.ReactElement => (
  <div className="space-y-8">
    {children}
  </div>
);

export default Page;
