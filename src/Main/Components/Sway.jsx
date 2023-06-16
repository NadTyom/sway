import Photoshef from "../../images/ShefVideo.png";

function Sway() {
  return (
    <div className="shefAbout">
      <div className="Shefvideo">
        <img src={Photoshef} alt="Shefphoto" />
      </div>
      <div className="Shefinfo">
        <h3>At Sway, we know that food is an important part of life</h3>
        <p>
          If the meal isn't perfect, your event cannot be perfect. We know that
          it is critical for your food to arrive on time, to be presented
          beautifully, and to be delicious.
        </p>
        <button>Order Now </button>
      </div>
    </div>
  );
}
export default Sway;
