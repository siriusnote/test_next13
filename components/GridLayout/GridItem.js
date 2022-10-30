import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import dynamic from 'next/dynamic';

const importChartView = chartName =>{
    return dynamic(() =>
        import(`../Charts/${chartName}`)
            .catch(() => import(`../Charts/NullChart`))
    )
}

const GridItem = ({item, ...props}) => {
    const Chart = importChartView(item.component)

    return (
        <Card variant="outlined" {...props}>
            <CardContent> 
                <Chart />
            </CardContent>
        </Card>
    )
}

export default GridItem