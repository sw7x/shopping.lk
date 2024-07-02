import { GridItem, type GridItemPropsType } from '@containers/shared/FeatureGrid/GridItem';

import '@containers/shared/FeatureGrid/FeatureGrid.css';

type FeatureGridProps = {
	children:
		| React.ReactElement<GridItemPropsType, typeof GridItem>
		| React.ReactElement<GridItemPropsType, typeof GridItem>[];
};

type FeatureGridType = React.FC<FeatureGridProps> & {
	GridItem: React.FC<GridItemPropsType>;
};

export const FeatureGrid: FeatureGridType = ({ children }) => {
	return <div className='row row-sm featured-grid'>{children}</div>;
};

const _GridItem = (props: GridItemPropsType) => {
	return <GridItem {...props}></GridItem>;
};

FeatureGrid.GridItem = _GridItem;
