import {Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function CalorieCounter() {

    return (
        <Card 
            sx={{
                width: '100%',
                height: '50vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >   
            <CardHeader title="Calories"/>
            <CardContent
                sx={{
                width: '100%',
                height: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative', 
            }}
            >
                <CircularProgress variant="determinate" value={100} size={250}></CircularProgress>
                <Typography 
                    variant="caption"
                    component="div"
                    color="text.secondary"
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        fontSize: '2em'
                    }}
                >
                1000 / 1000
                </Typography>
            </CardContent>

            <CardActions>
                <Button><AddIcon/></Button>
            </CardActions>
        </Card>
    );
}