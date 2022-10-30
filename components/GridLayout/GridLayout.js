import {Responsive, WidthProvider} from "react-grid-layout"
import GridItem from './GridItem';
import layoutConfig from './layoutConfig'
import {layouts} from '@/lib/data'

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function GridLayout(){
    return (
        <ResponsiveGridLayout
            layouts={layoutConfig}
            containerPadding={[20,20]}
            margin={[20,20]}
            isBounded={true}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
            {layouts.map(item => {
                return (
                    <GridItem key={item.id} item={item}/>
                )
            })}
        </ResponsiveGridLayout>
    )
}