import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
// import CodeMirror from 'react-codemirror2';
import { Controlled as CodeMirror } from 'react-codemirror2'
import { useState } from 'react';

// import App.css 
import '../App.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


const Container = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
    
`

const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between; { /* equal space between 2 elements */}
    font-weight: 700;
`


const Editor = ({heading, icon, color, value, onChange}) => {

    const [open, setOpen] = useState(true);
    

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <Container style={open ? null : {flexGrow:0}}>
            <Header>
                <Heading>
                    <Box
                        component="span"
                        style={{
                            backgroundColor: color,
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            paddingBottom: 2,
                            color: '#000'
                        }}
                    >{icon}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon 
                    fontSize="small"
                    style = {{alignSelf: 'center', cursor: 'pointer'}}
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Header>
            <CodeMirror
                className='controlled-editor'
                value = {value}
                onBeforeChange={handleChange}
                options={{
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </Container>
    );
}

export default Editor;