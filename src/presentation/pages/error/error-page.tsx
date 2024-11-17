import { Player } from "@lottiefiles/react-lottie-player";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import pageNotFoundAnimation from '../../../asset/animations/404.json';
import styles from './error-page.module.css';

type MessageState = { message: string, type: 'success' | 'error' };

// navigateで引数を受け取って遷移するページ
const ErrorPage = () => {
  const location = useLocation();
  const messagestate = location.state as MessageState;

  return (
    <div className={styles.container}>
      <Player
        autoplay
        loop
        src={pageNotFoundAnimation}
        className={styles.animation}
      />
      <p className={styles.message}>Error Occured</p>
      <p className={styles.subMessage}>{messagestate.message}</p>
      <Button variant="contained" onClick={() => window.history.back()}>
        戻る
      </Button>
    </div>
  );
};

export default ErrorPage;
