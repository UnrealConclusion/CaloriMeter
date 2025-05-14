import { Card, CardHeader } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

export default function LoginPage() {
    return (
        <>
            <Card sx={{ 
                maxWidth: 500, 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CardContent>
                    <CardHeader title="Sign In" sx={{textAlign: 'center'}}/>
                    <Box
                        component="form"
                        sx={{ 
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="username-input"
                            label="Username"
                            autoComplete="username"
                        />
                        <TextField
                            id="password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"/>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">Sign In&nbsp;<LoginIcon/></Button>
                </CardActions>
            </Card>
        </>
    );
}