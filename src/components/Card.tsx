import { useState } from "react";

import useWidth from "../hooks/useWidth";
import styles from "./Card.module.scss";

export default function Card() {
  const [selected, setSelected] = useState<number>(-1);
  const width = useWidth();

  let heroSrc = "illustration-woman-online-mobile.svg";
  let shadowSrc = "bg-pattern-mobile.svg";
  if (width >= 1440) {
    heroSrc = "illustration-woman-online-desktop.svg";
    shadowSrc = "bg-pattern-desktop.svg";
  }

  return (
    <div className={styles.root}>
      <div className={styles.hero}>
        <img alt="hero" className={styles.heroImg} src={heroSrc} />
        <img alt="shadow" className={styles.shadowImg} src={shadowSrc} />
      </div>
      {width >= 1440 ? (
        <img
          alt="box"
          className={styles.boxImg}
          src="illustration-box-desktop.svg"
        />
      ) : null}

      {/* Accordion */}
      <div className={styles.accordion}>
        <h1 className={styles.accordionHeading}>FAQ</h1>

        <div className={styles.accordionSelection}>
          <div className={styles.accordionContainer}>
            <h1>How many team members can I invite?</h1>
            {selected === 0 ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                reprehenderit.
              </p>
            ) : null}
          </div>
          <button
            className={styles.arrowDownBtn}
            type="button"
            onClick={() => {
              if (selected === 0) {
                setSelected(-1);
              } else {
                setSelected(0);
              }
            }}>
            <img alt="arrow down" src="icon-arrow-down.svg" />
          </button>
        </div>
        <div className={styles.divider}></div>

        {/* What is the maximum file upload size? */}
        <div className={styles.accordionSelection}>
          <div className={styles.accordionContainer}>
            <h1>What is the maximum file upload size?</h1>
            {selected === 1 ? (
              <p>
                No more than 2GB. All files in your account must fit your
                allotted storage space.
              </p>
            ) : null}
          </div>
          <button
            className={styles.arrowDownBtn}
            type="button"
            onClick={() => {
              if (selected === 1) {
                setSelected(-1);
              } else {
                setSelected(1);
              }
            }}>
            <img alt="arrow down" src="icon-arrow-down.svg" />
          </button>
        </div>
        <div className={styles.divider}></div>

        {/* How do I reset my password? */}
        <div className={styles.accordionSelection}>
          <div className={styles.accordionContainer}>
            <h1>How do I reset my password?</h1>
            {selected === 2 ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                reprehenderit.
              </p>
            ) : null}
          </div>
          <button
            className={styles.arrowDownBtn}
            type="button"
            onClick={() => {
              if (selected === 2) {
                setSelected(-1);
              } else {
                setSelected(2);
              }
            }}>
            <img alt="arrow down" src="icon-arrow-down.svg" />
          </button>
        </div>
        <div className={styles.divider}></div>

        {/* Can I cancel my subscription? */}
        <div className={styles.accordionSelection}>
          <div className={styles.accordionContainer}>
            <h1>Can I cancel my subscription?</h1>
            {selected === 3 ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                reprehenderit.
              </p>
            ) : null}
          </div>
          <button
            className={styles.arrowDownBtn}
            type="button"
            onClick={() => {
              if (selected === 3) {
                setSelected(-1);
              } else {
                setSelected(3);
              }
            }}>
            <img alt="arrow down" src="icon-arrow-down.svg" />
          </button>
        </div>
        <div className={styles.divider}></div>

        {/* Do you provide additional support? */}
        <div className={styles.accordionSelection}>
          <div className={styles.accordionContainer}>
            <h1>Do you provide additional support?</h1>
            {selected === 4 ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                reprehenderit.
              </p>
            ) : null}
          </div>
          <button
            className={styles.arrowDownBtn}
            type="button"
            onClick={() => {
              if (selected === 4) {
                setSelected(-1);
              } else {
                setSelected(4);
              }
            }}>
            <img alt="arrow down" src="icon-arrow-down.svg" />
          </button>
        </div>
        <div className={styles.divider}></div>
      </div>
    </div>
  );
}
