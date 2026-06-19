import React from 'react'
import { useNavigate } from 'react-router-dom';
import part1 from "../img/part1.png";
import part2 from "../img/part2.png";
import part3 from "../img/part3.png";
import part4 from "../img/part4.png";
import part5 from "../img/part5.png";
import part6 from "../img/part6.png";


const Parts = () => {
    const navigate = useNavigate();

    const handlePurchase = (event) => {
      event.preventDefault();  // Prevent default anchor behavior
      navigate('/partpurchase');   // Correct way to navigate programmatically
    };


  return (
    <>
   
       <section class="parts" id="parts">
            <div class="heading">
                <span>What We Offer</span>
                <h2>Our Car Is Always Excellent</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, earum!</p>
            </div>

            <div class="parts-container container">
                <div class="box">
                    {/* <img src="./src/img/part1.png" alt=""/> */}
                    <img src={part1} alt="Engine Part" />
                    <h2>Cars Spear Part</h2>
                    <span>$120.99</span>
                    <i class='bx bxs-star'>(6 Reviews)</i>
                    <button onClick={handlePurchase} className="btn">Buy Now</button>
                    <a href="" class="details">View Details</a>
                </div>

                <div class="box">
                    {/* <img src="./src/img/part2.png" alt=""/> */}
                    <img src={part2} alt="Brake Part" />
                    <h2>Cars Spear Part</h2>
                    <span>$120.99</span>
                    <i class='bx bxs-star'>(6 Reviews)</i>
                    <button onClick={handlePurchase} className="btn">Buy Now</button>
                    <a href="" class="details">View Details</a>
                </div>

                <div class="box">
                    {/* <img src="./src/img/part3.png" alt=""/> */}
                    <img src={part3} alt="Tyre" />
                    <h2>Cars Spear Part</h2>
                    <span>$120.99</span>
                    <i class='bx bxs-star'>(6 Reviews)</i>
                    <button onClick={handlePurchase} className="btn">Buy Now</button>
                    <a href="" class="details">View Details</a>
                </div>

                <div class="box">
                    {/* <img src="./src/img/part4.png" alt=""/> */}
                    <img src={part4} alt="Battery" />
                    <h2>Cars Spear Part</h2>
                    <span>$120.99</span>
                    <i class='bx bxs-star'>(6 Reviews)</i>
                    <button onClick={handlePurchase} className="btn">Buy Now</button>
                    <a href="" class="details">View Details</a>
                </div>

                <div class="box">
                    {/* <img src="./src/img/part5.png" alt=""/> */}
                    <img src={part5} alt="Headlight" />
                    <h2>Cars Spear Part</h2>
                    <span>$120.99</span>
                    <i class='bx bxs-star'>(6 Reviews)</i>
                    <button onClick={handlePurchase} className="btn">Buy Now</button>
                    <a href="" class="details">View Details</a>
                </div>

                <div class="box">
                    {/* <img src="./src/img/part6.png" alt=""/> */}
                    <img src={part6} alt="Steering" />
                    <h2>Cars Spear Part</h2>
                    <span>$120.99</span>
                    <i class='bx bxs-star'>(6 Reviews)</i>
                    <button onClick={handlePurchase} className="btn">Buy Now</button>
                    <a href="" class="details">View Details</a>
                </div>

                <div className="box1">
                <a href="" className="btn">View More</a>
                </div>
            </div>
        </section>

    </>
  )
}

export default Parts;