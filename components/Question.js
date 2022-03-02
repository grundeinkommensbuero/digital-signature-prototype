import styles from "../styles/Question.module.css";
import { useState } from "react";
import Image from "next/image";
import plusIcon from "../images/Plus.svg";
import minusIcon from "../images/Minus.svg";

export function Question({ questionText, answerText }) {
  const [toggle, setToggle] = useState();

  return (
    <div className={styles.question}>
      <div
        className={styles.questionHeadingContainer}
        onClick={() => {
          setToggle((toggle) => !toggle);
        }}
      >
        <h4 className={styles.questionHeading}>{questionText}</h4>
        {!toggle && (
          <Image src={plusIcon} height={25} width={25} alt="Aufklappen" />
        )}
        {toggle && (
          <Image src={minusIcon} height={25} width={25} alt="Aufklappen" />
        )}
      </div>
      {toggle && <p>{answerText}</p>}
      <div className={styles.questionLine}></div>
    </div>
  );
}
