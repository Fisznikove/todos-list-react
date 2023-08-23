import "./style.css";

const Buttons = ({tasks, hideDoneTask}) => (
    
        <div className="section__buttons">
            {tasks.length>0 && (
              <>
              <button className= "header__buttons">
              {hideDoneTask ? "Pokaż ukończone" : "Ukryj ukończone"}
              </button>
              <button className= "header__buttons tasks__button--hiddenAllDone"
              disabled= {tasks.every(({ done })=> done)}> Ukończ wszystkie
              </button>`
              </>
            )}
        </div>
    
);
export default Buttons;