import React from 'react'
import car1 from "../img/car1.jpg";
import car2 from "../img/car2.jpg";
import car3 from "../img/car3.jpg";
import car4 from "../img/car4.jpg";


const OurBlog = () => {
  return (
    <>
   
           <section class="blog" id="blog">
            <div class="heading">
                <span>Blog & News</span>
                <h2>Our Blog Content</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, earum!</p>
            </div>

            <div class="blog-container container">
                <div class="box">
                    {/* <img src="./src/img/car1.jpg" alt=""/> */}
                    <img src={car1} alt="Car" />
                    <span>Feb 14 2025</span>
                    <h3>How to Get Perfect Car At Low Price</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi!</p>
                    <a href="" class="blog-btn">Read More<i class='bx bx-right-arrow-alt'></i></a>
                </div>

                <div class="box">
                    {/* <img src="./src/img/car2.jpg" alt=""/> */}
                    <img src={car2} alt="Car" />
                    <span>Feb 14 2025</span>
                    <h3>How to Get Perfect Car At Low Price</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi!</p>
                    <a href="" class="blog-btn">Read More<i class='bx bx-right-arrow-alt'></i></a>
                </div>

                <div class="box">
                    {/* <img src="./src/img/car3.jpg" alt=""/> */}
                    <img src={car3} alt="Car" />
                    <span>Feb 14 2025</span>
                    <h3>How to Get Perfect Car At Low Price</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi!</p>
                    <a href="" class="blog-btn">Read More<i class='bx bx-right-arrow-alt'></i></a>
                </div>

                <div class="box">
                    {/* <img src="./src/img/car4.jpg" alt=""/> */}
                    <img src={car4} alt="Car" />
                    <span>Feb 14 2025</span>
                    <h3>How to Get Perfect Car At Low Price</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi!</p>
                    <a href="" class="blog-btn">Read More<i class='bx bx-right-arrow-alt'></i></a>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurBlog;