import Dilishes from "../../images/Rectangle994.png";
import Dilishes2 from "../../images/Rectangle99.png"
import Dilishes3 from "../../images/Rectangle909.png"
import Dilishes4 from "../../images/Rectangle40.png"

function Check() {
  return (
    <div className="ChekDilishes">
      <p>
        Check out our list of cuisines by our great chefs. Choose among our
        a-la-carte services.
      </p>
      <div className="LaunchCatering">
        <div className="navLanch">
          <b>Lunch Catering</b>
          <p>Dinner Catering</p>
          <p>Breakfast Catering</p>
        </div>
        <hr />
        <div className="MenuLanch">
          <div className="SectionMenu1">
            <div className="dilishesMenu">
              <img src={Dilishes} alt="Utest" />
              <div>
                <p>Classic Goulash............................... <span>$80</span></p>
                <article>12 Person Minimum on All Packages.</article>
              </div>
            </div>
            <div className="dilishesMenu">
              <img src={Dilishes2} alt="Utest2" />
              <div>
                <p>Classic Italian Spaghetti.................. <span>$80</span></p>
                <article>12 Person Minimum on All Packages.</article>
              </div>
            </div>
            <div className="dilishesMenu">
              <img src={Dilishes3} alt="Utest" />
              <div>
                <p>Grilled Chicken............................... <span>$80</span></p>
                <article>12 Person Minimum on All Packages.</article>
              </div>
            </div>
          </div>
          <div className="SectionMenu2">
            <div className="dilishesMenu2">
              <img src={Dilishes4} alt="Utest" />
              <div>
                <p>Fried Pork Steak............................... <span>$80</span></p>
                <article>12 Person Minimum on All Packages.</article>
              </div>
            </div>
            <div className="dilishesMenu">
              <img src={Dilishes2} alt="Utest2" />
              <div>
                <p>Stir Fry Noodles.................. <span>$80</span></p>
                <article>12 Person Minimum on All Packages.</article>
              </div>
            </div>
            <div className="dilishesMenu">
              <img src={Dilishes3} alt="Utest" />
              <div>
                <p>Healthy Salad............................... <span>$80</span></p>
                <article>12 Person Minimum on All Packages.</article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Check;
