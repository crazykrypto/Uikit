import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import Grid from "../../components/Box/Grid";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    <Grid gridTemplateColumns="1fr 1fr">
    {config.map((entry) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb="16px"
      />
    ))}
    </Grid>
    {/* <HelpLink href="https://docs.pancakeswap.finance/get-started/connection-guide" external>
      <HelpIcon color="primary" mr="6px" />
      Learn how to connect
    </HelpLink> */}
  </Modal>
);

export default ConnectModal;
