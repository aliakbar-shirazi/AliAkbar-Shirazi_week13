import styles from "./TabBody.module.css";

function TabBody({ data: { title, text } }) {
  return (
    <main className={styles.container}>
      <h2>{title}</h2>
      <p>{text}</p>
    </main>
  );
}

export default TabBody;
