import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`

const Editor = () => {
    return (
        <Box>
            <Box>
                <Heading>
                   <Box 
                    component="span" 
                    style={{
                            backgroundColor: "red",
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            paddingBottom: 2
                    }}
                   >/</Box>
                    HTML
                </Heading>
                <CloseFullscreenIcon />
            </Box>
            <Box>

            </Box>
        </Box>
    );
}

export default Editor;