import Loader from "react-loader-spinner";

function LoadingSpinner() {
  //other logic
    return (
        <div className="flex justify-center mt-20">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </div>
    );
  }

  export default LoadingSpinner;