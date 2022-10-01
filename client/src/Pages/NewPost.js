import PropTypes from 'prop-types';
import { Box, Container, Grid, Pagination, TextareaAutosize, Button, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';


const publishArticle = async (f, x) => {
  f.preventDefault();
try{
  await alert("Publishing article...")
  //const serverResponse = await axios.post('http://localhost:5000/api/client/signin', x);
//get token and user from response
//const token = await serverResponse.data.token;
//const user = await serverResponse.data.user;

//set JWT token to local
//localStorage.setItem('token', token);
//set token to axios common header
//setAuthToken(token);
//redirect user to home page
//if(user.id){window.location.href = '/'} else {alert ('Login failed.')}
//window.location.href = '/'
  
//  return serverResponse
  
 // {shouldRedirect && <Navigate replace to="/home" />}
 
} catch (error) {alert(`An error occurred: ${error}`)}
}

const NewPost = () => (
<>
      <title>
        Create New Post 
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
          <Button onClick = "publishArticle()">Publish</Button>
        </Box>
      </Container>
    </Box>
  </>
);


export default NewPost;