import React from 'react';
import { MODALS } from '../../../context/modal/types';
import { Modal, ConnectPermaWallet } from '../../index';
import styles from './styles.module.scss';

function SignInModal() {
  return (
    <Modal name={MODALS.SIGN_IN} className={styles.modal}>
      <h2 className={styles.title}>Connect your secret key</h2>
      <ConnectPermaWallet />
      {/*<ZilPay />*/}
    </Modal>
  );
}

export default SignInModal;