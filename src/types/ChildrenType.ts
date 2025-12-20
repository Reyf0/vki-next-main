import { ReactNode } from 'react';

type ChildrenType = React.ReactElement[] | React.ReactElement | string | (React.ReactElement | string)[] | ReactNode;

export default ChildrenType;
