import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="profile" />
      <div className="hud" />
      <div className="ausown" />
      <div className="main">
        <section className="App-logo">
          <img
            src="https://res.cloudinary.com/leesheppard/image/upload/v1595069548/toonstudio_logo_scspcu.svg"
            className="App-logo"
            alt="Toon Studio logo"
            width={"640"}
          />
        </section>
        <section className={"service"}>
          <div className="container">
            <div className={"columns"}>
              <div className={"column"}>
                <h1>Comics</h1>
                <p>
                  (noun) a sequence of drawings in boxes that tell an amusing
                  story, typically printed in a newspaper or magazine.
                </p>
                <p>
                  From syndicated comic strips to editorial and single panel
                  gags.{" "}
                </p>
              </div>
              <div className={"column comics"}>
                <img
                  src="https://res.cloudinary.com/leesheppard/image/upload/v1607644698/artwork/Greatest_Comic-72.jpg"
                  width="300px"
                  alt="comic"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={"testimonials"}>
          <div className="container">
            <div className={"columns"}>
              <div className={"column testimonials-dalai"}>
                <img
                  src="https://res.cloudinary.com/leesheppard/image/upload/v1620909087/artwork/Dalai_Llama.png"
                  width="550px"
                  alt="Dalai Lama illustration"
                />
              </div>
              <div className={"column"}>
                <blockquote>
                  <h3 className={"testimonial-quote"}>
                    Possibly the greatest reincarnated cartoonist ever living,
                    again.
                  </h3>
                  <p className={"testimonial-title"}>Dalai Lama</p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section className={"service"}>
          <div className="container">
            <div className={"columns"}>
              <div className={"column"}>
                <h1>Caricatures</h1>
                <p>
                  <em>(noun)</em> a picture, description, or imitation of a
                  person in which certain striking characteristics are
                  exaggerated in order to create a comic or grotesque effect.
                </p>
                <p>
                  Well that's what the dictionary said. But hey, we're
                  exaggerating the truth in what we see in real life. Some like
                  it hot, some don't.
                </p>
              </div>
              <div className={"column image"}>
                <img
                  src="https://res.cloudinary.com/leesheppard/image/upload/v1494658797/leesheppard_stanleys__nyhu7e.png"
                  width="200px"
                  alt="stanleys illustration"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={"testimonials"}>
          <div className="container">
            <div className="columns">
              <div className={"column testimonials-einstein"}>
                <img
                  src="https://res.cloudinary.com/leesheppard/image/upload/v1614218011/artwork/Einstein.png"
                  width="500px"
                  alt="Albert Einstein illustration"
                />
              </div>
              <div className={"column"}>
                <blockquote>
                  <h3 className={"testimonial-quote"}>
                    If I had a second chance at life I'd wish to be as talented
                    as him.
                  </h3>
                  <p className={"testimonial-title"}>Albert Einstein</p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section className={"service"}>
          <div className="container">
            <div className={"columns"}>
              <div className={"column"}>
                <h1>Illustrations</h1>
                <p>
                  (noun) something that serves to illustrate: such as a picture
                  or diagram that helps make something clear or attractive.
                </p>
                <p>
                  Yeah you know what we're talking about: picto-attraction.
                  Making stories that look great to read. Illustrating the real
                  stuff, funny style.
                </p>
              </div>
              <div className={"column images"}>
                <img
                  src="https://res.cloudinary.com/leesheppard/image/upload/v1591070174/Brooklyn_9_tf0mxj.jpg"
                  width="600"
                  alt="Brooklyn Sheppard illustration"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={"testimonials"}>
          <div className="container">
            <div className={"columns"}>
              <div className={"column testimonials-tutu"}>
                <img
                  src="https://res.cloudinary.com/leesheppard/image/upload/v1614133431/artwork/Desmond_Tutu.png"
                  width="550px"
                  alt="Desmond Tutu character illustration"
                />
              </div>
              <div className={"column"}>
                <blockquote>
                  <h3 className={"testimonial-quote"}>
                    You very funny man. Very safe for the work place.
                  </h3>
                  <p className={"testimonial-title"}>Desmond Tutu</p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section className={"service"}>
          <div className="container">
            <div className={"columns"}>
              <div className={"column"}>
                <h1>About</h1>
                <p>
                  Lee Sheppard is the founder of Toon Studio, an illustration
                  and animation studio of over twenty years. Previously he has
                  been the Deputy President of the Australian Cartoonists
                  Association and a syndicated Comic Strip artist. Having
                  experience in animation for major studios and a broad range of
                  illustration and caricature work, he has been providing art
                  services globally to major brands and personal collections.
                </p>
                <small>
                  All images are subject to copyright © 2021 by Lee Sheppard.
                  All rights reserved. For reproductions please use the contact
                  form.
                </small>
              </div>
              <div className={"column"}>
                <h1>Contact</h1>
                <p>
                  If you'd like to commission work for a project, please get in
                  touch using the form available via this button.
                </p>
                <a
                  href="https://forms.gle/G5qSMwoxPPpNdej97"
                  className="button is-large is-link"
                >
                  Click me for a good time
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className={"columns"}>
            <div className={"column"}>
              <a href="https://dribbble.com/leesheppard">
                <i className="fab fa-dribbble" />
              </a>
              <a href="https://github.com/leesheppard">
                <i className="fab fa-github-alt" />
              </a>
            </div>
            <div className={"column"}>
              <a href="https://facebook.com/leesheppard">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://twitter.com/leesheppard">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.linkedin.com/in/leesheppard">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
