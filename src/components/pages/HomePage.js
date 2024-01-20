import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import SearchField from "../common/search";
import "./HomePage.css";
import Logo from "../../resources/3.png";
function HomePage() {
  return (
    <>
      <Row className="d-flex justify-content-center main-row ">
        <Col xs={12} md={6} className="main-col ">
          <div className="mx-auto">
            <SearchField />
          </div>
          <img
            src={Logo}
            width="280"
            height="210"
            className="d-block mx-auto my-3"
            alt="React Bootstrap logo"
          />
          <div className="texts mx-md-0 mx-4">
            <p className="text-center">
              GrandLine stream - watch online free anime.
            </p>
            <div className="d-flex justify-content-center py-4">
              <Button className="button-goto-homepage mx-auto" variant="outline-dark">
                Go to home page
              </Button>
            </div>
            <h3 className="text-center">
              Welcome to <span className="purple-text"> GrandLineStream </span>
              Your Gateway to Anime Odyssey!
            </h3>
            <p className="text-center">
              <span className="purple-text"> Unlimited </span>Animies from all
              around the world
            </p>
            <hr className="line-color" />
            <h5>Unleash the Power of Otaku Awesomeness:</h5>
            <p className=" my-3">
              Immerse Yourself in a Kaleidoscope of Anime Magic, Manga Wonders,
              and Comic Fantasia.
            </p>
            <hr />
            <h5>Journey Beyond Limits:</h5>
            <p className="my-3">
              Where Every Click Unlocks New Realms – from Classic Sagas to
              Uncharted Storylines.
            </p>
            <hr />
            <h5>Your Anime Haven Awaits:</h5>
            <p className=" my-3">
              Discover a Universe of Characters, Stories, and Fandom Glory on
              GrandLineStream.
            </p>
            <hr />
            <h5>Charting a Course for Otaku Nirvana:</h5>
            <p className="my-3">
              Navigate Seamlessly through Our Anime Seascape, Guided by Your
              Passions and Desires.
            </p>
            <hr />
            <h2 className="my-5 text-center">
              Frequently Asked Questions (FAQs) with Anime Vibes
            </h2>
            <hr />

            <h5>How Do I Obtain My Shonen-Level Powers on GrandLineStream</h5>
            <p className=" my-3">
              Acquiring the power of GrandLineStream is as simple as clicking
              "Sign Up"! Unleash your otaku abilities and embark on your
              streaming adventure.
            </p>
            <hr />

            <h5>Will Exploring Premium Content Unlock Hidden Jutsus </h5>
            <p className=" my-3">
              Absolutely! Premium content not only guarantees an ad-free
              experience but also unlocks secret jutsus of exclusive access and
              unlimited awesomeness.
            </p>
            <hr />

            <h5>
              Can I Savor Anime Delights Without Crafting a Shinigami Name
            </h5>
            <p className=" my-3">
              While you can sample delights without creating a Shinigami name,
              embracing your otaku identity with an account unlocks the true
              potential of your anime journey.
            </p>
            <hr />

            <h5>How Frequently Does GrandLineStream Summon New Anime Realms</h5>
            <p className=" my-3">
              Fear not, fellow otaku! GrandLineStream summons fresh anime realms
              regularly, ensuring an ever-expanding universe of thrilling sagas
              and timeless classics.
            </p>
            <hr />

            <h5>
              Is GrandLineStream Compatible with All Anime Scrolls (Devices)
            </h5>
            <p className=" my-3">
              Indeed! GrandLineStream is crafted to be as versatile as a ninja's
              kunai. Whether on desktops, laptops, tablets, or smartphones, your
              anime sanctuary is always within reach.
            </p>
            <hr />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
