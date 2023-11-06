import bluey from "../images/projectImages/bluey.png";
import calculator from "../images/projectImages/calculator.png";
import cats4lyf from "../images/projectImages/cats4lyf.png";
import tamogotchi from "../images/projectImages/tamogotchi.png";
import todolist from "../images/projectImages/todolist.png";
import promptelex from "../images/projectImages/promptelex.png"

const Projects = () => {
  return (
    <div className="projectBox">
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
          <h3 className="projectTitles">Individual projects</h3>
          <div className="project">
            <h3>Card Matching Game</h3>
            <img
              className="projectImage"
              src={bluey}
              alt="Bluey Card Matching Game"
            />
            <br />
            <a
              href="https://bluey.mullaneydev.uk"
              target="_blank"
              rel="noreferrer"
            >
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
              card matching game. I made use of local storage to keep track of
              the users win total and lowest moves score.
            </p>
            <p>
              Due to the popularity of Bluey with my eldest son, I chose to
              theme it around this.
            </p>
          </div>
          <div className="project">
            <h3>React To-Do-List</h3>
            <img className="projectImage" src={todolist} alt="To Do List" />
            <br />
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
              added to, deleted from, edited and stored completed tasks.
            </p>
          </div>
          <div className="project">
            <h3>React Calculator</h3>
            <img className="projectImage" src={calculator} alt="Calculator" />
            <br />
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
              use the 4 basic operations. As part of the stretch goals I added
              extra functionality of keyboard input, use of brackets and use of
              powers.
            </p>
          </div>
        </div>
        <div className="groupProjects">
          <h3 className="projectTitles">Group projects</h3>
          <div className="project">
            <h3>Project 1 - Virtual pet</h3>
            <img className="projectImage" src={tamogotchi} alt="Virtual Pet" />
            <br />
            <a
              href="https://tamogotchi.mullaneydev.uk"
              target="_blank"
              rel="noreferrer"
            >
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
              We made use of local storage in order to be able to store the 
              users best time of keeping their virtual pet alive.
            </p>
          </div>
          <div className="project">
            <h3>Project 2 - Cat store</h3>
            <img className="projectImage" src={cats4lyf} alt="Cats for Life" />
            <br />
            <a
              href="https://felinesforlife.mullaneydev.uk"
              target="_blank"
              rel="noreferrer"
            >
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
          <div className="project">
            <h3>Project 3 - Instagram Clone</h3>
            <img className="projectImage" src={promptelex} alt="Promptelex" />
            <br />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
