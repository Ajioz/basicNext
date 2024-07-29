"use client";

import React from "react";
import { notFound, useRouter } from "next/navigation";

const ModalBackdrop = () => {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={router.back} />;
};

export default ModalBackdrop;