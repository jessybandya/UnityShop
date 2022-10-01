import PropTypes from 'prop-types';
import { Box, Container, Grid, Pagination, TextareaAutosize, Button, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';



const EditPost = () => (
  <>
      <title>
        Edit Post 
      </title>
     <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          
<Typography variant="h6" component="box">
  Title
</Typography>

          <TextareaAutosize
  maxRows={2}
  aria-label="maximum height"
  placeholder="Maximum 4 rows"
  defaultValue="Enter text."
  style={{ width: "100%", height: "5vh" }} />
          
  
<Typography variant="h6">
  Body
</Typography>

          <TextareaAutosize
  maxRows={4000}
  aria-label="maximum height"
  placeholder="Maximum 4 rows"
  defaultValue="Enter text."
  style={{ width: "100%", height: "25vh" }}
/>
          <Typography>
  Attachments:
</Typography>
          <Button><UploadFileIcon /> Upload File</Button>
          <Button>Publish</Button>
        </Box>
      </Container>
    </Box>
  </>
);

export default EditPost;