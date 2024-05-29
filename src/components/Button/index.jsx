import styles from "./button.module.css";

const RefButton = ({ reference, btnText }) => {
   return (
      <div className={styles.buttonsWrapper}>
         <a
            className={styles.button}
            href={reference}
            target="_blank"
            rel="noreferrer noopener"
         >
            {btnText}
         </a>
      </div>
   );
};

export default RefButton;
