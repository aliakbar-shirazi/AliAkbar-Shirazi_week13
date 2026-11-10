import styles from "./Overlay.module.css";

function Overlay({ showModal }) {
  return <div className={showModal? styles.overlay : styles.hide}></div>;
}

export default Overlay;
