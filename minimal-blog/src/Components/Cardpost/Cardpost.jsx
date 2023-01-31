import Author from 'src/UI/Author/Author';
import styles from './Cardpost.module.scss';
import Link from 'next/link';
import client from 'src/sanity';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import Category from 'src/UI/Category/Category';


const Cardpost = ({ author, post }) => {

  const {
    author: authorRef,
    title,
    mainImage,
    publishedAt,
    short_text,
    categories,
    slug,
  } = post || {}
  console.log(categories)

  const imageProps = useNextSanityImage(client, mainImage);
  const getAuthor = author?.find((author) => author._id === authorRef._ref);
  // const getCategory = category?.find((category) => category._id === category._rev);

  // const getCategory = categoria?.map((cat) => cat.category );
  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <Image {...imageProps} alt={title} />
      </div>
      <div className={styles.content}>
        <h2 className='h3'>{title}</h2>
        {categories?.map((category) => (
                    <>
                    { category && <Category key={category} title={category?.title}/>}
                    </>
                    ))}
        <p>{short_text}</p>
        <div className={styles.footer}>
          <Author author={getAuthor} date={publishedAt} />
          <Link href={`/post/${slug.current}`} className='h5'>
            Continuar lendo &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cardpost;
