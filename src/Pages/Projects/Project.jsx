import { useRef } from "react";

const Project = ({ project }) => {
  const { picture, name, category, features,
    description, technologies, live, github
  } = project;

  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const handleScrollToBottom = () => {
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="card bg-base-100 lg:w-96 shadow-xl">
      <figure
        className="h-56 overflow-hidden"
        style={{ cursor: "pointer" }}
        onMouseEnter={handleScrollToBottom}
      >
        <div
          className="h-full"
          style={{
            overflow: "hidden",
            paddingRight: "16px",
            boxSizing: "content-box",
          }}
          ref={containerRef}
        >
          <img
            src={picture}
            alt="projects"
            className="w-full transition-transform duration-5000 transform hover:translate-y-full"
            ref={imgRef}
          />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{features}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Live</button>
          <button className="btn btn-primary">Github</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
