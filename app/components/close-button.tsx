/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import clsx from "clsx";

export function CloseButton({ onClick }: { onClick: () => void }) {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    onClick();
    setTimeout(() => {
      setIsSpinning(false);
    }, 5000);
  };

  return (
    <button
      className={clsx(
        "cursor-default rounded-full p-1 opacity-50 hover:opacity-100 transition-all",
        isSpinning && "animate-spin duration-[5000ms]"
      )}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faXmark} className="h-4" />
    </button>
  );
} 