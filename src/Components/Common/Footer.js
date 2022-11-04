import styles from "../../../styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.container_footer}>
      <div className={styles.terms}>
        <h5>Terms and Privacy Notice</h5>
        <h5> Send us feedback </h5>
        <h5>Help</h5>
      </div>
      <div className={styles.declaration}>
        © 1996-2022, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
}

export default Footer;
