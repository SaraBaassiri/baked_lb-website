import React from "react";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper";
import "swiper/css/bundle";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

//Svg
import bakerImage from "../../Assets/meetTheBaker.svg";
import Pumpkin from "../../Assets/Pumpkin.svg";
import ChrisBrownies from "../../Assets/ChrisBrownies.svg";
import IndependanceDay from "../../Assets/IndependanceDay.svg";

import { Grid } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Hero">
        <div className="InnerHeroDiv">
          <div className="HeroInner">
            <div className="HeroText">
              <h1 className="Hero-Title">Hey, Sugar!</h1>
              <h3 className="Hero-SubTitle">Give Our Cookies a Try!</h3>
              <button className="HeroButton">TRY NOW</button>
            </div>
          </div>
          <img src="/pngwing.png" alt="banner1" />
        </div>
      </div>

      <div className="MeetTheBaker">
        <div className="BakerImage">
          <div className="ImageContainer">
            <img src={bakerImage} alt="banner1" />
            {/* <span className="YellowBackground"></span> */}
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
            <button className="BakerButton">Instagram</button>
          </div>
        </div>
      </div>

      <div className="innerproduct">
        <h1 className="title">Products</h1>
        <div className="ProductsLine"></div>
      </div>
      <div className="Products">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
            bulletClass: "my-bullet ",
          }}
          navigation={false}
          modules={[Pagination]}
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
        </Swiper>
      </div>

      <div className="AllTimeFav">
        <h1>All Time Favorites</h1>
        <div className="BlackLineFav"></div>
        <Grid
          container
          spacing={15}
          columns={18}
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh", paddingInline: "5%" }}
        >
          <Grid item xs={6}>
            <div className="favprod">
              <div className="favprodimg">
                <img className="eclipse" src="Ellipse 3.png" alt="" />
                <img
                  className="innerImage inner1"
                  src="BlueCup.png"
                  alt="Cupcake"
                />
              </div>
              <h3>Cupcake</h3>
              <p id="desc">
                A very smoochy buttered piece of cake, with a frosty topic that
                you would fall for.
              </p>
              <p id="price">$5</p>
              <button id="buyNowBtn">Buy Now</button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="favprod">
              <div className="favprodimg">
                <img className="eclipse" src="Ellipse 2.png" alt="" />
                <img
                  className="innerImage inner2"
                  src="RedCake.png"
                  alt="Red Velvet Cookie"
                />
              </div>
              <h3>Red Velvet Cookie</h3>
              <p id="desc">
                A bright red velvet cookies filled with M&M’s, gooey melty dark
                chocolate chips and rich dark chunks.
              </p>
              <p id="price">$2.5</p>
              <button id="buyNowBtn">Buy Now</button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="favprod">
              <div className="favprodimg">
                <img className="eclipse" src="Ellipse 1.png" alt="" />
                <img className="innerImage inner3" src="MandM.png" alt="M&M" />
              </div>
              <h3>M&M</h3>
              <p id="desc">
                A very distinct colorful juicy piece of cake, as each piece
                reflects the taste of a yummy fruity element.
              </p>
              <p id="price">$10</p>
              <button id="buyNowBtn">Buy Now</button>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="CreateYourOwn">
        <div className="CustomImage">
          <div className="ImageContainer">
            <img src="Two.png" alt="Custom Cookie" />
          </div>
        </div>
        <div className="CustomInner">
          <div className="CustomText">
            <h1 className="Custom-Title">Create Your Own</h1>
            <div className="BlackLineCustom"></div>
            <p className="Custom-Des">
              Create your cookie according to your taste!
            </p>
            <button
              className="CustomButton"
              onClick={() => {
                navigate("/customize");
              }}
            >
              Compose Now!
            </button>
          </div>
        </div>
      </div>

      <div className="SpecialOcasions">
        <h1>Celebrating Special Occasions?</h1>
        <Grid
          container
          spacing={15}
          columns={18}
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh", paddingInline: "5%" }}
        >
          <Grid item xs={6}>
            <div className="item">
              <img src={Pumpkin} alt="" />
              <h3>Pumpkin Pie</h3>
              <p>
                A buttery pie crust cookie with pumpkin pie filling with topping
                whipped cream
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="item">
              <img src={ChrisBrownies} alt="" />
              <h3>Christmas Brownies</h3>
              <p>
                A buttery pie crust cookie with pumpkin pie filling with topping
                whipped cream
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
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
          <button className="lastButton">View All</button>
        </div>
      </div>
    </div>
  );
}
