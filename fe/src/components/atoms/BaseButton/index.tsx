import { Button } from "@mui/material";
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  type?: "primary" | "secondary" | "icon";
  status?: "active" | "inactive";
  className?: string;
  size?: "sm" | "s" | "m" | "l" | "xl";
};

const defaultProps = {
  type: "primary",
  variant: "contained",
  status: "active",
  size: "s",
} as const;

export default function BaseButton({
  className,
  children,
  type,
  status,
  size,
}: Props) {
  return (
    <Button
      className={clsx(
        styles[type ?? defaultProps.type],
        styles[status ?? defaultProps.status],
        styles[size ?? defaultProps.size],
        className
      )}
      variant={defaultProps.variant}
      disableElevation
    >
      {children}
    </Button>
  );
}
