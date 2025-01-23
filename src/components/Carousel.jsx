import Carousel from "react-bootstrap/Carousel";
import hero1 from "../assets/img/img-hero1.jpg";
import hero2 from "../assets/img/img-hero2.jpg";
import hero3 from "../assets/img/img-hero3.jpg";
import "./carousel.css";

var heroData = [
  {
    id: 1,
    image: hero1,
    title: "The perfect design for your website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
  },
  {
    id: 2,
    image: hero2,
    title: "Start Your Future Financial Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
  },
  {
    id: 3,
    image: hero3,
    title: "Enjoy the Difference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
  },
];

const Hero = () => {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <div className="overlay">
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={`Slide ${hero.id}`}
                />
              </div>
              <Carousel.Caption className="relative">
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Hero;
