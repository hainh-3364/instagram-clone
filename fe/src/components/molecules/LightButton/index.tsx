import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import styles from "./styles.module.scss";
import { BaseButton } from "@/components/atoms";

export default function LightButton() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <KeyboardArrowUpIcon className="self-center" color="disabled" />
        <BaseButton className={styles.button} type="secondary">
          Shop Now
        </BaseButton>
      </div>
      <SendOutlinedIcon className={styles.sendIcon} />
    </div>
  );
}
