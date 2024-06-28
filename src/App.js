import "./App.css";
import "./css/content.css";
import "./css/footer.css";
import "./css/menu.css";
import "./css/slider.css";
import "./css/navgtn.css";
import grocery from "./imgs/grocery.webp";

// Import statements for images
import ACs from "./imgs/ACs.jpg";
import appliances from "./imgs/appliances.jpg";
import cameras from "./imgs/cameras.webp";
import casualShoes from "./imgs/casual shoes.jpg";
import coffeePowder from "./imgs/coffeepwdr.jpg";
import dryFruits from "./imgs/dryfruits.jpg";
import fans from "./imgs/fans.jpg";
import fashion from "./imgs/fashion.jpg";
import fridges from "./imgs/Fridges.png";
import gameMonitors from "./imgs/gamemonitors.jpg";
import gearedCycle from "./imgs/geared cycle.jpg";
import hairDryers from "./imgs/hairdryers.png";
import handbags from "./imgs/handbags.jpg";
import helmet from "./imgs/helmet.png";
import home from "./imgs/home.webp";
import induction from "./imgs/induction.webp";
import jewellery from "./imgs/jewellery.webp";
import kettle from "./imgs/kettle.jpg";
import laptop from "./imgs/laptop.webp";
import menJeans from "./imgs/Men jeans.jpg";
import mixer from "./imgs/mixer.webp";
import mobile from "./imgs/mobile.jpg";
import monitors from "./imgs/monitors.jpg";
import printers from "./imgs/printers.webp";
import projectors from "./imgs/projectors.jpg";
import remoteToys from "./imgs/remoteToys.jpeg";
import s1 from "./imgs/s1.jpg";
import s2 from "./imgs/s2.jpg";
import s3 from "./imgs/s3.jpg";
import s4 from "./imgs/s4.jpg";
import s5 from "./imgs/s5.jpg";
import s6 from "./imgs/s6.jpg";
import safariBags from "./imgs/safaribags.webp";
import shavers from "./imgs/shavers.jpg";
import softToys from "./imgs/softToys.webp";
import stationery from "./imgs/stationery.webp";
import sweatshirts from "./imgs/Sweatshirts.jpg";
import topOffers from "./imgs/top offers.webp";
import toys from "./imgs/toys.webp";
import trolley from "./imgs/trolley.jpg";
import TVs from "./imgs/TVs.jpg";
import washingMachine from "./imgs/WashMach.jpg";
import watches from "./imgs/Watches.jpeg";
import womenTops from "./imgs/Womentops.webp";
import yogaMats from "./imgs/Yogamats.jpg";

// Now these imported images can be used in your code as needed

