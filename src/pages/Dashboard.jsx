import BlogCard from "../components/BlogCard";
import { useBlogContext } from "../contexts/BlogContextProvider";

import loadingGif from "../assets/loading.gif";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  title: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },
  mainRoot: {
    marginTop: 70,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const {currentBlogs} = useBlogContext()
  console.log(currentBlogs);

  return (
    <div className={classes.mainRoot}>
      <Typography className={classes.title} variant="h3" noWrap>
        ──── Dashboard ────
      </Typography>
      <>
        <Grid
          container
          className={classes.root}
          spacing={5}
          justifyContent="center"
        >
          {currentBlogs?.map((item, id) => (
              <Grid key={id} item>
                <BlogCard {...item} />
              </Grid>
            ))}
           
          
        </Grid>
      </>
    </div>
  )
}

export default Dashboard