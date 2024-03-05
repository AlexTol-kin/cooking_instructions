import styles from "./app.module.css";
import { useState } from "react";
import data from "./data.json";

export const App = () => {
  const [steps, setSteps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const onClick = ({ target }) => {
    setActiveIndex(target.id);
  };

  const onClickBack = () => {
    setActiveIndex(activeIndex - 1);
  };

  const onClickFurther = () => {
    setActiveIndex(activeIndex + 1);
  };

  const onClickRestart = () => {
    setActiveIndex(0);
  };

  const finalStap = Number(activeIndex) === steps.length - 1;

  const firstStap = Number(activeIndex) === 0;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles["steps-content"]}>
            {steps[activeIndex].content}
          </div>
          <ul className={styles["steps-list"]}>
            {steps.map((step, index) => (
              <li
                key={step.id}
                className={
                  styles["steps-item"] +
                  " " +
                  (index <= activeIndex && styles.done) +
                  " " +
                  (index === Number(activeIndex) && styles.active)
                }
              >
                <button
                  id={index}
                  onClick={onClick}
                  key={step.id}
                  className={styles["steps-item-button"]}
                >
                  {index + 1}
                </button>
                {step.title}
              </li>
            ))}
          </ul>
          <div className={styles["buttons-container"]}>
            <button
              onClick={onClickBack}
              disabled={!!firstStap}
              className={styles.button}
            >
              Назад
            </button>
            <button
              onClick={!finalStap ? onClickFurther : onClickRestart}
              className={styles.button}
            >
              {!finalStap ? "Далее" : "Начать сначала"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
