import styles from "./Alert.module.css";

function Alert({ alertMessage, setAlertMessage }) {
  setTimeout(() => {
    setAlertMessage("");
  }, 3000);
  return (
    <div className={alertMessage ? styles.container : styles.hide}>
      <p>{alertMessage}</p>
    </div>
  );
}

export default Alert;
