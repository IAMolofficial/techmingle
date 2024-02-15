import Card from "./Card";
import "./about.css";
import { Link } from "react-router-dom";
import techfrenzy from "../assets/techfrenzy.png"
import games from "../assets/games.png"
import podcast from "../assets/podcast.png"
import Articles from "../assets/articles.png"
import books from "../assets/books.png"
import workshop from "../assets/workshop.png"

const About = () => {
  return (
    <>
      <div className="page-title">
        <h2>Where tech enthusiasts and fresh minds unite to innovate and thrive</h2>
      </div>
      <div className="container">
      <Card
      image= {techfrenzy}
          content="Place for competition among minds"
          title="Tech-frenzy"
          button={
            <Link to="./Practice">
              Visit
            </Link>
          }
        />
        <Card
        image= {games}
        content="Play games to focus on tactics."
          title="Gaming"
          button={
            <Link to="./Gaming">
              Visit
            </Link>
          }
        />
        <Card
        image= {podcast}
          content="A show for individuals to look as a personality"
          title="Podcast"
          button={
            <Link to="./Podcast">
              Visit
            </Link>
          }

        />
        <Card
        image= {Articles}
          content="Unlock the world bt reading articles"
          title="Articles"
          button={
            <Link to="./articles">
              Visit
            </Link>
          }
        />
      <Card
      image= {workshop}
      content="Place to attend great minds"
      title="Workshop"
      button={
        <Link to="./workshop">
          Visit
        </Link>
      }
    />
        <Card
        image= {books}
        content="Code books, projects, case studies etc"
        title="Books"
        button={
          <Link to="./Books">
            Visit
          </Link>
        }
      />
      </div>
    </>
  );
};

export default About;
