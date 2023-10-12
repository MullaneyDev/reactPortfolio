const Projects = () => {
  return (
    <div className="aboutBox">
      <h1>Projects</h1>
      <p>
        Throughout my time as part of the codenation master software course, I
        have completed projects either as an individual or as part of a group.
      </p>
      <p>
        These projects have been to help us develop further fluency in the
        content we have covered.
      </p>
      <p>Below are links to the projects completed so far.</p>
      <div className="projectWindow">
        <div className="individualProjects">
          <div className="project">
            <h3>Card Matching Game</h3>
            <a href="bluey.mullaneydev.uk" target="_blank">
              bluey.mullaneydev.uk
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/BlueyMatchingGame"
              target="_blank"
              rel="noreferrer"
            >
              Github repository
            </a>
            <p>
              As part of a stretch objective, I was given a task to create a
              card matching game.
            </p>
            <p>
              Due to the popularity of Bluey with my eldest son, I chose to
              theme it around this.
            </p>
          </div>
          <div className="project">
            <h3>React To-Do-List</h3>
            <a
              href="https://react-to-do-list-gilt.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://react-to-do-list-gilt.vercel.app/
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/reactToDoList"
              target="_blank"
              rel="noreferrer"
            >
              Github repository
            </a>
            <p>
              As a given task we were asked to create a to do list that could be
              added to, deleted from, edited and stored completed tasks
            </p>
          </div>
          <div className="project">
            <h3>React Calculator</h3>
            <a
              href="https://react-calculator-rust-iota.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://react-calculator-rust-iota.vercel.app/
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/reactCalculator"
              target="_blank"
              rel="noreferrer"
            >
              Github repository
            </a>
            <p>
              As a given task we were asked to create a calculator that could
              use the 4 basic operations. As part of the stretch goals i added
              extra functionality of keyboard input, use of brackets and use of
              powers
            </p>
          </div>
        </div>
        <div className="groupProjects">
          <div className="project">
            <h3>Project 1 - Virtual pet</h3>
            <a href="tamogotchi.mullaneydev.uk" target="_blank">
              tamogotchi.mullaneydev.uk
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/groupProject1"
              target="_blank"
              rel="noreferrer"
            >
              Github repository
            </a>
            <p>
              As a group, we had to create a virtual pet app that had at least
              three choices. We then gave each choice individualised actions.
            </p>
          </div>
          <div className="project">
            <h3>Project 2 - Cat store</h3>
            <a href="felinesforlife.mullaneydev.uk" target="_blank">
              felinesforlife.mullaneydev.uk
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/groupProject2"
              rel="noreferrer"
              target="_blank"
            >
              Github repository
            </a>
            <p>
              Our brief was to use a given api to create a store in which you
              could browse and purchase different options.
            </p>
            <p>
              We achieved this through the use of catapi and faker to generate
              random cat images and details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