function App() {
  return (
    <div>
      <nav>
        <div class="navbar">
          <div class="logo">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="Flipkart Logo"
            />
          </div>

          <div class="search">
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button class="search-btn">Search</button>
          </div>

          <div class="button">
            <button class="login-btn">Login</button>
          </div>

          <div class="more">
            More<i class="fa fa-angle-down"></i>
            <ul class="dropdown1">
              <li>
                <i class="material-icons">notifications</i>Notification
                Preference
              </li>
              <li>
                <i class="material-icons">attach_money</i>Sell on Flipkart
              </li>
              <li>
                <i class="material-icons">live_help</i>24/7 Customer Care
              </li>
              <li>
                <i class="material-icons">call_made</i>Advertise
              </li>
              <li>
                <i class="material-icons">file_download</i>Download App
              </li>
            </ul>
          </div>

          <div class="cart">
            <i class="fas fa-shopping-cart"></i>
            <a href="#">Cart</a>
          </div>
        </div>
      </nav>

      <div class="linkmenu">
        <div class="grocery">
          <img src={grocery} alt="Detergent Pic" />
          <p>Grocery</p>
        </div>
        <div class="mobiles">
          <img src={mobile} alt="Mobile  Pic" />
          <p>Mobiles</p>
        </div>
        <div class="fashion">
          <div>
            <img src={fashion} alt="Clothes Pic" />
          </div>
          <div class="dropdown-title">
            <div>
              <p>Fashion</p>
            </div>
            <div>
              <i class="material-icons icon2"></i>
            </div>
          </div>
          <div>
            <ul class="dropdown2">
              <li>Men's Top Wear</li>
              <li>Men's Botton Wear</li>
              <li>Women Ethnic</li>
              <li>Women Western</li>
            </ul>
          </div>
        </div>
        <div class="electronics">
          <div>
            <img src={laptop} alt="Laptop Pic" />
          </div>
          <div class="dropdown-title">
            <div>
              <p>Electronics</p>
            </div>
            <div>
              <i class="material-icons"></i>
            </div>
          </div>
          <div>
            <ul class="dropdown3">
              <li>Audio</li>
              <li>Camera & Accessories</li>
              <li>Laptop & Desktops</li>
              <li>Gaming</li>
            </ul>
          </div>
        </div>
        <div class="home">
          <div>
            <img src={home} alt="Sofa Pic" />
          </div>
          <div class="dropdown-title">
            <div>
              <p>Home</p>
            </div>
            <div>
              <i class="material-icons"></i>
            </div>
          </div>
          <div>
            <ul class="dropdown4">
              <li>Home Furnishing</li>
              <li>Living Room</li>
              <li>Kitchen & Dining</li>
              <li>Home Decor</li>
            </ul>
          </div>
        </div>
        <div class="appliances">
          <div>
            <img src={appliances} alt="TV Pic" />
          </div>
          <div class="dropdown-title">
            <div>
              <p>Appliances</p>
            </div>
            <div>
              <i class="material-icons"></i>
            </div>
          </div>
          <div>
            <ul class="dropdown5">
              <li>Televisions</li>
              <li>Washing Machines</li>
              <li>Airconditioners</li>
              <li>Refrigertaors</li>
            </ul>
          </div>
        </div>
        <div class="offers">
          <img src={topOffers} alt="Top Offers Pic" />
          <p>Top Offers</p>
        </div>
        <div class="toys">
          <div>
            <img src={toys} alt="Toys Pic" />
          </div>
          <div class="dropdown-title">
            <div>
              <p>Beauty,Toys & More</p>
            </div>
            <div>
              <i class="material-icons"></i>
            </div>
          </div>
          <div>
            <ul class="dropdown6">
              <li>Beauty & Personal Care</li>
              <li>Foods & Drinks</li>
              <li>Nutrition & Health Care</li>
              <li>Baby Care</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="slider-container">
        <div class="slider">
          <img src={s1} alt="S1 Pic" />
          <img src={s2} alt="S2 Pic" />
          <img src={s3} alt="S3 Pic" />
          <img src={s4} alt="S4 Pic" />
          <img src={s5} alt="S5 Pic" />
          <img src={s6} alt="S6 Pic" />
        </div>
      </div>

      <div class="content">
        <div class="contenthead">
          <div class="contenthead">
            <div>Best of Electronics</div>
          </div>
          <a href="https://tinyurl.com/3jh6xujd" target="_blank">
            <div class="viewallbtn">
              <button class="viewbtn">View All</button>
            </div>
          </a>
        </div>
        <div class="offerrow">
          <div class="offerimg1">
            <a href="https://shorturl.at/dixJK" target="_blank">
              <img src={printers} alt="Printers Pic" />
              <div class="offerimg-subtxt1">Printers</div>
              <div class="offerimg-subtxt2">From ₹3999</div>
            </a>
          </div>
          <div class="offerimg2">
            <a href="https://shorturl.at/clxCF" target="_blank">
              <img src={monitors} alt="Monitors Pic" />
              <div class="offerimg-subtxt1">Monitors</div>
              <div class="offerimg-subtxt2">From ₹7949</div>
            </a>
          </div>
          <div class="offerimg3">
            <a href="https://rb.gy/w6uhg" target="_blank">
              <img src={cameras} alt="Cameras Pic" />
              <div class="offerimg-subtxt1">Cameras</div>
              <div class="offerimg-subtxt2">Shop Now</div>
            </a>
          </div>
          <div class="offerimg4">
            <a href="https://rb.gy/db6te" target="_blank">
              <img src={shavers} alt="Shavers Pic" />
              <div class="offerimg-subtxt1">Best of Trimmers</div>
              <div class="offerimg-subtxt2">From ₹1649</div>
            </a>
          </div>
          <div class="offerimg5">
            <a href="https://rb.gy/r618i" target="_blank">
              <img src={projectors} alt="Projectors Pic" />
              <div class="offerimg-subtxt1">Projectors</div>
              <div class="offerimg-subtxt2">From ₹9,999</div>
            </a>
          </div>
          <div class="offerimg6">
            <a href="https://rb.gy/e146g" target="_blank">
              <img src={hairDryers} alt="Hair Dryers Pic" />
              <div class="offerimg-subtxt1">Hair Dryers</div>
              <div class="offerimg-subtxt2">From ₹549</div>
            </a>
          </div>
          <div class="offerimg7">
            <a href="https://rb.gy/oh49p" target="_blank">
              <img src={gameMonitors} alt="Game Monitors Pic" />
              <div class="offerimg-subtxt1">Gaming monitors</div>
              <div class="offerimg-subtxt2">From ₹11,999</div>
            </a>
          </div>
          <div class="offerimg8">
            <a href="https://tinyurl.com/3fktmsjk" target="_blank">
              <img src={handbags} alt="Handbags Pic" />
              <div class="offerimg-subtxt1">Hand bags</div>
              <div class="offerimg-subtxt2">from ₹499</div>
            </a>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="contenthead">
          <div class="contenthead">
            <div>Beauty, Food, Toys and More</div>
          </div>
          <a href="https://tinyurl.com/ru25m8bw" target="_blank">
            <div class="viewallbtn">
              <button class="viewbtn">View All</button>
            </div>
          </a>
        </div>
        <div class="offerrow">
          <div class="offerimg1">
            <a href="https://tinyurl.com/2cb3bxpy" target="_blank">
              <img src={stationery} alt="Stationery Pic" />
              <div class="offerimg-subtxt1">Top selling Stationery</div>
              <div class="offerimg-subtxt2">From ₹49</div>
            </a>
          </div>
          <div class="offerimg2">
            <a href="https://tinyurl.com/ypasja4c" target="_blank">
              <img src={dryFruits} alt="Dry Fruits Pic" />
              <div class="offerimg-subtxt1">Dry Fruits</div>
              <div class="offerimg-subtxt2">Upto 75% off</div>
            </a>
          </div>
          <div class="offerimg3">
            <a href="https://tinyurl.com/frz4x64j" target="_blank">
              <img src={gearedCycle} alt="Geared Cycle Pic" />
              <div class="offerimg-subtxt1">Geared Cycles</div>
              <div class="offerimg-subtxt2">From ₹3999</div>
            </a>
          </div>
          <div class="offerimg4">
            <a href="https://tinyurl.com/nhhrdpjj" target="_blank">
              <img src={remoteToys} alt="Remote Toys Pic" />
              <div class="offerimg-subtxt1">Remote control Toys</div>
              <div class="offerimg-subtxt2">Upto 75% off</div>
            </a>
          </div>
          <div class="offerimg5">
            <a href="https://tinyurl.com/38casepx" target="_blank">
              <img src={helmet} alt="Helmet Pic" />
              <div class="offerimg-subtxt1">Rider Helmets</div>
              <div class="offerimg-subtxt2">From ₹699</div>
            </a>
          </div>
          <div class="offerimg6">
            <a href="https://tinyurl.com/zhje9uvu" target="_blank">
              <img src={softToys} alt="Soft Toys Pic" />
              <div class="offerimg-subtxt1">Soft Toys</div>
              <div class="offerimg-subtxt2">Upto 75% off</div>
            </a>
          </div>
          <div class="offerimg7">
            <a href="https://tinyurl.com/26kn7k9e" target="_blank">
              <img src={coffeePowder} alt="Coffee Powder Pic" />
              <div class="offerimg-subtxt1">Coffee Powder</div>
              <div class="offerimg-subtxt2">Upto 55% off</div>
            </a>
          </div>
          <div class="offerimg8">
            <a href="https://tinyurl.com/5n65r4x5" target="_blank">
              <img src={yogaMats} alt="Yoga Mats Pic" />
              <div class="offerimg-subtxt1">Yoga Mats</div>
              <div class="offerimg-subtxt2">from ₹149</div>
            </a>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="contenthead">
          <div class="contenthead">
            <div id="box"> Pick Your Styles</div>
          </div>
          <a href="https://tinyurl.com/cv375nys" target="_blank">
            <div class="viewallbtn">
              <button class="viewbtn">View All</button>
            </div>
          </a>
        </div>
        <div class="offerrow">
          <div class="offerimg1">
            <a href="https://tinyurl.com/yubzu7ex" target="_blank">
              <img src={trolley} alt="Trolley Pic" />
              <div class="offerimg-subtxt1">Bags,Trolleys, Luggage..</div>
              <div class="offerimg-subtxt2">50-70% +Extra 10% off</div>
            </a>
          </div>
          <div class="offerimg2">
            <a href="https://tinyurl.com/4yrn3kvb" target="_blank">
              <img src={sweatshirts} alt="Sweatshirts Pic" />
              <div class="offerimg-subtxt1">SweatShirts, Hoodies</div>
              <div class="offerimg-subtxt2">From ₹349</div>
            </a>
          </div>
          <div class="offerimg3">
            <a href="https://tinyurl.com/2p8mp7pj" target="_blank">
              <img src={casualShoes} alt="Casual Shoes Pic" />
              <div class="offerimg-subtxt1">Casual Shoes</div>
              <div class="offerimg-subtxt2">Min 40% off</div>
            </a>
          </div>
          <div class="offerimg4">
            <a href="https://tinyurl.com/yr2h42dp" target="_blank">
              <img src={menJeans} alt="Men Jeans Pic" />
              <div class="offerimg-subtxt1">Men jeans</div>
              <div class="offerimg-subtxt2">Upto 60% off</div>
            </a>
          </div>
          <div class="offerimg5">
            <a href="https://tinyurl.com/yeaf42tu" target="_blank">
              <img src={watches} alt="Watches Pic" />
              <div class="offerimg-subtxt1">Watches</div>
              <div class="offerimg-subtxt2">From ₹399</div>
            </a>
          </div>
          <div class="offerimg6">
            <a href="https://tinyurl.com/3tcdtuu5" target="_blank">
              <img src={womenTops} alt="Women Tops Pic" />
              <div class="offerimg-subtxt1">Dresses, Tops,Jeans</div>
              <div class="offerimg-subtxt2">Min 60% off</div>
            </a>
          </div>
          <div class="offerimg7">
            <a href="https://tinyurl.com/bdhuyu3y" target="_blank">
              <img src={safariBags} alt="Safari Bags Pic" />
              <div class="offerimg-subtxt1">Safari Bags</div>
              <div class="offerimg-subtxt2">From ₹999</div>
            </a>
          </div>
          <div class="offerimg8">
            <a href="https://tinyurl.com/47yvde6d" target="_blank">
              <img src={jewellery} alt="Jewellery Pic" />
              <div class="offerimg-subtxt1">Jewellery</div>
              <div class="offerimg-subtxt2">from ₹799</div>
            </a>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="contenthead">
          <div class="contenthead">
            <div id="box">Top Deals On TVs and Appliances</div>
          </div>
          <a href="https://tinyurl.com/bdzfftvk" target="_blank">
            <div class="viewallbtn">
              <button class="viewbtn">View All</button>
            </div>
          </a>
        </div>
        <div class="offerrow">
          <div class="offerimg1">
            <a href="https://tinyurl.com/y96kmm3r" target="_blank">
              <img src={fridges} alt="Fridges Pic" />
              <div class="offerimg-subtxt1">Refrigerators</div>
              <div class="offerimg-subtxt2">From ₹7,240</div>
            </a>
          </div>
          <div class="offerimg2">
            <a href="https://tinyurl.com/47rcey9t" target="_blank">
              <img src={washingMachine} alt="Washing Machine Pic" />
              <div class="offerimg-subtxt1">Washing Machines</div>
              <div class="offerimg-subtxt2">From ₹17,990</div>
            </a>
          </div>
          <div class="offerimg3">
            <a href="https://tinyurl.com/wp72yeke" target="_blank">
              <img src={ACs} alt="ACs Pic" />
              <div class="offerimg-subtxt1">Air Conditioners</div>
              <div class="offerimg-subtxt2">Upto 55% off</div>
            </a>
          </div>
          <div class="offerimg4">
            <a href="https://tinyurl.com/54yt2sjk" target="_blank">
              <img src={mixer} alt="Mixer Pic" />
              <div class="offerimg-subtxt1">Kitchen Appliances</div>
              <div class="offerimg-subtxt2">Upto 65% off</div>
            </a>
          </div>
          <div class="offerimg5">
            <a href="https://tinyurl.com/4uzbkk4j" target="_blank">
              <img src={TVs} alt="TVs Pic" />
              <div class="offerimg-subtxt1">Televisions</div>
              <div class="offerimg-subtxt2">Upto 50% off</div>
            </a>
          </div>
          <div class="offerimg6">
            <a href="https://tinyurl.com/asmry7uu" target="_blank">
              <img src={induction} alt="Induction Pic" />
              <div class="offerimg-subtxt1">Induction Cooktops</div>
              <div class="offerimg-subtxt2">From ₹1,199</div>
            </a>
          </div>
          <div class="offerimg7">
            <a href="https://tinyurl.com/4xayahr5" target="_blank">
              <img src={kettle} alt="Kettle Pic" />
              <div class="offerimg-subtxt1">Borosil Electric Kettles</div>
              <div class="offerimg-subtxt2">Just ₹1,500</div>
            </a>
          </div>
          <div class="offerimg8">
            <a href="https://tinyurl.com/4kyp2sje" target="_blank">
              <img src={fans} alt="Fans Pic" />
              <div class="offerimg-subtxt1">Ceiling Fans</div>
              <div class="offerimg-subtxt2">from ₹3,099</div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="main-bottom">
          <div class="row">
            <div class="bottom-box">
              <div class="stories">
                <span>Top Stories:</span>
                <a class="brands" href="">
                  Brand Directory
                </a>
              </div>
              <div class="Items">
                <span class="item-type">Most searched for on Flipkart: </span>
                <a class="single-items" href="">
                  iPhone 13 |{" "}
                </a>
                <a class="single-items" href="">
                  iPhone 13 Pro |{" "}
                </a>
                <a class="single-items" href="">
                  iPhone 13 Pro Max |{" "}
                </a>
                <a class="single-items" href="">
                  iPhone 13 Mini |{" "}
                </a>
                <a class="single-items" href="">
                  Flipkart Quick |{" "}
                </a>
                <a class="single-items" href="">
                  Books |{" "}
                </a>
                <a class="single-items" href="">
                  Flipkart Help Center |{" "}
                </a>
                <a class="single-items" href="">
                  Flipkart track Orders |{" "}
                </a>
                <a class="single-items" href="">
                  Flipkart Manage Orders |{" "}
                </a>
                <a class="single-items" href="">
                  Flipkart Return Orders |{" "}
                </a>
                <a class="single-items" href="">
                  Flipkart Gift Cards Store |{" "}
                </a>
                <a class="single-items" href="">
                  Flipkart Axis Bank Credit Card |{" "}
                </a>
                <a class="single-items" href="">
                  Flipkart Pay Later
                </a>
              </div>
              <div class="Items">
                <span class="item-type">Mobiles: </span>
                <a class="single-items" href="">
                  iPhone 12 64GB |{" "}
                </a>
                <a class="single-items" href="">
                  iPhone 12 Pro 512GB |{" "}
                </a>
                <a class="single-items" href="">
                  iPhone 12 128GB |{" "}
                </a>
                <a class="single-items" href="">
                  Vivo Y91i |{" "}
                </a>
                <a class="single-items" href="">
                  Vivo Y11 |{" "}
                </a>
                <a class="single-items" href="">
                  Vivo Y15 |{" "}
                </a>
                <a class="single-items" href="">
                  Vivo Y50 |{" "}
                </a>
                <a class="single-items" href="">
                  Vivo Y12 |{" "}
                </a>
                <a class="single-items" href="">
                  Reno2 F |{" "}
                </a>
                <a class="single-items" href="">
                  Oppo A12 |{" "}
                </a>
                <a class="single-items" href="">
                  Oppo F15 |{" "}
                </a>
                <a class="single-items" href="">
                  Oppo A31 |{" "}
                </a>
                <a class="single-items" href="">
                  Samsung A71 |{" "}
                </a>
                <a class="single-items" href="">
                  Samsung A51 |{" "}
                </a>
                <a class="single-items" href="">
                  Samsung A31 |{" "}
                </a>
                <a class="single-items" href="">
                  Realme X2 |{" "}
                </a>
                <a class="single-items" href="">
                  iPhone 11 |{" "}
                </a>
                <a class="single-items" href="">
                  iPhone 11 Pro |{" "}
                </a>
                <a class="single-items" href="">
                  iPhone 11 Pro Max |{" "}
                </a>
                <a class="single-items" href="">
                  Mobile Offers |{" "}
                </a>
                <a class="single-items" href="">
                  iphone x |{" "}
                </a>
                <a class="single-items" href="">
                  4G Mobile |{" "}
                </a>
                <a class="single-items" href="">
                  Nokia Mobile |{" "}
                </a>
                <a class="single-items" href="">
                  Samsung Mobile |{" "}
                </a>
                <a class="single-items" href="">
                  iphone |{" "}
                </a>
                <a class="single-items" href="">
                  Oppo Mobile |{" "}
                </a>
                <a class="single-items" href="">
                  Vivo Mobile |{" "}
                </a>
              </div>
              <div class="Items">
                <span class="item-type">Camera: </span>
                <a class="single-items" href="">
                  GoPro Action Camera |{" "}
                </a>
                <a class="single-items" href="">
                  Nikon Camera |{" "}
                </a>
                <a class="single-items" href="">
                  Canon Camera |{" "}
                </a>
                <a class="single-items" href="">
                  Sony Camera |{" "}
                </a>
                <a class="single-items" href="">
                  Canon DSLR |{" "}
                </a>
                <a class="single-items" href="">
                  Nikon DSLR |{" "}
                </a>
              </div>
              <div class="Items">
                <span class="item-type">Laptops: </span>
                <a class="single-items" href="">
                  Microsoft Surface Go Pentium Gold 64GB |{" "}
                </a>
                <a class="single-items" href="">
                  Microsoft Surface Go Pentium 128GB |{" "}
                </a>
                <a class="single-items" href="">
                  Branded Laptops |{" "}
                </a>
                <a class="single-items" href="">
                  Apple Laptops |{" "}
                </a>
                <a class="single-items" href="">
                  Acer Laptops |{" "}
                </a>
                <a class="single-items" href="">
                  Lenovo Laptops |{" "}
                </a>
                <a class="single-items" href="">
                  Dell Laptops |{" "}
                </a>
                <a class="single-items" href="">
                  Asus Laptops |{" "}
                </a>
                <a class="single-items" href="">
                  HP Laptops |{" "}
                </a>
                <a class="single-items" href="">
                  Gaming Laptops |{" "}
                </a>
                <a class="single-items" href="">
                  2 in 1 Laptops |{" "}
                </a>
                <a class="single-items" href="">
                  Business Laptops |{" "}
                </a>
              </div>
              <div class="Items">
                <span class="item-type">TVs: </span>
                <a class="single-items" href="">
                  Nokia TV |{" "}
                </a>
                <a class="single-items" href="">
                  Panasonic TV |{" "}
                </a>
                <a class="single-items" href="">
                  Thomson TV |{" "}
                </a>
                <a class="single-items" href="">
                  Vu TV |{" "}
                </a>
                <a class="single-items" href="">
                  Realme TV |{" "}
                </a>
                <a class="single-items" href="">
                  Motorola TV |{" "}
                </a>
                <a class="single-items" href="">
                  OnePlus TVs
                </a>
                <a class="single-items" href="">
                  OnePlus TVs |{" "}
                </a>
                <a class="single-items" href="">
                  TV |{" "}
                </a>
                <a class="single-items" href="">
                  LG TV |{" "}
                </a>
                <a class="single-items" href="">
                  Sony TV |{" "}
                </a>
                <a class="single-items" href="">
                  Samsung TV |{" "}
                </a>
                <a class="single-items" href="">
                  Iffalcon Tv |{" "}
                </a>
                <a class="single-items" href="">
                  Mi TV
                </a>
              </div>
              <div class="Items">
                <span class="item-type">Large Appliances: </span>
                <a class="single-items" href="">
                  Washing Machines |{" "}
                </a>
                <a class="single-items" href="">
                  Refrigerators |{" "}
                </a>
                <a class="single-items" href="">
                  Air Conditioners |{" "}
                </a>
                <a class="single-items" href="">
                  Electric Cookers |{" "}
                </a>
                <a class="single-items" href="">
                  Electric Jug(Heater) / Travel Kettles |{" "}
                </a>
                <a class="single-items" href="">
                  Induction Cooktops |{" "}
                </a>
                <a class="single-items" href="">
                  Inverter Batteries |{" "}
                </a>
                <a class="single-items" href="">
                  Inverters / stabilizer |{" "}
                </a>
                <a class="single-items" href="">
                  Irons / Iron Box |{" "}
                </a>
                <a class="single-items" href="">
                  Mixer Grinder Juicer |{" "}
                </a>
                <a class="single-items" href="">
                  Wet Grinders |{" "}
                </a>
                <a class="single-items" href="">
                  Chimneys |{" "}
                </a>
                <a class="single-items" href="">
                  Microwave Ovens |{" "}
                </a>
                <a class="single-items" href="">
                  Vacuum Cleaners |{" "}
                </a>
                <a class="single-items" href="">
                  Water Purifiers |{" "}
                </a>
                <a class="single-items" href="">
                  Fan
                </a>
              </div>
              <div class="Items">
                <span class="item-type">Clothing: </span>
                <a class="single-items" href="">
                  Men Shirts |{" "}
                </a>
                <a class="single-items" href="">
                  Kurta Pajama |{" "}
                </a>
                <a class="single-items" href="">
                  Kurtas |{" "}
                </a>
                <a class="single-items" href="">
                  Men T-Shirts |{" "}
                </a>
                <a class="single-items" href="">
                  Jeans |{" "}
                </a>
                <a class="single-items" href="">
                  Saree |{" "}
                </a>
                <a class="single-items" href="">
                  Dresses |{" "}
                </a>
                <a class="single-items" href="">
                  Kids Dresses |{" "}
                </a>
                <a class="single-items" href="">
                  Designer Salwar Suits |{" "}
                </a>
                <a class="single-items" href="">
                  Bra |{" "}
                </a>
                <a class="single-items" href="">
                  Designer Kurtis |{" "}
                </a>
                <a class="single-items" href="">
                  Track Pant |{" "}
                </a>
                <a class="single-items" href="">
                  Men Kurtas |{" "}
                </a>
                <a class="single-items" href="">
                  Gym Wear |{" "}
                </a>
                <a class="single-items" href="">
                  Party Dresses |{" "}
                </a>
                <a class="single-items" href="">
                  Palazzo Suits |{" "}
                </a>
                <a class="single-items" href="">
                  Boys Clothing |{" "}
                </a>
                <a class="single-items" href="">
                  Gloves |{" "}
                </a>
                <a class="single-items" href="">
                  Nighty |{" "}
                </a>
                <a class="single-items" href="">
                  Maxi Dresses |{" "}
                </a>
                <a class="single-items" href="">
                  Anarkali |{" "}
                </a>
                <a class="single-items" href="">
                  Gowns |{" "}
                </a>
                <a class="single-items" href="">
                  Culottes |{" "}
                </a>
                <a class="single-items" href="">
                  Salwar Suits |{" "}
                </a>
                <a class="single-items" href="">
                  Kurtis |{" "}
                </a>
                <a class="single-items" href="">
                  Designer Sarees |{" "}
                </a>
                <a class="single-items" href="">
                  Summer Dresses
                </a>
                <a class="single-items" href="">
                  Leggings |{" "}
                </a>
                <a class="single-items" href="">
                  Shorts |{" "}
                </a>
                <a class="single-items" href="">
                  Georgette Sarees |{" "}
                </a>
                <a class="single-items" href="">
                  Ethnic Wear |{" "}
                </a>
                <a class="single-items" href="">
                  Briefs &amp;Trunks
                </a>
              </div>
              <div class="Items">
                <span class="item-type">Footwear: </span>
                <a class="single-items" href="">
                  Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Adidas Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Reebok Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Nike Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Puma Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Boots |{" "}
                </a>
                <a class="single-items" href="">
                  Bata Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Woodland Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Skechers Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Sneakers |{" "}
                </a>
                <a class="single-items" href="">
                  Womens Boots |{" "}
                </a>
                <a class="single-items" href="">
                  Sports Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Loafers |{" "}
                </a>
                <a class="single-items" href="">
                  Sandals |{" "}
                </a>
                <a class="single-items" href="">
                  Lotto Sports Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Casual Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Womens Skechers Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Asics Sports Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  Formal Shoes |{" "}
                </a>
                <a class="single-items" href="">
                  School Shoes |{" "}
                </a>
              </div>
              <div class="Items">
                <span class="item-type">Groceries: </span>
                <a class="single-items" href="">
                  PhonePe Grocery Voucher |{" "}
                </a>
                <a class="single-items" href="">
                  Hand Wash |{" "}
                </a>
                <a class="single-items" href="">
                  Soap |{" "}
                </a>
                <a class="single-items" href="">
                  Cashew Nuts |{" "}
                </a>
                <a class="single-items" href="">
                  Sunflower Oil |{" "}
                </a>
                <a class="single-items" href="">
                  Eggs |{" "}
                </a>
                <a class="single-items" href="">
                  Toilet Cleaner |{" "}
                </a>
                <a class="single-items" href="">
                  Harpic Toilet Cleaner |{" "}
                </a>
                <a class="single-items" href="">
                  Dettol Soap |{" "}
                </a>
                <a class="single-items" href="">
                  Mustard Oil |{" "}
                </a>
                <a class="single-items" href="">
                  Biscuits |{" "}
                </a>
                <a class="single-items" href="">
                  Cheese |{" "}
                </a>
                <a class="single-items" href="">
                  Patanjali Atta |{" "}
                </a>
                <a class="single-items" href="">
                  Fortune Oil |{" "}
                </a>
                <a class="single-items" href="">
                  Aashirvaad Atta |{" "}
                </a>
                <a class="single-items" href="">
                  Tea |{" "}
                </a>
              </div>
              <div class="Items">
                <span class="item-type">Best Selling on Flipkart: </span>
                <a class="single-items" href="">
                  Bags |{" "}
                </a>
                <a class="single-items" href="">
                  Samsung Galaxy Tab S7+ |{" "}
                </a>
                <a class="single-items" href="">
                  Books |{" "}
                </a>
                <a class="single-items" href="">
                  Toy |{" "}
                </a>
                <a class="single-items" href="">
                  Candles |{" "}
                </a>
                <a class="single-items" href="">
                  Helmets |{" "}
                </a>
                <a class="single-items" href="">
                  Wall Clocks |{" "}
                </a>
                <a class="single-items" href="">
                  Baby Food |{" "}
                </a>
                <a class="single-items" href="">
                  Chocolates |{" "}
                </a>
                <a class="single-items" href="">
                  Cycles |{" "}
                </a>
                <a class="single-items" href="">
                  Calculators |{" "}
                </a>
                <a class="single-items" href="">
                  Lipsticks |{" "}
                </a>
                <a class="single-items" href="">
                  Fastrack Watches |{" "}
                </a>
                <a class="single-items" href="">
                  Wallets |{" "}
                </a>
                <a class="single-items" href="">
                  Earrings |{" "}
                </a>
                <a class="single-items" href="">
                  Gold Coins |{" "}
                </a>
                <a class="single-items" href="">
                  Handbags
                </a>
              </div>
              <div class="Items">
                <span class="item-type">Furniture: </span>
                <a class="single-items" href="">
                  Grand Furniture Sale |{" "}
                </a>
                <a class="single-items" href="">
                  Furniture |{" "}
                </a>
                <a class="single-items" href="">
                  Sofas |{" "}
                </a>
                <a class="single-items" href="">
                  Beds |{" "}
                </a>
                <a class="single-items" href="">
                  Dining sets |{" "}
                </a>
                <a class="single-items" href="">
                  Wardrobes |{" "}
                </a>
                <a class="single-items" href="">
                  Mattresses |{" "}
                </a>
                <a class="single-items" href="">
                  TV Units |{" "}
                </a>
                <a class="single-items" href="">
                  Tables |{" "}
                </a>
                <a class="single-items" href="">
                  Chairs |{" "}
                </a>
                <a class="single-items" href="">
                  Shelves |{" "}
                </a>
                <a class="single-items" href="">
                  Bean Bags |{" "}
                </a>
                <a class="single-items" href="">
                  Office Chairs |{" "}
                </a>
                <a class="single-items" href="">
                  Computer Table |{" "}
                </a>
                <a class="single-items" href="">
                  Office Tables |{" "}
                </a>
                <a class="single-items" href="">
                  Red Sofa |{" "}
                </a>
                <a class="single-items" href="">
                  Wakefit Beds |{" "}
                </a>
                <a class="single-items" href="">
                  White Sofa |{" "}
                </a>
                <a class="single-items" href="">
                  Wakefit Mattress |{" "}
                </a>
                <a class="single-items" href="">
                  Green Sofa |{" "}
                </a>
                <a class="single-items" href="">
                  Black Sofa |{" "}
                </a>
                <a class="single-items" href="">
                  Brown Sofa{" "}
                </a>
              </div>
            </div>
          </div>
          <div class="Policies">
            <div class="bottom1">
              <div class="bottom2">
                <div>
                  <h1>Flipkart: The One-stop Shopping Destination</h1>
                  E-commerce is revolutionizing the way we all shop in India.
                  Why do you want to hop from one store to another in search of
                  the latest phone when you can find it on the Internet in a
                  single click? Not only mobiles. Flipkart houses everything you
                  can possibly imagine, from trending electronics like laptops,
                  tablets, smartphones, and mobile accessories to in-vogue
                  fashion staples like shoes, clothing and lifestyle
                  accessories; from modern furniture like sofa sets, dining
                  tables, and wardrobes to appliances that make your life easy
                  like washing machines, TVs, ACs, mixer grinder juicers and
                  other time-saving kitchen and small appliances; from home
                  furnishings like cushion covers, mattresses and bedsheets to
                  toys and musical instruments, we got them all covered. You
                  name it, and you can stay assured about finding them all here.
                  For those of you with erratic working hours, Flipkart is your
                  best bet. Shop in your PJs, at night or in the wee hours of
                  the morning. This e-commerce never shuts down. <br />
                  <br />
                  What's more, with our year-round shopping festivals and
                  events, our prices are irresistible. We're sure you'll find
                  yourself picking up more than what you had in mind. If you are
                  wondering why you should shop from Flipkart when there are
                  multiple options available to you, well, the below will answer
                  your question. <br />
                  <br />
                  <h2>Flipkart Plus</h2>A world of limitless possibilities
                  awaits you - Flipkart Plus was kickstarted as a loyalty reward
                  programme for all its regular customers at zero subscription
                  fee. All you need is 500 supercoins to be a part of this
                  service. For every 100 rupees spent on Flipkart order, Plus
                  members earns 4 supercoins &non-plus members earn 2
                  supercoins. Free delivery, early access during sales and
                  shopping festivals, exchange offers and priority customer
                  service are the top benefits to a Flipkart Plus member. In
                  short, earn more when you shop more! <br />
                  <br />
                  What's more, you can even use the Flipkart supercoins for a
                  number of exciting services, like:
                  <br />
                  An annual Zomato Gold membership
                  <br />
                  An annual Hotstar Premium membership
                  <br />
                  6 months Gaana plus subscription
                  <br />
                  Rupees 550 instant discount on flights on ixigo
                  <br />
                  <br />
                  <h2>No Cost EMI</h2>
                  In an attempt to make high-end products accessible to all, our
                  No Cost EMI plan enables you to shop with us under EMI,
                  without shelling out any processing fee. Applicable on select
                  mobiles, laptops, large and small appliances, furniture,
                  electronics and watches, you can now shop without burning a
                  hole in your pocket. If you've been eyeing a product for a
                  long time, chances are it may be up for a no cost EMI. Take a
                  look ASAP! Terms and conditions apply.
                  <br />
                  <br />
                  <h2>EMI on Debit Cards</h2>
                  Did you know debit card holders account for 79.38 crore in the
                  country, while there are only 3.14 crore credit card holders?
                  After enabling EMI on Credit Cards, in another attempt to make
                  online shopping accessible to everyone, Flipkart introduces
                  EMI on Debit Cards, empowering you to shop confidently with us
                  without having to worry about pauses in monthly cash flow. At
                  present, we have partnered with Axis Bank, HDFC Bank, State
                  Bank of India and ICICI Bank for this facility. More power to
                  all our shoppers! Terms and conditions apply.
                  <br />
                  <br />
                  <h2>Mobile Exchange Offers</h2>
                  Get an instant discount on the phone that you have been eyeing
                  on. Exchange your old mobile for a new one after the Flipkart
                  experts calculate the value of your old phone, provided it is
                  in a working condition without damage to the screen. If a
                  phone is applicable for an exchange offer, you will see the
                  'Buy with Exchange' option on the product description of the
                  phone. So, be smart, always opt for an exchange wherever
                  possible. Terms and conditions apply. <br />
                  <br />
                  <h2>What Can You Buy From Flipkart?</h2>
                  <h2>Mobile Phones</h2>
                  From budget phones to state-of-the-art smartphones, we have a
                  mobile for everybody out there. Whether you're looking for
                  larger, fuller screens, power-packed batteries, blazing-fast
                  processors, beautification apps, high-tech selfie cameras or
                  just large internal space, we take care of all the essentials.
                  Shop from top brands in the country like Samsung, Apple, Oppo,
                  Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured,
                  you're buying from only the most reliable names in the market.
                  What's more, with Flipkart's Complete Mobile Protection Plan,
                  you will never again find the need to run around service
                  centres. This plan entails you to a number of post-purchase
                  solutions, starting at as low as Rupees 99 only! Broken
                  screens, liquid damage to phone, hardware and software
                  glitches, and replacements -{" "}
                  <b>the Flipkart Complete Mobile Protection</b>
                  covers a comprehensive range of post-purchase problems, with
                  door-to-door services. <br />
                  <br />
                  <h2>Electronic Devices and Accessories</h2>
                  When it comes to laptops, we are not far behind. Filter among
                  dozens of super-fast operating systems, hard disk capacity,
                  RAM, lifestyle, screen size and many other criterias for
                  personalized results in a flash. All you students out there,
                  confused about what laptop to get? Our{" "}
                  <b>Back To College Store</b>
                  segregates laptops purpose wise (gaming, browsing and
                  research, project work, entertainment, design, multitasking)
                  with recommendations from top brands and industry experts,
                  facilitating a shopping experience that is quicker and
                  simpler.
                  <br />
                  <br />
                  Photography lovers, you couldn't land at a better page than
                  ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot
                  cameras, millennial favourite instant cameras or action
                  cameras for adventure junkies: our range of cameras is as much
                  for beginners as it is for professionals. Canon, Nikon, GoPro,
                  Sony, and Fujifilm are some big names you'll find in our
                  store. Photography lovers, you couldn't land at a better page
                  than ours. Cutting-edge DSLR cameras, ever reliable
                  point-and-shoot cameras, millennial favourite instant cameras
                  or action cameras for adventure junkies: our range of cameras
                  is as much for beginners as it is for professionals. Canon,
                  Nikon, GoPro, Sony, and Fujifilm are some big names you'll
                  find in our store. <br />
                  <br />
                  Turn your home into a theatre with a stunning surround sound
                  system. Choose from our elaborate range of Sony home theatres,
                  JBL soundbars and Philips tower speakers for an experience to
                  remember.
                  <br />
                  <br />
                  How about jazzing up your phone with our quirky designer cases
                  and covers? Our wide-ranging mobile accessories starting from
                  headphones, power banks, memory cards, mobile chargers, to
                  selfie sticks can prove to be ideal travel companions for you
                  and your phone; never again worry about running out of charge
                  or memory on your next vacation.
                  <br />
                  <br />
                  <h2>Large Appliances</h2>
                  Sleek TVs, power-saving refrigerators, rapid-cooling ACs,
                  resourceful washing machines - discover everything you need to
                  run a house under one roof. Our{" "}
                  <b>Dependable TV and Appliance Store</b>
                  ensures zero transit damage, with a replacement guarantee if
                  anything goes wrong; delivery and installation as per your
                  convenience and a double warranty (Official Brand Warranty
                  along with an extended Flipkart Warranty) - rest assured,
                  value for money is what is promised and delivered. Shop from
                  market leaders in the country like Samsung, LG, Whirlpool,
                  Midea, Mi, Vu, Panasonic, Godrej, Sony, Daikin, and Hitachi
                  among many others. <br />
                  <br />
                  <h2>Small Home Appliances</h2>
                  Find handy and practical home appliances designed to make your
                  life simpler: electric kettles, OTGs, microwave ovens,
                  sandwich makers, hand blenders, coffee makers, and many more
                  other time-saving appliances that are truly crafted for a
                  quicker lifestyle. Live life king size with these appliances
                  at home.
                  <br />
                  <br />
                  <h2>Lifestyle</h2>
                  Flipkart, <b>'India ka Fashion Capital'</b>
                  , is your one-stop fashion destination for anything and
                  everything you need to look good. Our exhaustive range of
                  Western and Indian wear, summer and winter clothing, formal
                  and casual footwear, bridal and artificial jewellery,
                  long-lasting make-up, grooming tools and accessories are sure
                  to sweep you off your feet. Shop from crowd favourites like
                  Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma,
                  Revlon, Mac, and Sephora among dozens of other
                  top-of-the-ladder names. From summer staple maxi dresses,
                  no-nonsense cigarette pants, traditional Bandhani kurtis to
                  street-smart biker jackets, you can rely on us for a wardrobe
                  that is up to date. Explore our in-house brands like
                  Metronaut, Anmi, and Denizen, to name a few, for carefully
                  curated designs that are the talk of the town. Get ready to be
                  spoiled for choice.Festivals, office get-togethers, weddings,
                  brunches, or nightwear - Flipkart will have your back each
                  time.
                  <br />
                  <br />
                  <h2>Home and Furniture</h2>
                  Moving to a new place is never easy, especially if you're
                  buying new furniture. Beds, sofa sets, dining tables,
                  wardrobes, and TV units - it's not easy to set up everything
                  again. With the hundreds of options thrown at you, the ride
                  could be overwhelming. What place is reliable, what furniture
                  will stand the test of time? These are questions you must ask
                  before you choose a store. Well, our{" "}
                  <b>Durability Certified Furniture Store</b>
                  has not only curated a range of furniture keeping in mind the
                  modern Indian consumer but furniture that comes with a lab
                  certification, ensuring they last you for up to 10 years. Yes,
                  all our furniture has gone through 35 stability and load tests
                  so that you receive only the best-quality furniture.{" "}
                  <b>Be FurniSure</b>, always. Names to look out for are
                  Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and
                  Perfect Homes. <br />
                  <br />
                  You may have your furniture all set up, but they could end up
                  looking flat and incomplete without complementary decor.
                  Curtains, cushion covers, bed sheets, wall shelves, paintings,
                  floor lamps - find everything that turns a house to an
                  inviting home under one roof at Flipkart. <br />
                  <br />
                  <h2>Baby and Kids</h2>
                  Your kids deserve only the best. From bodysuits, booties,
                  diapers to strollers, if you're an expecting mother or a new
                  mother, you will find everything you need to set sail on a
                  smooth parenting journey with the help of our baby care
                  collection. When it comes to safety, hygiene and comfort, you
                  can rely on us without a second thought. Huggies, Pampers,
                  MamyPoko, and Johnson &Johnson: we host only the most-trusted
                  names in the business for your baby.
                  <br />
                  <br />
                  <h2>Books, Sports and Games</h2>
                  Work hard and no play? We don't believe in that. Get access to
                  best-selling fiction and non-fiction books by your favourite
                  authors, thrilling English and Indian blockbusters,
                  most-wanted gaming consoles, and a tempting range of fitness
                  and sports gadgets and equipment bound to inspire you to get
                  moving. <br />
                  <br />
                  <h2>Grocery/Supermart</h2>
                  Launching into the grocery vertical, Flipkart introduces{" "}
                  <b>Supermart</b>
                  that is out to bring everyday essentials close to you. From
                  pulses, spices, dairy, personal and sanitary care, breakfast
                  essentials, health drinks, spreads, ready to cook, grooming to
                  cleaning agents, we are happy to present everything you need
                  to run a house. Now buy Grocery products for as low as 1 Rupee
                  only - our <b>1 Rupee Store</b>
                  presents new products every day for a nominal price of 1 Rupee
                  only. Terms and conditions apply.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="footer">
          <div class="F-row-1">
            <div class="F-column-1">
              <div class="F-heading">
                <p>ABOUT</p>
              </div>
              <div class="F-list">
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Flipkart Stories</a>
                <a href="#">Press</a>
                <a href="#">Flipkart Wholesale</a>
                <a href="#">Corporate Information</a>
              </div>
            </div>
            <div class="F-column-2">
              <div class="F-heading">
                <p>HELP</p>
              </div>
              <div class="F-list">
                <a href="#">Payments</a>
                <a href="#">Shipping</a>
                <a href="#">Cancellation & Returns</a>
                <a href="#">FAQ</a>
                <a href="#">Report Infringement</a>
              </div>
            </div>

            <div class="F-column-3">
              <div class="F-heading">
                <p>POLICY</p>
              </div>
              <div class="F-list">
                <a href="#">Return Policy</a>
                <a href="#">Terms Of Use</a>
                <a href="#">Security</a>
                <a href="#">Privacy</a>
                <a href="#">Sitemap</a>
                <a href="#">EPR Compliance</a>
              </div>
            </div>
            <div class="F-column-4">
              <div class="F-heading">
                <p>SOCIAL</p>
              </div>
              <div class="F-list">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">YouTube</a>
              </div>
            </div>
            <div class="F-column-5">
              <div class="F-heading">
                <p>Mail Us:</p>
              </div>
              <div class="F-list">
                <p>Flipkart Internet Private Limited,</p>
                <p>Buildings Alyssa, Begonia &</p>
                <p>Clove Embassy Tech Village,</p>
                <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                <p>Bengaluru, 560103,</p>
                <p>Karnataka, India</p>
              </div>
            </div>
            <div class="F-column-6">
              <div class="F-heading">
                <p>Registered Office Address:</p>
              </div>
              <div class="F-list-address">
                <p>Flipkart Internet Private Limited,</p>
                <p>Buildings Alyssa, Begonia &</p>
                <p>Clove Embassy Tech Village,</p>
                <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                <p>Bengaluru, 560103,</p>
                <p>Karnataka, India</p>
                <p>CIN : U51109KA2012PTC066107</p>
                <p>Telephone: 1800 202 9898</p>
              </div>
            </div>
          </div>
          <div class="F-row-2">
            <div class="F-row2-column">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="0%"
                      x2="86.876%"
                      y1="0%"
                      y2="80.202%"
                    >
                      <stop offset="0%" stop-color="#FFD800" />
                      <stop offset="100%" stop-color="#FFAF00" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path d="M-2-2h20v20H-2z" />
                    <path
                      fill="url(#a)"
                      fill-rule="nonzero"
                      d="M15.93 5.614h-2.948V4.14c0-.818-.655-1.473-1.473-1.473H8.56c-.817 0-1.473.655-1.473 1.473v1.474H4.14c-.818 0-1.466.656-1.466 1.474l-.007 8.105c0 .818.655 1.474 1.473 1.474h11.79c.818 0 1.474-.656 1.474-1.474V7.088c0-.818-.656-1.474-1.474-1.474zm-4.421 0H8.56V4.14h2.948v1.474z"
                      transform="translate(-2 -2)"
                    />
                  </g>
                </svg>
                Sell On Flipkart
              </p>
            </div>
            <div class="F-row2-column">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="0%"
                      x2="86.876%"
                      y1="0%"
                      y2="80.202%"
                    >
                      <stop offset="0%" stop-color="#FFD800" />
                      <stop offset="100%" stop-color="#FFAF00" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path d="M-3-3h20v20H-3z" />
                    <path
                      fill="url(#a)"
                      fill-rule="nonzero"
                      d="M10.492 3C6.353 3 3 6.36 3 10.5c0 4.14 3.353 7.5 7.492 7.5C14.64 18 18 14.64 18 10.5 18 6.36 14.64 3 10.492 3zm3.18 12L10.5 13.088 7.327 15l.84-3.607L5.37 8.97l3.69-.315L10.5 5.25l1.44 3.398 3.69.315-2.798 2.422.84 3.615z"
                      transform="translate(-3 -3)"
                    />
                  </g>
                </svg>
                Advertise
              </p>
            </div>
            <div class="F-row2-column">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="0%"
                      x2="86.876%"
                      y1="0%"
                      y2="80.202%"
                    >
                      <stop offset="0%" stop-color="#FFD800" />
                      <stop offset="100%" stop-color="#FFAF00" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path d="M-1-1h20v20H-1z" />
                    <path
                      fill="url(#a)"
                      fill-rule="nonzero"
                      d="M16.667 5H14.85c.092-.258.15-.542.15-.833a2.497 2.497 0 0 0-4.583-1.375L10 3.35l-.417-.567A2.51 2.51 0 0 0 7.5 1.667a2.497 2.497 0 0 0-2.5 2.5c0 .291.058.575.15.833H3.333c-.925 0-1.658.742-1.658 1.667l-.008 9.166A1.66 1.66 0 0 0 3.333 17.5h13.334a1.66 1.66 0 0 0 1.666-1.667V6.667A1.66 1.66 0 0 0 16.667 5zm0 6.667H3.333v-5h4.234L5.833 9.025l1.35.975 1.984-2.7L10 6.167l.833 1.133 1.984 2.7 1.35-.975-1.734-2.358h4.234v5z"
                      transform="translate(-1 -1)"
                    />
                  </g>
                </svg>
                Gift Cards
              </p>
            </div>
            <div class="F-row2-column">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="0%"
                      x2="86.876%"
                      y1="0%"
                      y2="80.202%"
                    >
                      <stop offset="0%" stop-color="#FFD800" />
                      <stop offset="100%" stop-color="#FFAF00" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path d="M-2-3h20v20H-2z" />
                    <path
                      fill="url(#a)"
                      fill-rule="nonzero"
                      d="M9.5 3C5.36 3 2 6.36 2 10.5 2 14.64 5.36 18 9.5 18c4.14 0 7.5-3.36 7.5-7.5C17 6.36 13.64 3 9.5 3zm.75 12.75h-1.5v-1.5h1.5v1.5zm1.553-5.813l-.676.69c-.54.548-.877.998-.877 2.123h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.645.443-1.057 0-.825-.675-1.5-1.5-1.5S8 7.425 8 8.25H6.5a3 3 0 1 1 6 0c0 .66-.27 1.26-.697 1.688z"
                      transform="translate(-2 -3)"
                    />
                  </g>
                </svg>
                Help Center
              </p>
            </div>
            <div class="F-row2-column">
              <p>© 2007-2021 Flipkart.com</p>
            </div>
            <svg
              class="Payment-Method"
              width="377"
              height="18"
              viewBox="0 0 377 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M375 0.669922H341C340.735 0.669922 340.48 0.775279 340.293 0.962815C340.105 1.15035 340 1.40471 340 1.66992V16.3299C340 16.5951 340.105 16.8495 340.293 17.037C340.48 17.2246 340.735 17.3299 341 17.3299H375C375.265 17.3299 375.52 17.2246 375.707 17.037C375.895 16.8495 376 16.5951 376 16.3299V1.66992C376 1.40471 375.895 1.15035 375.707 0.962815C375.52 0.775279 375.265 0.669922 375 0.669922V0.669922Z"
                fill="white"
                stroke="#E0E0E0"
                stroke-width="0.67"
              />
              <path
                d="M355.25 6.81002H353.93V7.81002H355.47V8.25002H353.38V5.00002H355.45V5.45002H353.93V6.34002H355.25V6.81002ZM357.71 7.49002H356.47L356.21 8.23002H355.64L356.85 5.00002H357.34L358.55 8.20002H358L357.71 7.49002ZM356.63 7.00002H357.56L357.09 5.67002L356.63 7.00002ZM360.63 7.37002C360.633 7.30709 360.62 7.2444 360.594 7.18706C360.568 7.12971 360.529 7.07933 360.48 7.04002C360.315 6.93811 360.137 6.86063 359.95 6.81002C359.731 6.75461 359.522 6.66698 359.33 6.55002C359.201 6.48147 359.093 6.37928 359.017 6.25429C358.941 6.1293 358.901 5.98615 358.9 5.84002C358.897 5.71641 358.924 5.59392 358.978 5.48264C359.032 5.37136 359.111 5.27449 359.21 5.20002C359.443 5.04698 359.722 4.97657 360 5.00002C360.203 4.99611 360.404 5.03709 360.59 5.12002C360.761 5.19814 360.906 5.32292 361.01 5.48002C361.11 5.62741 361.162 5.80193 361.16 5.98002H360.6C360.605 5.90705 360.594 5.83379 360.566 5.76608C360.538 5.69837 360.495 5.63808 360.44 5.59002C360.379 5.53624 360.307 5.49525 360.23 5.46949C360.153 5.44373 360.071 5.43371 359.99 5.44002C359.84 5.43119 359.692 5.47351 359.57 5.56002C359.521 5.59933 359.481 5.64971 359.455 5.70706C359.429 5.7644 359.417 5.82709 359.42 5.89002C359.423 5.9473 359.439 6.00315 359.467 6.05337C359.494 6.1036 359.533 6.1469 359.58 6.18002C359.748 6.28283 359.929 6.36033 360.12 6.41002C360.33 6.46645 360.532 6.55052 360.72 6.66002C360.837 6.75114 360.933 6.86729 361 7.00002C361.075 7.13071 361.113 7.27936 361.11 7.43002C361.113 7.55236 361.087 7.67373 361.033 7.78354C360.979 7.89335 360.899 7.98828 360.8 8.06002C360.559 8.23231 360.266 8.31699 359.97 8.30002C359.75 8.30326 359.531 8.25891 359.33 8.17002C359.15 8.093 358.994 7.96857 358.88 7.81002C358.771 7.6589 358.715 7.4762 358.72 7.29002H359.27C359.266 7.36911 359.28 7.44807 359.311 7.52085C359.342 7.59364 359.39 7.65834 359.45 7.71002C359.601 7.81816 359.784 7.87112 359.97 7.86002C360.126 7.87026 360.281 7.82802 360.41 7.74002C360.465 7.70398 360.51 7.65503 360.541 7.59748C360.572 7.53994 360.589 7.47557 360.59 7.41002L360.63 7.37002ZM362.72 6.51002L363.42 5.00002H364L362.93 7.00002V8.23002H362.37V7.06002L361.3 5.06002H361.91L362.72 6.51002ZM367.41 6.77002H366.09V7.77002H367.63V8.21002H365.5V5.00002H367.58V5.45002H366.05V6.34002H367.37L367.41 6.77002ZM368.76 5.00002L369.69 7.46002L370.61 5.00002H371.33V8.20002H370.77V7.18002L370.83 5.77002L369.88 8.23002H369.48L368.54 5.77002L368.6 7.18002V8.23002H368V5.00002H368.76ZM372.57 8.20002H372V5.00002H372.55L372.57 8.20002ZM355.93 11.69C355.938 11.9718 355.883 12.2518 355.77 12.51C355.673 12.737 355.509 12.9289 355.3 13.06C355.092 13.1857 354.853 13.2514 354.61 13.25C354.364 13.2502 354.122 13.1846 353.91 13.06C353.706 12.9276 353.543 12.7405 353.44 12.52C353.328 12.2648 353.274 11.9884 353.28 11.71V11.53C353.273 11.2451 353.328 10.9621 353.44 10.7C353.54 10.475 353.703 10.2839 353.91 10.15C354.116 10.0197 354.356 9.95356 354.6 9.96002C354.847 9.95396 355.09 10.02 355.3 10.15C355.505 10.2781 355.666 10.4668 355.76 10.69C355.877 10.9473 355.935 11.2274 355.93 11.51V11.69ZM355.38 11.52C355.399 11.2345 355.325 10.9504 355.17 10.71C355.108 10.6167 355.023 10.5409 354.923 10.4901C354.823 10.4393 354.712 10.4151 354.6 10.42C354.49 10.4178 354.381 10.4432 354.283 10.4938C354.185 10.5445 354.102 10.6188 354.04 10.71C353.89 10.9453 353.816 11.2213 353.83 11.5V11.69C353.812 11.9754 353.886 12.2591 354.04 12.5C354.106 12.589 354.192 12.6612 354.291 12.711C354.39 12.7608 354.499 12.7867 354.61 12.7867C354.721 12.7867 354.83 12.7608 354.929 12.711C355.028 12.6612 355.114 12.589 355.18 12.5C355.327 12.2528 355.397 11.9672 355.38 11.68V11.52ZM357.04 12.02V13.2H356.48V10H357.71C358.018 9.9862 358.32 10.0858 358.56 10.28C358.662 10.3744 358.743 10.4889 358.798 10.6163C358.853 10.7437 358.881 10.8812 358.88 11.02C358.887 11.1572 358.862 11.2941 358.809 11.4206C358.755 11.547 358.673 11.6596 358.57 11.75C358.322 11.9428 358.013 12.0388 357.7 12.02H357.04ZM357.04 11.57H357.71C357.872 11.5813 358.033 11.5313 358.16 11.43C358.215 11.3799 358.258 11.3179 358.286 11.2486C358.314 11.1792 358.325 11.1045 358.32 11.03C358.324 10.9527 358.312 10.8753 358.285 10.8029C358.257 10.7306 358.215 10.6648 358.16 10.61C358.037 10.5055 357.881 10.4487 357.72 10.45H357L357.04 11.57ZM361.67 10.45H360.67V13.2H360.12V10.48H359.12V10H361.65L361.67 10.45ZM362.67 13.2H362.12V10H362.67V13.2ZM365.91 11.69C365.918 11.9718 365.863 12.2518 365.75 12.51C365.65 12.735 365.486 12.9261 365.28 13.06C365.072 13.1857 364.833 13.2514 364.59 13.25C364.344 13.2502 364.102 13.1846 363.89 13.06C363.686 12.9276 363.523 12.7405 363.42 12.52C363.308 12.2648 363.254 11.9884 363.26 11.71V11.53C363.253 11.2451 363.308 10.9621 363.42 10.7C363.52 10.475 363.683 10.2839 363.89 10.15C364.096 10.0197 364.336 9.95356 364.58 9.96002C364.826 9.9551 365.069 10.021 365.28 10.15C365.485 10.2781 365.646 10.4668 365.74 10.69C365.857 10.9473 365.915 11.2274 365.91 11.51V11.69ZM365.35 11.52C365.372 11.2356 365.302 10.9516 365.15 10.71C365.088 10.6167 365.003 10.5409 364.903 10.4901C364.803 10.4393 364.692 10.4151 364.58 10.42C364.47 10.4178 364.361 10.4432 364.263 10.4938C364.165 10.5445 364.082 10.6188 364.02 10.71C363.87 10.9453 363.796 11.2213 363.81 11.5V11.69C363.792 11.9754 363.866 12.2591 364.02 12.5C364.082 12.5934 364.167 12.6692 364.267 12.72C364.367 12.7708 364.478 12.7949 364.59 12.79C364.699 12.7952 364.808 12.7722 364.906 12.7232C365.004 12.6741 365.088 12.6008 365.15 12.51C365.302 12.2648 365.372 11.9776 365.35 11.69V11.52ZM369 13.23H368.45L367 11V13.27H366.44V10H367L368.43 12.28V10H369V13.23ZM371.33 12.41C371.333 12.3471 371.32 12.2844 371.294 12.2271C371.268 12.1697 371.229 12.1193 371.18 12.08C371.015 11.9781 370.837 11.9006 370.65 11.85C370.431 11.7946 370.222 11.707 370.03 11.59C369.901 11.5215 369.793 11.4193 369.717 11.2943C369.641 11.1693 369.601 11.0262 369.6 10.88C369.597 10.7564 369.624 10.6339 369.678 10.5226C369.732 10.4114 369.811 10.3145 369.91 10.24C370.145 10.0626 370.436 9.97409 370.73 9.99002C370.933 9.98611 371.134 10.0271 371.32 10.11C371.49 10.1853 371.633 10.3109 371.73 10.47C371.834 10.6152 371.887 10.7913 371.88 10.97H371.33C371.335 10.897 371.324 10.8238 371.296 10.7561C371.268 10.6884 371.225 10.6281 371.17 10.58C371.109 10.5262 371.037 10.4853 370.96 10.4595C370.883 10.4337 370.801 10.4237 370.72 10.43C370.57 10.4212 370.422 10.4635 370.3 10.55C370.251 10.5893 370.211 10.6397 370.185 10.6971C370.159 10.7544 370.147 10.8171 370.15 10.88C370.15 10.9378 370.165 10.9945 370.193 11.0451C370.221 11.0958 370.261 11.1387 370.31 11.17C370.478 11.2728 370.659 11.3503 370.85 11.4C371.06 11.4564 371.262 11.5405 371.45 11.65C371.584 11.7325 371.697 11.8455 371.78 11.98C371.855 12.1107 371.893 12.2594 371.89 12.41C371.891 12.532 371.864 12.6525 371.81 12.7619C371.756 12.8713 371.677 12.9666 371.58 13.04C371.339 13.2123 371.046 13.297 370.75 13.28C370.53 13.2842 370.311 13.2398 370.11 13.15C369.928 13.0768 369.771 12.9516 369.66 12.79C369.551 12.6389 369.495 12.4562 369.5 12.27H370.05C370.046 12.3491 370.06 12.4281 370.091 12.5009C370.122 12.5736 370.17 12.6383 370.23 12.69C370.38 12.7997 370.564 12.8528 370.75 12.84C370.903 12.852 371.055 12.8095 371.18 12.72C371.23 12.6855 371.271 12.6391 371.299 12.5851C371.327 12.531 371.341 12.4709 371.34 12.41H371.33Z"
                fill="#4E4E4E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M349.45 5.84V5H348.67V5.84H345.53V5H344.74V5.84H344.35C344.244 5.84387 344.139 5.86867 344.042 5.91299C343.945 5.95731 343.858 6.02028 343.786 6.0983C343.713 6.17632 343.657 6.26785 343.62 6.36766C343.583 6.46748 343.566 6.57361 343.57 6.68V12.16C343.565 12.3758 343.644 12.5851 343.792 12.7423C343.94 12.8996 344.144 12.9922 344.36 13H349.85C350.066 12.9922 350.27 12.8996 350.418 12.7423C350.565 12.5851 350.645 12.3758 350.64 12.16V6.68C350.645 6.46418 350.565 6.25494 350.418 6.09768C350.27 5.94042 350.066 5.84783 349.85 5.84H349.45ZM344.35 12.16V7.53H349.84V12.16H344.35Z"
                fill="#212121"
              />
              <path
                d="M346.22 9.8999C346.418 9.8999 346.611 9.84125 346.776 9.73137C346.94 9.62149 347.068 9.46531 347.144 9.28259C347.22 9.09986 347.24 8.89879 347.201 8.70481C347.162 8.51083 347.067 8.33265 346.927 8.1928C346.787 8.05294 346.609 7.9577 346.415 7.91912C346.221 7.88053 346.02 7.90034 345.838 7.97602C345.655 8.05171 345.499 8.17988 345.389 8.34433C345.279 8.50878 345.22 8.70212 345.22 8.8999C345.22 9.16512 345.326 9.41947 345.513 9.60701C345.701 9.79455 345.955 9.8999 346.22 9.8999Z"
                fill="#212121"
              />
              <path
                d="M347.79 11.79C347.988 11.79 348.181 11.7314 348.346 11.6215C348.51 11.5116 348.638 11.3554 348.714 11.1727C348.79 10.99 348.809 10.7889 348.771 10.5949C348.732 10.401 348.637 10.2228 348.497 10.0829C348.357 9.94308 348.179 9.84784 347.985 9.80925C347.791 9.77067 347.59 9.79047 347.407 9.86616C347.225 9.94185 347.068 10.07 346.959 10.2345C346.849 10.3989 346.79 10.5923 346.79 10.79C346.79 11.0553 346.895 11.3096 347.083 11.4971C347.27 11.6847 347.525 11.79 347.79 11.79Z"
                fill="#212121"
              />
              <path
                d="M347.76 8.58008L346.11 11.1401"
                stroke="#212121"
                stroke-width="0.63"
                stroke-linecap="square"
              />
              <path
                d="M333.67 0.669922H299.67C299.405 0.669922 299.15 0.775279 298.963 0.962815C298.775 1.15035 298.67 1.40471 298.67 1.66992V16.3299C298.67 16.5951 298.775 16.8495 298.963 17.037C299.15 17.2246 299.405 17.3299 299.67 17.3299H333.67C333.935 17.3299 334.189 17.2246 334.377 17.037C334.565 16.8495 334.67 16.5951 334.67 16.3299V1.66992C334.67 1.40471 334.565 1.15035 334.377 0.962815C334.189 0.775279 333.935 0.669922 333.67 0.669922V0.669922Z"
                fill="white"
                stroke="#E0E0E0"
                stroke-width="0.67"
              />
              <path
                d="M312.47 7.18981C312.451 7.49543 312.315 7.78196 312.09 7.9898C311.842 8.19127 311.529 8.2945 311.21 8.2798C310.974 8.28478 310.742 8.22233 310.54 8.09981C310.345 7.97115 310.189 7.79122 310.09 7.57981C309.978 7.33507 309.92 7.06901 309.92 6.79981V6.50981C309.918 6.23498 309.972 5.96265 310.08 5.70981C310.184 5.49211 310.349 5.30923 310.555 5.18324C310.761 5.05725 310.999 4.99354 311.24 4.99981C311.55 4.98588 311.853 5.08946 312.09 5.28981C312.316 5.50072 312.452 5.79091 312.47 6.09981H311.91C311.906 5.9145 311.835 5.73697 311.71 5.59981C311.579 5.49093 311.41 5.43717 311.24 5.44981C311.131 5.44445 311.023 5.46635 310.926 5.51351C310.828 5.56068 310.743 5.6316 310.68 5.71981C310.537 5.95031 310.467 6.21881 310.48 6.4898V6.77981C310.467 7.05581 310.533 7.32976 310.67 7.56981C310.729 7.65779 310.81 7.72896 310.904 7.7763C310.999 7.82364 311.104 7.84552 311.21 7.83981C311.387 7.85562 311.562 7.80179 311.7 7.68981C311.83 7.55936 311.905 7.38399 311.91 7.19981L312.47 7.18981ZM314.76 7.4898H313.52L313.26 8.2298H312.68L313.89 4.99981H314.39L315.6 8.19981H315L314.76 7.4898ZM313.67 6.99981H314.6L314.14 5.66981L313.67 6.99981ZM317.67 7.36981C317.671 7.3072 317.657 7.24523 317.631 7.18823C317.606 7.13123 317.567 7.08057 317.52 7.03981C317.352 6.938 317.17 6.86056 316.98 6.80981C316.764 6.75665 316.558 6.66884 316.37 6.54981C316.24 6.48174 316.13 6.37993 316.053 6.25503C315.975 6.13013 315.933 5.98672 315.93 5.83981C315.927 5.71619 315.954 5.5937 316.008 5.48242C316.062 5.37115 316.141 5.27428 316.24 5.19981C316.466 5.05446 316.732 4.98444 317 4.99981C317.206 4.99605 317.411 5.03698 317.6 5.11981C317.766 5.19674 317.908 5.31781 318.01 5.46981C318.109 5.62134 318.161 5.79875 318.16 5.97981H317.61C317.613 5.90707 317.601 5.83448 317.573 5.76712C317.545 5.69976 317.503 5.63924 317.45 5.58981C317.325 5.48401 317.164 5.43032 317 5.43981C316.85 5.43097 316.702 5.47329 316.58 5.55981C316.53 5.59861 316.489 5.64864 316.461 5.70592C316.433 5.7632 316.419 5.82615 316.42 5.88981C316.423 5.94833 316.439 6.00533 316.469 6.05587C316.499 6.1064 316.54 6.14895 316.59 6.17981C316.755 6.28172 316.933 6.35919 317.12 6.40981C317.33 6.46623 317.532 6.5503 317.72 6.65981C317.861 6.73746 317.978 6.85141 318.06 6.9898C318.13 7.11836 318.165 7.26339 318.16 7.40981C318.164 7.53367 318.138 7.65675 318.084 7.7683C318.03 7.87985 317.95 7.97649 317.85 8.04981C317.609 8.22209 317.316 8.30677 317.02 8.28981C316.8 8.28824 316.583 8.24409 316.38 8.15981C316.202 8.07957 316.047 7.95575 315.93 7.79981C315.821 7.64868 315.765 7.46599 315.77 7.27981H316.33C316.326 7.3589 316.34 7.43785 316.371 7.51064C316.403 7.58342 316.45 7.64813 316.51 7.69981C316.657 7.80798 316.838 7.86107 317.02 7.84981C317.176 7.86165 317.331 7.81926 317.46 7.72981C317.515 7.69674 317.561 7.64983 317.592 7.59371C317.624 7.53758 317.64 7.4742 317.64 7.40981L317.67 7.36981ZM321.25 8.1898H320.7V6.80981H319.26V8.2298H318.71V4.99981H319.26V6.36981H320.7V4.99981H321.25V8.1898ZM325.58 6.67981C325.588 6.9616 325.533 7.24163 325.42 7.49981C325.323 7.72678 325.159 7.91869 324.95 8.04981C324.741 8.17394 324.503 8.23946 324.26 8.23946C324.017 8.23946 323.779 8.17394 323.57 8.04981C323.364 7.91993 323.2 7.7321 323.1 7.50981C322.98 7.25364 322.921 6.9727 322.93 6.68981V6.54981C322.923 6.2681 322.978 5.98827 323.09 5.72981C323.19 5.50478 323.353 5.31369 323.56 5.17981C323.714 5.0798 323.888 5.01416 324.07 4.98734C324.252 4.96052 324.437 4.97316 324.613 5.02439C324.79 5.07562 324.953 5.16425 325.092 5.28425C325.232 5.40424 325.343 5.55279 325.42 5.71981C325.528 5.97942 325.583 6.25844 325.58 6.53981V6.67981ZM325 6.54981C325.018 6.26122 324.944 5.97439 324.79 5.72981C324.727 5.64042 324.643 5.56805 324.545 5.51918C324.448 5.4703 324.339 5.44647 324.23 5.44981C324.119 5.44657 324.01 5.47038 323.91 5.51918C323.811 5.56797 323.725 5.64027 323.66 5.72981C323.512 5.96948 323.438 6.24814 323.45 6.52981V6.71981C323.432 7.00523 323.506 7.28886 323.66 7.52981C323.724 7.62118 323.809 7.69542 323.909 7.746C324.008 7.79657 324.118 7.82192 324.23 7.81981C324.341 7.82578 324.452 7.80318 324.551 7.75415C324.651 7.70513 324.737 7.63133 324.8 7.53981C324.947 7.29258 325.017 7.00698 325 6.71981V6.54981ZM328.64 8.2298H328.09L326.66 5.99981V8.2298H326.11V4.99981H326.66L328.09 7.27981V4.99981H328.64V8.2298ZM310.03 13.2298V9.99981H311C311.262 9.99872 311.52 10.0641 311.75 10.1898C311.968 10.3177 312.145 10.505 312.26 10.7298C312.383 10.9748 312.445 11.2458 312.44 11.5198V11.6798C312.447 11.9572 312.385 12.232 312.26 12.4798C312.144 12.7073 311.963 12.8953 311.74 13.0198C311.506 13.1425 311.244 13.2044 310.98 13.1998L310.03 13.2298ZM310.58 10.4798V12.7898H311C311.123 12.7981 311.247 12.7781 311.361 12.7313C311.476 12.6845 311.578 12.6122 311.66 12.5198C311.832 12.294 311.918 12.0134 311.9 11.7298V11.5498C311.922 11.2688 311.844 10.9891 311.68 10.7598C311.6 10.6644 311.498 10.5893 311.384 10.5406C311.269 10.492 311.144 10.4711 311.02 10.4798H310.58ZM314.84 11.7998H313.52V12.7998H315.06V13.2398H313V9.99981H315V10.4498H313.48V11.3398H314.8L314.84 11.7998ZM316.07 12.7998H317.52V13.2398H315.52V9.99981H316.08L316.07 12.7998ZM318.53 13.2398H318V9.99981H318.55L318.53 13.2398ZM320.34 12.5498L321.15 10.0398H321.77L320.61 13.2398H320.08L318.93 9.99981H319.54L320.34 12.5498ZM324 11.7998H322.68V12.7998H324.22V13.2398H322.13V9.99981H324.2V10.4498H322.68V11.3398H324V11.7998ZM325.85 11.9998H325.23V13.2298H324.67V9.99981H325.8C326.104 9.98272 326.404 10.071 326.65 10.2498C326.751 10.3392 326.831 10.4504 326.883 10.5752C326.935 10.6999 326.958 10.8349 326.95 10.9698C326.952 11.1604 326.9 11.3478 326.8 11.5098C326.69 11.6573 326.541 11.7715 326.37 11.8398L327.09 13.1698H326.49L325.85 11.9998ZM325.23 11.5498H325.8C325.959 11.5626 326.117 11.5123 326.24 11.4098C326.295 11.3617 326.338 11.3015 326.366 11.2337C326.394 11.166 326.406 11.0928 326.4 11.0198C326.405 10.9478 326.394 10.8757 326.368 10.8084C326.342 10.7411 326.302 10.6801 326.25 10.6298C326.192 10.5771 326.124 10.5366 326.05 10.5108C325.976 10.4851 325.898 10.4745 325.82 10.4798H325.23V11.5498ZM328.42 11.5498L329.16 10.0298H329.77L328.7 12.0298V13.1998H328.14V12.0598L327.07 10.0598H327.68L328.42 11.5498Z"
                fill="#4E4E4E"
              />
              <path
                d="M303.45 8.12986L303.27 8.62986H305.86C305.805 8.93062 305.637 9.19888 305.39 9.37986C304.943 9.66134 304.418 9.79433 303.89 9.75986H303.35V10.3299C303.594 10.3287 303.834 10.3982 304.04 10.5299C304.246 10.6829 304.425 10.8687 304.57 11.0799L306.36 13.4999H307.48L305.39 10.8099C305.242 10.589 305.064 10.3903 304.86 10.2199C305.346 10.1533 305.802 9.94459 306.17 9.61986C306.453 9.35861 306.631 9.00299 306.67 8.61986H307.82L307.98 8.11986H306.68C306.661 7.87406 306.59 7.63501 306.473 7.41804C306.356 7.20106 306.195 7.01094 306 6.85986H307.79L307.97 6.35986H303.41L303.25 6.85986H304.16C304.604 6.83145 305.043 6.9706 305.39 7.24986C305.638 7.47903 305.792 7.79304 305.82 8.12986H303.45Z"
                fill="#212121"
              />
              <path
                d="M292.33 0.669922H258.33C258.065 0.669922 257.811 0.775279 257.623 0.962815C257.435 1.15035 257.33 1.40471 257.33 1.66992V16.3299C257.33 16.5951 257.435 16.8495 257.623 17.037C257.811 17.2246 258.065 17.3299 258.33 17.3299H292.33C292.595 17.3299 292.85 17.2246 293.037 17.037C293.225 16.8495 293.33 16.5951 293.33 16.3299V1.66992C293.33 1.40471 293.225 1.15035 293.037 0.962815C292.85 0.775279 292.595 0.669922 292.33 0.669922V0.669922Z"
                fill="white"
                stroke="#E0E0E0"
                stroke-width="0.67"
              />
              <path
                d="M272.86 7.9998H272.31L270.88 5.7298V7.9998H270.33V4.7998H270.88L272.31 7.0798V4.7998H272.86V7.9998ZM275.39 6.5698H274.08V7.5698H275.61V7.9998H273.52V4.7998H275.6V5.2498H274.08V6.1298H275.39V6.5698ZM278.39 5.2498H277.39V7.9998H276.84V5.2498H275.84V4.7998H278.38L278.39 5.2498ZM270.33 12.9998V9.7998H271.42C271.714 9.77859 272.006 9.85602 272.25 10.0198C272.346 10.0973 272.422 10.197 272.47 10.3102C272.519 10.4235 272.54 10.5469 272.53 10.6698C272.53 10.8089 272.488 10.9449 272.41 11.0598C272.328 11.1831 272.209 11.2775 272.07 11.3298C272.228 11.3709 272.366 11.4665 272.46 11.5998C272.563 11.7343 272.616 11.9005 272.61 12.0698C272.618 12.1993 272.595 12.3288 272.545 12.4484C272.495 12.568 272.418 12.6746 272.32 12.7598C272.08 12.9351 271.786 13.0201 271.49 12.9998H270.33ZM270.88 11.5598V12.5598H271.5C271.648 12.5643 271.792 12.5184 271.91 12.4298C271.959 12.384 271.996 12.3279 272.021 12.2656C272.045 12.2033 272.055 12.1364 272.05 12.0698C272.062 12.0011 272.057 11.9305 272.037 11.8639C272.016 11.7973 271.98 11.7365 271.931 11.6867C271.882 11.6369 271.822 11.5994 271.756 11.5774C271.69 11.5553 271.619 11.5493 271.55 11.5598H270.88ZM270.88 11.1498H271.43C271.573 11.1573 271.715 11.1149 271.83 11.0298C271.879 10.9905 271.919 10.9401 271.945 10.8828C271.971 10.8254 271.983 10.7627 271.98 10.6998C271.986 10.6346 271.976 10.569 271.952 10.5082C271.927 10.4474 271.889 10.3932 271.84 10.3498C271.714 10.2724 271.567 10.2374 271.42 10.2498H270.88V11.1498ZM275 12.2598H273.77L273.51 12.9998H272.93L274.14 9.7998H274.64L275.8 12.9998H275.22L275 12.2598ZM273.92 11.8098H274.85L274.38 10.4798L273.92 11.8098ZM278.7 12.9998H278.14L276.72 10.7298V12.9998H276.16V9.7998H276.72L278.15 12.0798V9.7998H278.7V12.9998ZM280.27 11.6198L279.91 11.9998V12.9998H279.36V9.7998H279.91V11.2998L280.22 10.9198L281.16 9.7998H281.83L280.64 11.2198L281.9 12.9998H281.24L280.27 11.6198ZM282.78 12.9998H282.23V9.7998H282.78V12.9998ZM286 12.9998H285.45L284 10.7298V12.9998H283.44V9.7998H284L285.43 12.0798V9.7998H286V12.9998ZM289.11 12.5798C288.989 12.7424 288.822 12.8645 288.63 12.9298C288.406 13.0098 288.168 13.0471 287.93 13.0398C287.682 13.0444 287.436 12.9822 287.22 12.8598C287.009 12.7412 286.841 12.5593 286.74 12.3398C286.624 12.0928 286.566 11.8226 286.57 11.5498V11.2998C286.541 10.8926 286.666 10.4894 286.92 10.1698C287.042 10.0261 287.196 9.91379 287.37 9.84242C287.544 9.77104 287.733 9.74271 287.92 9.7598C288.226 9.7394 288.528 9.83192 288.77 10.0198C288.99 10.2147 289.126 10.487 289.15 10.7798H288.61C288.604 10.697 288.581 10.6162 288.544 10.5422C288.506 10.4681 288.454 10.4022 288.391 10.3483C288.328 10.2944 288.254 10.2536 288.175 10.2281C288.096 10.2026 288.013 10.193 287.93 10.1998C287.822 10.1944 287.714 10.2163 287.616 10.2635C287.518 10.3107 287.433 10.3816 287.37 10.4698C287.224 10.7066 287.151 10.9815 287.16 11.2598V11.5098C287.146 11.7931 287.223 12.0734 287.38 12.3098C287.451 12.4031 287.544 12.478 287.65 12.5285C287.756 12.5789 287.873 12.6033 287.99 12.5998C288.099 12.6117 288.21 12.601 288.315 12.5683C288.42 12.5357 288.517 12.4817 288.6 12.4098V11.7798H287.94V11.3598H289.15L289.11 12.5798Z"
                fill="#4E4E4E"
              />
              <path
                d="M263.83 4C264.086 4.01284 264.328 4.12384 264.505 4.31C264.682 4.49616 264.78 4.74322 264.78 5V6C265.393 6.06008 265.962 6.34828 266.373 6.80754C266.784 7.2668 267.008 7.86366 267 8.48V11.08C267 11.3978 266.937 11.7125 266.816 12.0061C266.694 12.2997 266.516 12.5665 266.291 12.7912C266.067 13.0159 265.8 13.1942 265.506 13.3158C265.213 13.4374 264.898 13.5 264.58 13.5C264.262 13.5 263.948 13.4374 263.654 13.3158C263.36 13.1942 263.094 13.0159 262.869 12.7912C262.644 12.5665 262.466 12.2997 262.344 12.0061C262.223 11.7125 262.16 11.3978 262.16 11.08V8.48C262.152 7.86678 262.373 7.27253 262.78 6.81375C263.187 6.35498 263.75 6.06476 264.36 6V5C264.375 4.93418 264.375 4.86582 264.36 4.8C264.339 4.73162 264.301 4.66966 264.25 4.62C264.202 4.57089 264.144 4.53328 264.08 4.51C264.011 4.49626 263.939 4.49626 263.87 4.51C263.799 4.50995 263.728 4.52429 263.662 4.55217C263.597 4.58005 263.537 4.62088 263.488 4.67224C263.439 4.72359 263.4 4.7844 263.374 4.85103C263.349 4.91766 263.337 4.98873 263.34 5.06V5.28C263.34 5.53678 263.242 5.78384 263.065 5.97C262.888 6.15616 262.646 6.26716 262.39 6.28C262.135 6.26469 261.896 6.15261 261.721 5.96671C261.547 5.78081 261.45 5.53514 261.45 5.28C261.441 5.24387 261.441 5.20613 261.45 5.17C261.468 5.13619 261.496 5.10841 261.53 5.09C261.563 5.08107 261.597 5.08107 261.63 5.09C261.666 5.07972 261.704 5.07972 261.74 5.09C261.771 5.11115 261.796 5.13951 261.814 5.17262C261.831 5.20572 261.84 5.24259 261.84 5.28C261.83 5.35502 261.835 5.4314 261.857 5.50398C261.879 5.57656 261.916 5.64367 261.965 5.70077C262.015 5.75788 262.077 5.80366 262.145 5.83503C262.214 5.8664 262.289 5.88263 262.365 5.88263C262.441 5.88263 262.516 5.8664 262.585 5.83503C262.653 5.80366 262.715 5.75788 262.765 5.70077C262.814 5.64367 262.851 5.57656 262.873 5.50398C262.895 5.4314 262.9 5.35502 262.89 5.28V5C262.89 4.74486 262.987 4.49919 263.161 4.31329C263.336 4.12739 263.575 4.01531 263.83 4V4ZM264.57 7C264.531 6.98833 264.489 6.98833 264.45 7C264.41 7.01732 264.373 7.04095 264.34 7.07C264.313 7.10091 264.29 7.13441 264.27 7.17C264.265 7.2132 264.265 7.2568 264.27 7.3V8.48C264.269 8.52286 264.276 8.56555 264.291 8.60553C264.307 8.64552 264.33 8.68198 264.36 8.71277C264.39 8.74355 264.426 8.76802 264.465 8.78472C264.505 8.80142 264.547 8.81002 264.59 8.81H264.71L264.81 8.74C264.842 8.70987 264.866 8.67202 264.88 8.63C264.89 8.59059 264.89 8.54941 264.88 8.51V7.4C264.89 7.35719 264.89 7.31281 264.88 7.27C264.864 7.23222 264.84 7.19818 264.81 7.17L264.71 7.1C264.671 7.091 264.63 7.091 264.59 7.1L264.57 7Z"
                fill="black"
              />
              <path
                d="M251.67 0.669922H221.67C221.405 0.669922 221.15 0.775279 220.963 0.962815C220.775 1.15035 220.67 1.40471 220.67 1.66992V16.3299C220.67 16.5951 220.775 16.8495 220.963 17.037C221.15 17.2246 221.405 17.3299 221.67 17.3299H251.67C251.935 17.3299 252.189 17.2246 252.377 17.037C252.565 16.8495 252.67 16.5951 252.67 16.3299V1.66992C252.67 1.40471 252.565 1.15035 252.377 0.962815C252.189 0.775279 251.935 0.669922 251.67 0.669922V0.669922Z"
                fill="white"
                stroke="#E0E0E0"
                stroke-width="0.67"
              />
              <path
                opacity="0.94"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M225.34 10.6401C225.34 10.6401 225.48 10.0201 225.86 8.64014C226.16 7.57014 226.45 6.57014 226.49 6.42014L226.58 6.14014H227.77C229.16 6.14014 229.37 6.14014 229.6 6.29014C229.99 6.49014 230.1 6.80014 229.97 7.29014C229.86 7.72984 229.584 8.10984 229.2 8.35014C229.12 8.41014 229.04 8.48014 229.04 8.50014C229.04 8.52014 229.04 8.60014 229.17 8.68014C229.242 8.7387 229.303 8.80985 229.35 8.89014C229.42 9.14205 229.42 9.40823 229.35 9.66014C229.301 9.87078 229.268 10.0847 229.25 10.3001V10.5701H228.67C228.467 10.5953 228.262 10.5953 228.06 10.5701C228 10.5101 228.01 10.3701 228.06 9.96014C228.11 9.55014 228.17 9.34014 228.06 9.23014C227.95 9.12014 227.84 9.05014 227.42 9.04014C227 9.03014 227.03 9.04014 226.98 9.04014C226.93 9.04014 226.83 9.29014 226.64 9.98014L226.48 10.5601H226C225.797 10.5716 225.593 10.5716 225.39 10.5601L225.34 10.6401ZM228.34 8.12014C228.62 8.04014 228.73 7.87014 228.73 7.53014C228.749 7.45811 228.749 7.38217 228.73 7.31014C228.65 7.22014 228.4 7.18014 227.93 7.21014H227.52L227.46 7.41014C227.385 7.62377 227.335 7.84518 227.31 8.07014C227.31 8.12014 227.31 8.14014 227.43 8.16014C227.764 8.1831 228.1 8.16293 228.43 8.10014L228.34 8.12014ZM230.27 10.7301C230.105 10.6746 229.968 10.556 229.89 10.4001C229.77 10.1401 229.89 9.55014 230.3 8.13014C230.4 7.79014 230.48 7.51014 230.48 7.50014C230.48 7.50014 230.61 7.50014 230.97 7.50014C231.136 7.48316 231.304 7.48316 231.47 7.50014H231.55L231.47 7.76014C231.29 8.40014 231.1 9.17014 231.07 9.42014C231.04 9.67014 231.07 9.70014 231.07 9.77014C231.07 9.84014 231.45 9.97014 231.7 9.84014C231.95 9.71014 232.04 9.57014 232.52 7.95014C232.546 7.79977 232.604 7.65668 232.69 7.53014L232.78 7.44014H233.25C233.61 7.44014 233.72 7.44014 233.73 7.44014C233.74 7.44014 233.15 9.66014 232.9 10.5101V10.6501H231.9C231.911 10.5986 231.928 10.5483 231.95 10.5001C232.05 10.2201 231.95 10.2001 231.55 10.5001C231.316 10.6946 231.024 10.8039 230.72 10.8101C230.575 10.8395 230.425 10.8395 230.28 10.8101L230.27 10.7301ZM233.62 10.6401C233.764 9.88484 233.958 9.13988 234.2 8.41014L234.83 6.20014H235.83C237.14 6.20014 237.41 6.20014 237.66 6.36014C237.834 6.42911 237.979 6.55633 238.07 6.72014C238.147 6.89322 238.187 7.08062 238.187 7.27014C238.187 7.45966 238.147 7.64706 238.07 7.82014C237.976 8.13574 237.805 8.42319 237.573 8.65695C237.341 8.89072 237.055 9.06356 236.74 9.16014C236.512 9.19796 236.281 9.22134 236.05 9.23014C235.12 9.29014 235.18 9.23014 235.13 9.40014C235.08 9.57014 235.01 9.77014 234.92 10.0801L234.76 10.6501H234.18C233.98 10.6614 233.78 10.6614 233.58 10.6501L233.62 10.6401ZM236.33 8.26014C236.445 8.25986 236.559 8.22923 236.659 8.17132C236.759 8.11341 236.842 8.03024 236.9 7.93014C236.952 7.84937 236.984 7.75764 236.995 7.6622C237.005 7.56676 236.993 7.4702 236.96 7.38014C236.87 7.24014 236.74 7.21014 236.25 7.21014C236.09 7.19625 235.93 7.19625 235.77 7.21014C235.667 7.51732 235.587 7.83146 235.53 8.15014C235.522 8.17959 235.522 8.21068 235.53 8.24014C235.789 8.27006 236.051 8.27006 236.31 8.24014L236.33 8.26014ZM238.04 10.7401C237.69 10.5901 237.6 10.3501 237.71 9.87014C237.88 9.19014 238.23 8.97014 239.45 8.77014C240.19 8.64014 240.37 8.55014 240.45 8.29014C240.53 8.03014 240.33 8.00014 240 8.00014C239.909 7.99255 239.818 8.00571 239.733 8.03863C239.648 8.07155 239.572 8.12336 239.51 8.19014L239.36 8.31014H239C238.55 8.31014 238.41 8.31014 238.41 8.24014C238.483 8.05537 238.6 7.89081 238.75 7.76014C238.943 7.59458 239.172 7.47795 239.42 7.42014C240.003 7.26719 240.616 7.26719 241.2 7.42014C241.364 7.49223 241.5 7.61487 241.59 7.77014C241.66 7.90014 241.64 8.03014 241.31 9.28014C241.16 9.90014 241.03 10.4501 241.03 10.5201V10.6301H240.66H240.15H240.01L239.95 10.4901C239.87 10.3201 239.87 10.3201 239.49 10.4901C239.217 10.633 238.917 10.7149 238.61 10.7301C238.444 10.7567 238.274 10.7359 238.12 10.6701L238.04 10.7401ZM239.66 10.0501C239.781 9.97261 239.883 9.86996 239.961 9.74917C240.039 9.62838 240.089 9.49228 240.11 9.35014V9.23014H239.92C239.631 9.27272 239.351 9.36046 239.09 9.49014C239.027 9.52931 238.973 9.58025 238.93 9.64014C238.895 9.70847 238.874 9.78342 238.87 9.86014C238.87 10.0001 238.87 10.0401 238.99 10.0801C239.21 10.1336 239.44 10.1336 239.66 10.0801V10.0501ZM241.32 12.0501C241.2 12.0501 241.2 11.9701 241.32 11.6501C241.44 11.3301 241.42 11.2201 241.7 11.1801C241.98 11.1401 242.13 11.0701 242.2 10.9401C242.294 10.1931 242.294 9.43718 242.2 8.69014C242.171 8.26729 242.171 7.84298 242.2 7.42014C242.2 7.42014 242.37 7.42014 242.77 7.42014H243.3V8.42014C243.279 8.75313 243.279 9.08714 243.3 9.42014C243.36 9.47014 243.56 9.14014 244.39 7.62014L244.5 7.40014H245C245.16 7.38773 245.32 7.38773 245.48 7.40014C245.48 7.40014 244.78 8.69014 244.06 9.90014C243.06 11.6301 242.85 11.9001 242.37 12.0001C242.039 12.0524 241.704 12.0691 241.37 12.0501H241.32Z"
                fill="#2A2C83"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M245.79 11.6698L247.19 6.58984L248.53 9.21984L245.79 11.6698Z"
                fill="#097A44"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M244.91 11.6899L246.32 6.60986L247.66 9.23986L244.91 11.6899Z"
                fill="#F46F20"
              />
              <path
                d="M214.43 1H185.57C185.242 1.00261 184.928 1.1341 184.696 1.36608C184.464 1.59806 184.333 1.91194 184.33 2.24V15.76C184.333 16.0881 184.464 16.4019 184.696 16.6339C184.928 16.8659 185.242 16.9974 185.57 17H214.43C214.758 16.9974 215.072 16.8659 215.304 16.6339C215.536 16.4019 215.667 16.0881 215.67 15.76V2.24C215.667 1.91194 215.536 1.59806 215.304 1.36608C215.072 1.1341 214.758 1.00261 214.43 1Z"
                fill="white"
              />
              <path
                d="M195.45 17H214.45C214.613 17.0013 214.774 16.9705 214.924 16.9093C215.074 16.848 215.211 16.7576 215.326 16.6433C215.442 16.5289 215.533 16.3929 215.596 16.243C215.658 16.0931 215.69 15.9324 215.69 15.77V10C215.69 10 208.55 14.84 195.47 17H195.45Z"
                fill="#F58220"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M189.06 8.43998C188.778 8.66612 188.42 8.77372 188.06 8.73998H187.86V6.30998H188.06C188.238 6.29165 188.418 6.30872 188.59 6.3602C188.761 6.41169 188.921 6.49657 189.06 6.60998C189.189 6.72336 189.293 6.86331 189.364 7.02034C189.435 7.17736 189.471 7.34777 189.47 7.51998C189.471 7.69368 189.435 7.86561 189.364 8.02427C189.294 8.18293 189.19 8.32466 189.06 8.43998V8.43998ZM188.2 5.68998H187.11V9.35998H188.19C188.68 9.38407 189.163 9.23149 189.55 8.92998C189.762 8.76084 189.932 8.54634 190.05 8.3023C190.168 8.05826 190.229 7.79092 190.23 7.51998C190.228 7.26557 190.174 7.01429 190.07 6.78184C189.967 6.54939 189.816 6.34077 189.629 6.16902C189.441 5.99727 189.22 5.86609 188.979 5.78366C188.739 5.70124 188.483 5.66935 188.23 5.68998H188.2ZM190.58 5.68998H191.31V9.35998H190.58V5.68998ZM193.12 7.08998C192.68 6.93998 192.55 6.82998 192.55 6.62998C192.55 6.42998 192.78 6.22998 193.1 6.22998C193.215 6.231 193.329 6.25754 193.432 6.30768C193.536 6.35782 193.627 6.43033 193.7 6.51998L194.08 6.02998C193.771 5.76603 193.376 5.62382 192.97 5.62998C192.681 5.6078 192.395 5.70036 192.174 5.88757C191.954 6.07478 191.815 6.34154 191.79 6.62998C191.79 7.12998 192.02 7.38998 192.72 7.62998C192.896 7.68541 193.066 7.75566 193.23 7.83998C193.295 7.8801 193.35 7.9349 193.39 7.99998C193.428 8.06712 193.449 8.14278 193.45 8.21998C193.449 8.29224 193.433 8.36349 193.403 8.42937C193.373 8.49524 193.331 8.55435 193.277 8.60305C193.224 8.65175 193.161 8.68902 193.093 8.71257C193.024 8.73612 192.952 8.74545 192.88 8.73998C192.711 8.74206 192.545 8.69704 192.4 8.60998C192.258 8.5231 192.144 8.39841 192.07 8.24998L191.59 8.69998C191.73 8.92184 191.925 9.10321 192.157 9.22603C192.388 9.34885 192.648 9.40883 192.91 9.39998C193.077 9.41384 193.245 9.39282 193.404 9.33825C193.562 9.28368 193.708 9.19675 193.831 9.08298C193.954 8.96921 194.052 8.83108 194.119 8.67735C194.186 8.52363 194.22 8.35766 194.22 8.18998C194.22 7.60998 193.96 7.33998 193.12 7.03998V7.08998ZM194.45 7.51998C194.451 7.77859 194.504 8.03433 194.606 8.272C194.708 8.50967 194.857 8.72444 195.043 8.90353C195.23 9.08263 195.45 9.22241 195.692 9.31456C195.934 9.40671 196.191 9.44937 196.45 9.43998C196.773 9.44288 197.092 9.36739 197.38 9.21998V8.37998C197.267 8.50653 197.128 8.60762 196.973 8.67657C196.818 8.74552 196.65 8.78077 196.48 8.77998C196.312 8.78696 196.145 8.75922 195.988 8.6985C195.831 8.63778 195.689 8.54539 195.57 8.42711C195.451 8.30883 195.357 8.16721 195.295 8.01112C195.233 7.85503 195.204 7.68783 195.21 7.51998C195.207 7.35547 195.237 7.19207 195.298 7.03931C195.36 6.88655 195.45 6.74749 195.566 6.63021C195.681 6.51294 195.819 6.41981 195.971 6.35625C196.122 6.29269 196.285 6.25996 196.45 6.25998C196.625 6.26061 196.798 6.29734 196.958 6.3679C197.118 6.43845 197.261 6.54129 197.38 6.66998V5.82998C197.099 5.68346 196.787 5.60793 196.47 5.60998C195.951 5.60427 195.451 5.80028 195.074 6.15664C194.697 6.51299 194.473 7.00183 194.45 7.51998V7.51998ZM203.37 8.14998L202.37 5.68998H201.56L203.17 9.44998H203.57L205.21 5.68998H204.41L203.41 8.14998H203.37ZM205.53 9.35998H207.63V8.73998H206.27V7.73998H207.58V7.11998H206.27V6.30998H207.63V5.68998H205.53V9.35998ZM209.07 7.35998H208.86V6.26998H209.09C209.55 6.26998 209.8 6.44998 209.8 6.80998C209.8 7.16998 209.55 7.37998 209.07 7.37998V7.35998ZM210.56 6.74998C210.56 6.05998 210.07 5.66998 209.22 5.66998H208.12V9.35998H208.86V7.87998H208.96L209.96 9.35998H210.87L209.7 7.80998C209.94 7.77602 210.16 7.65585 210.318 7.47187C210.476 7.28788 210.562 7.05264 210.56 6.80998V6.74998Z"
                fill="#1A1919"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M201.66 7.52979C201.66 8.06022 201.449 8.56893 201.074 8.944C200.699 9.31907 200.191 9.52978 199.66 9.52978C199.13 9.52978 198.621 9.31907 198.246 8.944C197.871 8.56893 197.66 8.06022 197.66 7.52979C197.66 6.99935 197.871 6.49064 198.246 6.11557C198.621 5.7405 199.13 5.52979 199.66 5.52979C200.191 5.52979 200.699 5.7405 201.074 6.11557C201.449 6.49064 201.66 6.99935 201.66 7.52979V7.52979Z"
                fill="#F58220"
              />
              <path
                d="M178.33 0.669922H148.33C148.065 0.669922 147.811 0.775279 147.623 0.962815C147.435 1.15035 147.33 1.40471 147.33 1.66992V16.3299C147.33 16.5951 147.435 16.8495 147.623 17.037C147.811 17.2246 148.065 17.3299 148.33 17.3299H178.33C178.595 17.3299 178.85 17.2246 179.037 17.037C179.225 16.8495 179.33 16.5951 179.33 16.3299V1.66992C179.33 1.40471 179.225 1.15035 179.037 0.962815C178.85 0.775279 178.595 0.669922 178.33 0.669922V0.669922Z"
                fill="white"
                stroke="#E0E0E0"
                stroke-width="0.67"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M160.3 4H166.41C167.736 4 169.008 4.52678 169.945 5.46447C170.883 6.40215 171.41 7.67392 171.41 9C171.41 9.9894 171.116 10.9565 170.566 11.7789C170.016 12.6013 169.234 13.242 168.32 13.62C167.711 13.8704 167.058 13.9995 166.4 14H160.3V4Z"
                fill="#184977"
              />
              <path
                d="M160.3 13.5002C161.188 13.4903 162.053 13.2181 162.786 12.7176C163.52 12.2172 164.089 11.511 164.422 10.6879C164.755 9.86484 164.837 8.96165 164.657 8.09206C164.478 7.22246 164.046 6.42532 163.414 5.80098C162.783 5.17663 161.981 4.75299 161.11 4.58337C160.238 4.41375 159.336 4.50574 158.517 4.84775C157.697 5.18977 156.997 5.76652 156.505 6.50542C156.013 7.24432 155.75 8.11234 155.75 9.00021C155.753 9.59464 155.872 10.1827 156.103 10.7307C156.333 11.2788 156.669 11.776 157.092 12.194C157.514 12.612 158.015 12.9426 158.566 13.1667C159.116 13.3908 159.706 13.5042 160.3 13.5002V13.5002Z"
                fill="white"
                stroke="#184977"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M162.32 9C162.321 8.51604 162.179 8.04264 161.91 7.64C161.641 7.23953 161.258 6.92938 160.81 6.75V11.25C161.258 11.0706 161.641 10.7605 161.91 10.36C162.179 9.95736 162.321 9.48396 162.32 9V9ZM159.8 11.25V6.75C159.349 6.9286 158.962 7.23861 158.689 7.63982C158.417 8.04103 158.271 8.51492 158.271 9C158.271 9.48508 158.417 9.95897 158.689 10.3602C158.962 10.7614 159.349 11.0714 159.8 11.25V11.25Z"
                fill="#184977"
              />
              <path
                d="M141.67 0.669922H111.67C111.405 0.669922 111.15 0.775279 110.963 0.962815C110.775 1.15035 110.67 1.40471 110.67 1.66992V16.3299C110.67 16.5951 110.775 16.8495 110.963 17.037C111.15 17.2246 111.405 17.3299 111.67 17.3299H141.67C141.935 17.3299 142.189 17.2246 142.377 17.037C142.565 16.8495 142.67 16.5951 142.67 16.3299V1.66992C142.67 1.40471 142.565 1.15035 142.377 0.962815C142.189 0.775279 141.935 0.669922 141.67 0.669922V0.669922Z"
                fill="white"
                stroke="#E0E0E0"
                stroke-width="0.67"
              />
              <path
                d="M128.79 11.69L128.51 11.35V11.69H127.59V11.1C127.472 11.1591 127.342 11.1899 127.21 11.19H126.88V11.69H125.5L125.25 11.36L125 11.69H122.71V9.51H125L125.25 9.83L125.5 9.51H133.9V2H120V7.87L120.52 6.64H121.42L121.72 7.32V6.64H122.84L123.02 7.14L123.19 6.64H128.19V6.89C128.393 6.7243 128.648 6.63574 128.91 6.64H130.51L130.81 7.32V6.64H131.76L132 7V6.64H133V8.82H132L131.75 8.43V8.82H130.37L130.23 8.49H129.86L129.72 8.82H128.87C128.619 8.83266 128.373 8.75056 128.18 8.59V8.82H126.77L126.49 8.48V8.82H121.25L121.12 8.49H120.74L120.6 8.82H120V15.91H133.91V11.53C133.756 11.641 133.57 11.6973 133.38 11.69H128.79Z"
                fill="#0079C1"
              />
              <path
                d="M133.92 9.78019L133.76 10.1502L132.98 9.99019C132.964 9.98359 132.947 9.98019 132.93 9.98019C132.913 9.98019 132.896 9.98359 132.88 9.99019C132.871 10.0195 132.871 10.0509 132.88 10.0802C132.88 10.1173 132.895 10.1529 132.921 10.1792C132.947 10.2054 132.983 10.2202 133.02 10.2202H133.4C133.73 10.2202 133.92 10.3902 133.92 10.6902C133.934 10.7595 133.934 10.8309 133.92 10.9002C133.892 10.9699 133.847 11.0317 133.79 11.0802C133.736 11.1298 133.673 11.1678 133.605 11.1919C133.536 11.216 133.463 11.2256 133.39 11.2202H132.54V10.8502H133.46C133.466 10.8341 133.466 10.8163 133.46 10.8002C133.465 10.7805 133.465 10.7599 133.46 10.7402H133.41H132.96C132.894 10.7545 132.826 10.7545 132.76 10.7402C132.696 10.7208 132.638 10.6865 132.59 10.6402C132.539 10.5942 132.501 10.5356 132.48 10.4702C132.466 10.4077 132.466 10.3427 132.48 10.2802C132.48 10.2072 132.497 10.1352 132.53 10.0702C132.558 10.0031 132.599 9.94198 132.65 9.89019C132.705 9.84042 132.769 9.80292 132.84 9.78019C132.909 9.76533 132.981 9.76533 133.05 9.78019H133.92Z"
                fill="#0079C1"
              />
              <path
                d="M105 0.669922H75C74.7348 0.669922 74.4804 0.775279 74.2929 0.962815C74.1054 1.15035 74 1.40471 74 1.66992V16.3299C74 16.5951 74.1054 16.8495 74.2929 17.037C74.4804 17.2246 74.7348 17.3299 75 17.3299H105C105.265 17.3299 105.52 17.2246 105.707 17.037C105.895 16.8495 106 16.5951 106 16.3299V1.66992C106 1.40471 105.895 1.15035 105.707 0.962815C105.52 0.775279 105.265 0.669922 105 0.669922V0.669922Z"
                fill="white"
                stroke="#E0E0E0"
                stroke-width="0.67"
              />
              <path
                d="M86.46 14C87.4489 14 88.4156 13.7068 89.2378 13.1573C90.0601 12.6079 90.7009 11.827 91.0794 10.9134C91.4578 9.99979 91.5568 8.99446 91.3639 8.02455C91.171 7.05465 90.6948 6.16373 89.9955 5.46447C89.2962 4.76521 88.4053 4.289 87.4354 4.09608C86.4655 3.90315 85.4602 4.00217 84.5465 4.3806C83.6329 4.75904 82.852 5.39991 82.3026 6.22215C81.7532 7.0444 81.46 8.0111 81.46 9C81.46 10.3261 81.9867 11.5979 82.9244 12.5355C83.8621 13.4732 85.1339 14 86.46 14V14Z"
                fill="#007BDB"
              />
              <path
                d="M93.54 14.0001C94.5262 13.9883 95.487 13.685 96.3013 13.1285C97.1156 12.5719 97.7471 11.7869 98.1164 10.8723C98.4856 9.95773 98.5761 8.95434 98.3765 7.98842C98.1768 7.0225 97.696 6.13721 96.9944 5.44393C96.2928 4.75066 95.4018 4.28038 94.4336 4.09227C93.4653 3.90415 92.4631 4.00661 91.553 4.38675C90.6428 4.76689 89.8654 5.40772 89.3186 6.22862C88.7718 7.04951 88.4801 8.01379 88.48 9.00013C88.4799 9.66182 88.6112 10.3169 88.8662 10.9275C89.1213 11.5381 89.4949 12.092 89.9656 12.557C90.4363 13.0221 90.9946 13.3892 91.6081 13.6369C92.2217 13.8846 92.8783 14.0081 93.54 14.0001V14.0001Z"
                fill="#E42B00"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M90 12.5799C90.8967 11.5927 91.4325 10.3308 91.52 8.99992C91.4325 7.66909 90.8967 6.40716 90 5.41992C89.5084 5.87561 89.1187 6.4302 88.8568 7.04722C88.5948 7.66424 88.4664 8.32973 88.48 8.99992C88.4683 9.66985 88.5975 10.3348 88.8594 10.9515C89.1213 11.5683 89.5099 12.1231 90 12.5799V12.5799Z"
                fill="#1740CE"
              />
              <path
                d="M68.3301 0.669922H38.3301C38.0649 0.669922 37.8105 0.775279 37.623 0.962815C37.4354 1.15035 37.3301 1.40471 37.3301 1.66992V16.3299C37.3301 16.5951 37.4354 16.8495 37.623 17.037C37.8105 17.2246 38.0649 17.3299 38.3301 17.3299H68.3301C68.5953 17.3299 68.8496 17.2246 69.0372 17.037C69.2247 16.8495 69.3301 16.5951 69.3301 16.3299V1.66992C69.3301 1.40471 69.2247 1.15035 69.0372 0.962815C68.8496 0.775279 68.5953 0.669922 68.3301 0.669922V0.669922Z"
                fill="white"
                stroke="#E0E0E0"
                stroke-width="0.67"
              />
              <path
                d="M49.8002 14.0001C50.7865 13.9883 51.7472 13.685 52.5615 13.1285C53.3759 12.5719 54.0074 11.7869 54.3766 10.8723C54.7459 9.95773 54.8364 8.95434 54.6367 7.98842C54.4371 7.0225 53.9562 6.13721 53.2546 5.44393C52.553 4.75066 51.6621 4.28038 50.6938 4.09227C49.7256 3.90415 48.7234 4.00661 47.8132 4.38675C46.9031 4.76689 46.1257 5.40772 45.5789 6.22862C45.0321 7.04951 44.7403 8.01379 44.7402 9.00013C44.7402 9.66182 44.8715 10.3169 45.1265 10.9275C45.3815 11.5381 45.7552 12.092 46.2258 12.557C46.6965 13.0221 47.2548 13.3892 47.8684 13.6369C48.482 13.8846 49.1386 14.0081 49.8002 14.0001V14.0001Z"
                fill="#CC0000"
              />
              <path
                d="M56.8701 14C57.859 14 58.8257 13.7068 59.648 13.1573C60.4702 12.6079 61.1111 11.827 61.4895 10.9134C61.868 9.99979 61.967 8.99446 61.774 8.02455C61.5811 7.05465 61.1049 6.16373 60.4057 5.46447C59.7064 4.76521 58.8155 4.289 57.8456 4.09608C56.8757 3.90315 55.8703 4.00217 54.9567 4.3806C54.0431 4.75904 53.2622 5.39991 52.7128 6.22215C52.1634 7.0444 51.8701 8.0111 51.8701 9C51.8701 10.3261 52.3969 11.5979 53.3346 12.5355C54.2723 13.4732 55.544 14 56.8701 14V14Z"
                fill="#FF9900"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M53.3299 12.5799C54.2267 11.5927 54.7625 10.3308 54.8499 8.99992C54.7625 7.66909 54.2267 6.40716 53.3299 5.41992C52.8406 5.8769 52.4532 6.43195 52.193 7.04884C51.9328 7.66572 51.8057 8.33056 51.8199 8.99992C51.8076 9.66902 51.9356 10.3333 52.1956 10.9499C52.4557 11.5665 52.8421 12.1218 53.3299 12.5799V12.5799Z"
                fill="#F16D27"
              />
              <path
                d="M31.6699 0.669922H1.66992C1.40471 0.669922 1.15035 0.775279 0.962815 0.962815C0.775279 1.15035 0.669922 1.40471 0.669922 1.66992V16.3299C0.669922 16.5951 0.775279 16.8495 0.962815 17.037C1.15035 17.2246 1.40471 17.3299 1.66992 17.3299H31.6699C31.9351 17.3299 32.1895 17.2246 32.377 17.037C32.5646 16.8495 32.6699 16.5951 32.6699 16.3299V1.66992C32.6699 1.40471 32.5646 1.15035 32.377 0.962815C32.1895 0.775279 31.9351 0.669922 31.6699 0.669922V0.669922Z"
                fill="white"
                stroke="#E0E0E0"
                stroke-width="0.67"
              />
              <path
                d="M14 5.79996L11.25 12.36H9.43L8.08 7.11996C8.06406 6.9972 8.01838 6.8802 7.94693 6.77912C7.87547 6.67804 7.78041 6.59594 7.67 6.53996C7.13718 6.29318 6.57643 6.11186 6 5.99996V5.79996H8.93C9.11859 5.80277 9.29977 5.87383 9.44 5.99996C9.58018 6.12604 9.67505 6.29469 9.71 6.47996L10.42 10.28L12.19 5.79996H14ZM21 10.22C21 8.47996 18.61 8.38996 18.62 7.60996C18.62 7.37996 18.85 7.12996 19.34 7.06996C19.9094 7.01357 20.4834 7.11385 21 7.35996L21.31 5.99996C20.8052 5.80868 20.2699 5.71042 19.73 5.70996C18.06 5.70996 16.87 6.59996 16.86 7.87996C16.86 8.81996 17.7 9.34996 18.35 9.65996C19 9.96996 19.23 10.19 19.23 10.48C19.23 10.92 18.7 11.11 18.23 11.12C17.6233 11.1336 17.0236 10.9888 16.49 10.7L16.18 12.14C16.7831 12.3719 17.4238 12.4906 18.07 12.49C19.85 12.49 21.02 11.61 21.02 10.25L21 10.22ZM25.43 12.35H27L25.63 5.79996H24.18C24.0266 5.79702 23.8761 5.84251 23.75 5.92996C23.6181 6.01225 23.5163 6.13504 23.46 6.27996L20.91 12.36H22.69L23.05 11.36H25.23L25.43 12.35ZM23.54 9.99996L24.43 7.53996L24.94 9.99996H23.54ZM16.4 5.79996L15 12.36H13.3L14.7 5.79996H16.4Z"
                fill="#1A1F71"
              />
            </svg>
          </div>
        </div>
      </footer>

      <script src="javascript.js"></script>
    </div>
  );
}

export default App;
