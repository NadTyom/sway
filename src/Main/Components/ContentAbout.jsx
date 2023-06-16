import krivetka from "../../images/catering-icon1.png";
import cicak from "../../images/catering-icon2.png";
import gdal from "../../images/catering-icon3.png";
import tesakani from "../../images/catering2 1.png";


function ContentAbout(){
    return(
        <section className="contentAbout">
        <div className="infoAbout">
          <p>Catering services in New York</p>
          <h2>We specialize in corporate and private events</h2>
          <b>
            With 20 years of experience, we promise you the freshest, local
            ingredients, hand-crafted cooking sprinkled with our unique
            whimsical elegance and exceptional service.
          </b>
        </div>
        <div className="informationContent">
          <div className="ourPassion">
            <p>
              Our passion is stirred by the colors, flavors, and exotic textures
            </p>
            <div className="showImg">
              <div className="flex-row">
                <img src={krivetka} alt="Krivetka" />
                <div>
                  <p>Only the freshest ingredients</p>
                  <article>
                    Our chefs chop and prepare food fresh each morning, never
                    the day before.
                  </article>
                </div>
              </div>
              <div className="flex-row">
                <img src={cicak} alt="Krivetka" />
                <div>
                  <p>We have a passion for food</p>
                  <article>
                    Our chefs chop and prepare food fresh each morning, never
                    the day before.
                  </article>
                </div>
              </div>
              <div className="flex-row">
                <img src={gdal} alt="Krivetka" />
                <div>
                  <p>We never compromise quality</p>
                  <article>
                    Our chefs chop and prepare food fresh each morning, never
                    the day before.
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="infoImage">
            <img src={tesakani} alt="tesakani" />
          </div>
        </div>
      </section>
    )
}
export default ContentAbout;