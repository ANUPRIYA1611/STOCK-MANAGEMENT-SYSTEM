import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Homepage(){
    return(
        <div className="homebody">
            <ul className="main-navi">

 <a>
   <Link to="/signup">SIGNUP</Link>
 </a>
 <a>
 <Link to="/" className="logout">LOGOUT</Link>
 </a>
</ul>
<div>
    <div>
        <br></br>
        <br></br>
        <br></br> <br></br>
        <br></br> <br></br>
        <div class="wrap">
   <div class="search">
        <p className="homep">Unlocking the potential of your stock portfolio.</p>
       
   <form class="search-container">
    <input type="text" id="search-bar" placeholder="What can I help you with today?"/>
    <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
  </form>
   </div>
</div>
    </div>
    <div>
        <img className="dummyimg" src="https://img.freepik.com/free-vector/handling-order-processing-abstract-concept-vector-illustration-order-documentation-processing-system-handling-customer-request-logistics-automated-logistics-operations-abstract-metaphor_335657-1789.jpg?w=740&t=st=1693669970~exp=1693670570~hmac=2b23e1140d4bf0678595e6bfdb6245c3a973ef8f7bb12d8e6fabf480668dc521"></img>
    </div>
</div>
            <div className="cardhome">
          <div className="s">
            <h2 className="homep1">CATEGORY</h2>
          </div>
        <section className="homecards">
          <div className="spcard">
           <Link to="/dress"> <img src="https://i.pinimg.com/564x/e3/96/81/e39681321a5b92b02028ed4f022e709b.jpg" className="surimg"></img></Link>
            <h2>DRESS</h2>
          </div>
          <div className="spcard">
            <Link to="/book">            <img src="https://i.pinimg.com/564x/5e/42/51/5e4251d1fa2894002aa30a3429c020dc.jpg" className="surimg"></img></Link>

            <h2>BOOKS</h2>
          </div>
          <div className="spcard">
            <Link to="/furniture"><img src="https://i.pinimg.com/564x/b3/41/8f/b3418f98c10612640ec733e114146c8b.jpg" className="surimg"></img></Link>
            <h2>FURNITURES</h2>
          </div>
        
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <div>
           <div>
            <h2 className="homep1">STOCK MANAGEMENT</h2>
            <p className="homep2">Turning stock into assets, not liabilities : Just check the stock level</p>
            <img className="dum" src="https://i.pinimg.com/564x/42/71/31/4271319a51a77596915a88ef69ea3dce.jpg"></img>
            <a  href="https://www.spglobal.com/en/"><button className="buttonlogin1">KNOW THE STOCK LEVEL</button></a>
            <a href="https://www.spglobal.com/en/"><button className="buttonlogin2">MARKET PRICE</button></a>
            </div>        
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
            <h2 className="homep1">ABOUT US</h2>
            <p className="homep">     We introduce you to the power of our advanced stock management system. In today's fast-paced business environment, efficient stock management is crucial for success, and our system is designed to be your trusted partner in this endeavor.
Our stock management system is a comprehensive solution that empowers businesses of all sizes to take control of their inventory. It provides real-time insights into stock levels, trends, and product performance, enabling you to make informed decisions and optimize your supply chain. With our system, you can minimize the risk of overstocking or stockouts, reducing carrying costs and improving customer satisfaction.
Our user-friendly interface and automation features simplify day-to-day operations, saving you time and effort. Whether you run a small e-commerce store or a large warehouse, our stock management system scales to meet your needs, helping you achieve operational excellence and increase profitability.
Explore our website to discover how our stock management system can transform your inventory control, streamline your business processes, and drive success in today's competitive market. Join the ranks of businesses that trust our system to take their stock management to the next level.
</p>
        </div>
        
      
      </div>
        </div>
    );
}
export default Homepage;