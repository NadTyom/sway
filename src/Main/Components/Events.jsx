import nver from "../../images/Gift.png";
import bajak from "../../images/bajak.png";
import tort from "../../images/tort.png";
import keqs from "../../images/keqs.png";


 function Events(){
    return(
        <section className="content2">
        <p>We are a full-service catering company located in NYC</p>
        <div className="nycEvents">
          <div>
            <img src={nver} alt="nver" />
            <p>Anniversaries</p>
            <article>
              Enjoy one of our refreshing body treatments for skin
            </article>
            <button>Learn More</button>
          </div>
          <div>
            <img src={bajak} alt="bajak" />
            <p>Anniversaries</p>
            <article>
              Enjoy one of our refreshing body treatments for skin
            </article>
            <button>Learn More</button>
          </div>
          <div>
            <img src={tort} alt="tort" />
            <p>Corporate Parties</p>
            <article>
              Enjoy one of our refreshing body treatments for skin
            </article>
            <button>Learn More</button>
          </div>
          <div>
            <img src={keqs} alt="keqs" />
            <p>Weddings</p>
            <article>
              Enjoy one of our refreshing body treatments for skin
            </article>
            <button>Learn More</button>
          </div>
        </div>
        <div className="serviceBtn">
          <button>Our Services</button>
        </div>
      </section>
    )
 }
 export default Events;