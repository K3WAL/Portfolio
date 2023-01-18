import React from "react";
import "./testimonials.css";
import Image1 from "../../img/Image1.jpg";
import Image2 from "../../img/Image2.jpg";
import Image3 from "../../img/Image3.jpg";
import Image4 from "../../img/Image4.jpg";
import Image5 from "../../img/Image5.jpg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Sandesh Katwal",
    subtitle: "Product designer at Dribble",
    comment: "sjbjc adadsahdadsdsjncas  duahudanasnajcascacn sadaad",
  },
  {
    id: 2,
    image: Image2,
    title: "Nitesh Katwal",
    subtitle: "Product designer at Dribble",
    comment: "sjbjc adadsahdadsdsjncas  duahudanasnajcascacn sadaad",
  },
  {
    id: 3,
    image: Image3,
    title: "Yunish Katwal",
    subtitle: "Product designer at Dribble",
    comment: "sjbjc adadsahdadsdsjncas  duahudanasnajcascacn sadaad",
  },
  {
    id: 4,
    image: Image4,
    title: "Pranjal Dahal",
    subtitle: "Product designer at Dribble",
    comment: "sjbjc adadsahdadsdsjncas  duahudanasnajcascacn sadaad",
  },
  {
    id: 5,
    image: Image5,
    title: "Abishek Adhikari",
    subtitle: "Product designer at Dribble",
    comment: "sjbjc adadsahdadsdsjncas  duahudanasnajcascacn sadaad",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>
      <div className="testimonials__container grid">
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <div className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
