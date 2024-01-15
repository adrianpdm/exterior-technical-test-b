import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { Carousel } from "antd";

const carouselStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function DetailRoom() {
  return (
    <Carousel
      effect="fade"
      arrows={true}
      prevArrow={<LeftCircleFilled />}
      nextArrow={<RightCircleFilled />}
    >
      <div>
        <h3 style={carouselStyle}>1</h3>
      </div>
      <div>
        <h3 style={carouselStyle}>2</h3>
      </div>
      <div>
        <h3 style={carouselStyle}>3</h3>
      </div>
      <div>
        <h3 style={carouselStyle}>4</h3>
      </div>
    </Carousel>
  );
}

export default DetailRoom;
