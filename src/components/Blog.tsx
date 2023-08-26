import {
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const Blog = () => {
  return (
    <>
      <Card className="card card__1">
          <CardMedia
            className="card__img"
            component="img"
            height="140"
            image="src/assets/meh.jpg"
            alt="green iguana"
          />
          <CardContent className="card__text">
            <h3>
              {/* {title} {icon} */}
              Heading
            </h3>
            <p>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </p>
          </CardContent>
      </Card>
    </>
  );
};

export default Blog;
