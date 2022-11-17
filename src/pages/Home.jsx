import Card from "../components/Card";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <>
      <div className="p-5">
        <Grid
          container
          rowSpacing={{ xs: 3, sm: 3, md: 3 }}
          columnSpacing={{ xs: 6, sm: 6, md: 6 }}
        >
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
