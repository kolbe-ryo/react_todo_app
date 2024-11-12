import { Player } from "@lottiefiles/react-lottie-player";
import PropTypes from 'prop-types';
import { ReactNode } from "react";
import loadingAnimation from '../../../asset/animations/loading.json';
import styles from './loading.module.css';

interface LoadingProps {
    loading: boolean;
    children?: ReactNode;
}

export const Loading: React.FC<LoadingProps> = ({ loading, children }) => {
    if (!loading) return <>{children}</>;

    return (
        <div className={styles.container}>
            <Player
                autoplay
                loop
                src={loadingAnimation}
                className={styles.animation}
            />
        </div>
    );
};

Loading.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node,
};
