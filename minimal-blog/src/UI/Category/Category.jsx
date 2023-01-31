import styles from './Category.module.scss'

const Category = ({ title }) => {
  // const title = title || {};


  return (
    <div className={styles.title}>
      <span>{title}</span>
    </div>
  );
};

export default Category;
