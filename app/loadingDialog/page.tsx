"use client";

import Loading from "@/components/Loading/Loading";
import { useState } from "react";

export default function LoadingDialogPage() {
  const [loading, setLoading] = useState<boolean>(true);

  // data status === success 이면 setLoading(true)

  return <Loading open={loading} />;
}
