import React from "react";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Svg
import banner1 from "../../Assets/banner1.svg";
import bakerImage from "../../Assets/meetTheBaker.svg";
import Pumpkin from "../../Assets/Pumpkin.svg";
import ChrisBrownies from "../../Assets/ChrisBrownies.svg";
import IndependanceDay from "../../Assets/IndependanceDay.svg";

import { Grid } from "@mui/material";

export default function Home() {
  return (
    <div>
      <div className="Hero">
        <div className="HeroImage">
          <img src={banner1} alt="banner1" />
        </div>
        <div className="HeroInner">
          <div className="HeroText">
            <h1 className="Hero-Title">Hey, Sugar!</h1>
            <h3 className="Hero-SubTitle">Give Our Cookies a Try!</h3>
            <button className="HeroButton">TRY NOW</button>
          </div>
        </div>
      </div>

      <div className="MeetTheBaker">
        <div className="BakerImage">
          <div className="ImageContainer">
            <img src={bakerImage} alt="banner1" />
            <span className="YellowBackground"></span>
          </div>
        </div>
        <div className="BakerInner">
          <div className="BakerText">
            <h1 className="Baker-Title">Meet the Baker</h1>
            <div className="BlackLine"></div>
            <p className="Baker-Des">
              Hello! I am Celina, I founded baked because I had a passion for
              baking ever since I was 16. Ironically enough, I do not like
              sweets, but I am passionate about baking, and I love seeing people
              go crazy over what I dough.
            </p>
            <button className="BakerButton">TRY NOW</button>
          </div>
        </div>
      </div>

      {/* Start of Products code */}
      <div className="innerproduct">
        <h1 className="title">Products</h1>
      </div>
      <div className="Products">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
            bulletClass: "my-bullet ",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="slide-content"
        >
          <div>
            <SwiperSlide>
              {/* Slide 1 */}
              <div className="slide-container">
                <div className="slide-content">
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image">
                          <img
                            src="/brownies2.png"
                            alt="brownies"
                            className="card-img"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="productname">Brownies</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Slide 2 */}
              <div className="slide-container">
                <div className="slide-content">
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image">
                          <img
                            src="/cupcake2.png"
                            alt="cupcake"
                            className="card-img2"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="productname">Cupcakes</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Slide 3 */}
              <div className="slide-container">
                <div className="slide-content">
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image">
                          <img
                            src="/cinna.png"
                            alt="Cinnamon Rolls"
                            className="card-img3"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="productname">Cinnamon Rolls</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Slide 4 */}
              <div className="slide-container">
                <div className="slide-content">
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image">
                          <img
                            src="/cookies.png"
                            alt="cookies"
                            className="card-img4"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="productname">Cookies</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Slide 5 */}
              <div className="slide-container">
                <div className="slide-content">
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image">
                          <img
                            src="/oreshki.png"
                            alt="Orikesh"
                            className="card-img5"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="productname">Orikesh</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Slide 6 */}
              <div className="slide-container">
                <div className="slide-content">
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image">
                          <img
                            src="/pinkstuff.png"
                            alt="Macron"
                            className="card-img6"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="productname">Macron</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>

          {/* <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div> */}
        </Swiper>
      </div>
      {/* End of Products code */}
      {/* ----------------------------------------------------------------------------- */}

      <div className="AllTimeFav">
        <div className="AllTimeFavInner">
          <h1>All Time Favorites</h1>
          <Grid container spacing={2} columns={24}>
            <Grid item xs={8}>
              <div className="cupcakeCard">
                <div className="pinkBackground">
                  <img src="/cupcake.png" alt="Cupcake" />
                </div>
                <div className="cupcakeText">
                  <h3>Cupcake</h3>
                  <p className="desc">
                    A very smoochy buttered piece of cake, with a frosty topic
                    that you would fall for.
                  </p>
                  <p className="productPrice">$5</p>
                  <button className="buyNowButton">Buy Now</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="CreateYourOwn"></div>

      <div className="SpecialOcasions">
        <h1>Celebrating Special Occasions?</h1>
        <Grid
          container
          spacing={3}
          columns={24}
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh", paddingInline: "5%" }}
        >
          <Grid item xs={8}>
            <div className="item">
              <img src={Pumpkin} alt="" />
              <h3>Pumpkin Pie</h3>
              <p>
                A buttery pie crust cookie with pumpkin pie filling with topping
                whipped cream
              </p>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="item">
              <img src={ChrisBrownies} alt="" />
              <h3>Christmas Brownies</h3>
              <p>
                A buttery pie crust cookie with pumpkin pie filling with topping
                whipped cream
              </p>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="item">
              <img src={IndependanceDay} alt="" />
              <h3>Independence Day</h3>
              <p>
                A buttery pie crust cookie with pumpkin pie filling with topping
                whipped cream
              </p>
            </div>
          </Grid>
        </Grid>
        <div className="BottomDiv">
          <h2>Taking your celebration to a whole new level!</h2>
          <button className="HeroButton">View All</button>
        </div>
      </div>
    </div>
  );
}
