import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="sub-container1">
        <div className="child-sub-container1">
          <div>
            <div>
              <h1 className="heading-text">
                Every Order <br></br>
                fullfilled, <span className="span-text">on time.</span>
              </h1>
            </div>
            <div>
              <h2 className="sub-heading-text">
                Eliminate overstocking and under-stocking with Crest.Built by
                supply-chain experts,it brings the same technology used by large
                global brands to power fast-growing startups.In short, we make
                supply meet demand, and then help grow both.
              </h2>
            </div>
          </div>

          <div className="main-btn-container">
            <div
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <button className="main-btn main-btn-custom-border">
                Get started with crest
              </button>
            </div>

            <div className="main-image-container">
              <img src="./website-image2.svg" alt="not-found" />
            </div>
          </div>
        </div>
        <div className="child-sub-container2"></div>
      </div>
    </div>
  );
}
