import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen w-full mx-auto flex justify-center items-center">
      <FadeLoader
        color="#000000" 
        loading={true}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
