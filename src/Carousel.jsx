import Carousel from "react-bootstrap/Carousel";

function Testimonial() {
  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1502239608882-93b729c6af43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          <p className="carousel-text">
            I’ve very much enjoyed our conversations. I feel so much more
            positive about my life and have a better understanding of what i
            need to do, to avoid being back in a negative place that i was six
            months ago. I’ve been encouraged to be open about my darkest moments
            and this really has enabled me to come to terms with the death of my
            loved one which is the biggest issue i've had in my life. I know im
            not yet the finished article…probably will never be…but im in such a
            better place now than i ever imagined that i could be. So thank you
            for your engagement, understanding and advise. - A.N.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1502239608882-93b729c6af43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          <p className="carousel-text">
            Quotation Mark In a few sessions I was able to understand my goals
            aims of taking these sessions and that was Anger Management. Nadeem
            gave me excellent tools to manage my anger while I was in difficult
            situations. I used them regularly and saw the positive effect it had
            on me and others around me. Very happy and satisfied with my
            sessions with Nadeem. - K.S.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1502239608882-93b729c6af43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Testimonial 3</h3> */}
          <p className="carousel-text">
            Nadeem has been patient, offered good advise, methods, books and<br/>
            extra activities and really helped me develop. A.Z.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonial;
