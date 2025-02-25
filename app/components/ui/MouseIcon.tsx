"use client";

import type React from "react"
import styles from "./MouseIcon.module.css"

interface MouseIconProps {
    onClick?: () => void
}

const MouseIcon: React.FC<MouseIconProps> = ({ onClick }) => {
    return (
        <span className={styles.scrollLink} onClick={onClick}>
      <svg className="max-w-10 w-full h-auto" viewBox="0 0 76 130">
        <g fill="none">
          <rect className="stroke-black stroke-3" width="70" height="118" x="1.5" y="1.5" rx="36" />
          <circle className={styles.scroll} cx="36.5" cy="31.5" r="4.5" />
        </g>
      </svg>
    </span>
    )
}

export default MouseIcon
