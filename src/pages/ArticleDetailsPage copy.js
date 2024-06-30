import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  Avatar,
  Chip,
} from "@mui/material";

const ArticleDetailsPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={3}>
          <Box sx={{ flexGrow: 1, padding: 3 }}>
            {/* Intro Section */}

            <Box sx={{ marginBottom: 4 }}>
              <Typography variant="h3" component="h1" gutterBottom>
                How to Find a Lost Cat
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                If your cat is missing, there are a variety of things you can do
                to find them. Stressed cats will usually not respond to their
                owners' calls. Focus your efforts on a thorough search,
                spreading the word and flyers around to as many people as you
                can, and encouraging the cat to return on its own. These are the
                best ways to get your kitty back home.
              </Typography>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  src="https://via.placeholder.com/150"
                  alt="Author Name"
                />
                <Box ml={2}>
                  <Typography variant="h6">Author Name</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Published on: June 5, 2023
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Source:{" "}
                    <a href="https://source-link.com">source-link.com</a>
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Grid container spacing={3}>
              {/* Main Content */}
              <Grid item xs={12} md={8}>
                <Card>
                  <CardMedia
                    sx={{ height: 400 }}
                    image="https://via.placeholder.com/800x400"
                    title="Article Image"
                  />
                  <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom>
                      Article Title
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Avatar
                        sx={{ width: 56, height: 56 }}
                        src="https://via.placeholder.com/150"
                        alt="Author Name"
                      />
                      <Box ml={2}>
                        <Typography variant="h6">Author Name</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Author Bio goes here. Brief information about the
                          author.
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        marginTop: 2,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                    >
                      <Typography variant="subtitle1" gutterBottom>
                        Tags:
                      </Typography>
                      <Chip label="Tag1" variant="outlined" />
                      <Chip label="Tag2" variant="outlined" />
                      <Chip label="Tag3" variant="outlined" />
                      <Chip label="Tag4" variant="outlined" />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          {/* Main Content */}
          {/* Sidebar */}

          {/* <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  src="https://via.placeholder.com/150"
                  alt="Author Name"
                />
                <Box ml={2}>
                  <Typography variant="h6">Author Name</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Author Bio goes here. Brief information about the author.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ marginTop: 2, display: "flex", flexWrap: "wrap", gap: 1 }}
              >
                <Typography variant="subtitle1" gutterBottom>
                  Tags:
                </Typography>
                <Chip label="Tag1" variant="outlined" />
                <Chip label="Tag2" variant="outlined" />
                <Chip label="Tag3" variant="outlined" />
                <Chip label="Tag4" variant="outlined" />
              </Box>
            </CardContent>
          </Card>
        </Grid> */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardMedia
                sx={{ height: 400 }}
                image="https://www.wikihow.com/images/thumb/0/0d/Find-a-Lost-Cat-Step-1-Version-5.jpg/aid140371-v4-728px-Find-a-Lost-Cat-Step-1-Version-5.jpg"
                title="Article Image"
              />
              <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                  <span style={{ fontWeight: "700" }}>1.</span> Start searching
                  immediately.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  If you conduct an extensive search immediately, there's a good
                  chance you'll find the cat near the last place they were seen.
                  The more time has passed, the more likely your cat is to roam
                  far from home.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Stay calm. It is natural to feel upset, but panicking won't
                  help you or your cat. Taking action immediately can mitigate
                  anxiety.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  If you recently moved, go back to your old place and search.
                  If you moved far from your original home, ask friends, family,
                  and old neighbors who are still living there to search for
                  you.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Check any spaces where a cat could hide. This means inside
                  sheds, garages, beneath decking, in bushes, up trees or on the
                  roof.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardMedia
                sx={{ height: 400 }}
                image="https://www.wikihow.com/images/thumb/1/1f/Find-a-Lost-Cat-Step-2-Version-5.jpg/aid140371-v4-728px-Find-a-Lost-Cat-Step-2-Version-5.jpg"
                title="Article Image"
              />
              <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                  <span style={{ fontWeight: "700" }}>2.</span> Carry a
                  flashlight.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Even in daylight, bring a flashlight so you can look in dark
                  places, and catch the reflection of your cat's eyes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardMedia
                sx={{ height: 400 }}
                image="https://www.wikihow.com/images/thumb/b/bd/Find-a-Lost-Cat-Step-3-Version-5.jpg/aid140371-v4-728px-Find-a-Lost-Cat-Step-3-Version-5.jpg"
                title="Article Image"
              />
              <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                  <span style={{ fontWeight: "700" }}>3.</span> Call quietly for
                  the cat.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Don't assume your cat will respond to your voice as they
                  normally do. A missing their is often a terrified cat, and may
                  not want to leave its hiding spot even for you. Call for them
                  in a soft, quiet voice, to avoid scaring the cat further.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardMedia
                sx={{ height: 400 }}
                image="https://www.wikihow.com/images/thumb/a/a9/Find-a-Lost-Cat-Step-4-Version-5.jpg/aid140371-v4-728px-Find-a-Lost-Cat-Step-4-Version-5.jpg"
                title="Article Image"
              />
              <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                  <span style={{ fontWeight: "700" }}>4.</span> Stop and listen
                  regularly.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  A cat that is trapped may possibly meow. Whether you're
                  searching by yourself or with a group, take a few minutes in
                  every area you search to listen quietly and attentively for a
                  meow.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardMedia
                sx={{ height: 400 }}
                image="https://www.wikihow.com/images/thumb/0/09/Find-a-Lost-Cat-Step-5-Version-5.jpg/aid140371-v4-728px-Find-a-Lost-Cat-Step-5-Version-5.jpg"
                title="Article Image"
              />
              <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                  <span style={{ fontWeight: "700" }}>5.</span> Keep other
                  animals away.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Another cat in the area could have chased your cat away,
                  especially if that cat or you have recently moved there. Ask
                  other cat owners to keep their pets inside while you look for
                  yours, and be prepared to increase the scope of your search as
                  you cover the ground closest to home.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  If you have dogs, their enthusiasm may frighten your cat
                  during the search. However, if your dog loves the cat and the
                  feeling is mutual it may be useful to bring the dog on a
                  search.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardMedia
                sx={{ height: 400 }}
                image="https://via.placeholder.com/800x400"
                title="Article Image"
              />
              <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                  Article Title
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body1" paragraph>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ArticleDetailsPage;
