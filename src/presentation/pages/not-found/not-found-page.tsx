import { Player } from "@lottiefiles/react-lottie-player";
import pageNotFoundAnimation from '../../../asset/animations/404.json';
import styles from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <Player
        autoplay
        loop
        src={pageNotFoundAnimation}
        className={styles.animation}
      />
      <h1 className={styles.errorText}>404</h1>
      <p className={styles.message}>Page Not Found</p>
      <p className={styles.subMessage}>ページが見つかりません</p>
    </div>
  );
};

export default NotFoundPage;
