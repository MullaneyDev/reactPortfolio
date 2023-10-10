const Projects = () => {
  return (
    <div className="App">
      <h1>Projects</h1>
      <p>
        Throughout my time as part of the codenation master software course I
        have completed projects either as an individual or as part of a group
      </p>
      <p>
        These projects have been to help us develop further fluency in the
        content we have learnt
      </p>
      <p>Below are links to the projects completed so far</p>
      <div className="projectWindow">
        <div className="individualProjects">
          <div className="project">
            <h3>Card Matching Game</h3>
            <a href="bluey.mullaneydev.uk" target="_blank">
              bluey.mullaneydev.uk
            </a>
            <p>
              As part of a stretch objective, I was given a task to create a
              card matching game.
            </p>
            <p>
              Due to the popularity od Bluey with my eldest son I chose to theme
              it around this
            </p>
          </div>
        </div>
        <div className="groupProjects">
          <div className="project">
            <h3>Project 1 - Virtual pet</h3>
            <a href="tamogotchi.mullaneydev.uk" target="_blank">
              tamogotchi.mullaneydev.uk
            </a>
            <p>
              As a group we had to create a virtual pet app that had at least
              three choices
            </p>
          </div>
          <div className="project">
            <h3>Project 2 - Cat store</h3>
            <a href="felinesforlife.mullaneydev.uk" target="_blank">
              felinesforlife.mullaneydev.uk
            </a>
            <p>
              Our brief was to use a given api to create a store that you could
              browse and purchase
            </p>
            <p>
              We achieved this through the use of catapi and faker to generate
              random cat images and details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
