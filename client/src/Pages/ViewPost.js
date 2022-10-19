import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { sizing } from "@mui/system";
import axios from "axios";
import { UserContext } from "../context/user-context.js";

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function ViewPost(props) {
  //Get id of article from the link
  const location = useLocation();
  const articleId = location.pathname.split("/")[2];

  //Declare state to store user, article, likes and comments
  const [state, reducer] = useContext(UserContext);
  const [article, setArticle] = useState({});
  const [author, setAuthor] = useState({});
  //const numberOfLikes = article.numLikes;
  const [noOfLikes, setNoOfLikes] = useState(article.numLikes);
  const [liked, setLiked] = useState(false);

  //Use article id to get the whole article from MongoDB and Update state
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/client/articles/${articleId}`)
      .then((res) => {
        setArticle(res.data);
        setAuthor(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Like and unlike the post
  function toggleLike() {
    if (liked) {
      const unlikePost = setLiked(false);
      //const subtractLikes = setNoOfLikes(article.numLikes - 1);
      /*axios
        .get(`http://localhost:5000/api/client/articles/${articleId}/like`)
        .then((res) => {
          const newLikesValue = res.data.split("/")[1];
          setNoOfLikes(newLikesValue);
        });*/
    } else {
      const likePost = setLiked(true);
      //const addLikes = setNoOfLikes(article.numLikes + 1);
      /*axios
        .get(`http://localhost:5000/api/client/articles/${articleId}/unLike`)
        .then((res) => {
          const newLikesValue = res.data.split("/")[1];
          setNoOfLikes(newLikesValue);
        });*/
    }
  }

  function edit() {}
  function comment() {}

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        ></Box>
        {/* End hero unit */}

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  maxHeight: "50vh",
                }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {article.title}
                </Typography>
                <Typography>{article.body}</Typography>

                <Button variant="outlined">
                  By {author.firstName} {author.lastName}
                </Button>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={toggleLike}>
                  {noOfLikes}
                  {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <>
                  {state.user.firstName == null ? (
                    <></>
                  ) : (
                    <>
                      <Button size="small" onClick={edit}>
                        Edit
                      </Button>
                      <Button size="small" onClick={comment}>
                        Comment
                      </Button>
                    </>
                  )}
                </>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </main>
      {/* Footer */}
      {/*<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        
      </Box>*/}
      {/* End footer */}
    </ThemeProvider>
  );
}
