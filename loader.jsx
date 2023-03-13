import React, { useEffect, useState } from "react";
import { RotateLoader } from "react-spinners";

function Test() {
  var [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div
        className="sweet-loading"
        style={{ margin: "auto", width: "10%", paddingTop: "18%" }}
      >
        <RotateLoader
          color={"#0000FF"}
          loading={loading}
          // size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <br />
        <br />
        <button
          onClick={() => {
            setLoading(!loading);
          }}
        >
          Toggle
        </button>
      </div>
    </>
  );
}

export default Test;
