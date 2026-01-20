"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/contexts/UserContext";

export default function LogoutBtn() {
  const router = useRouter();
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [loading, setLoading] = useState(false);
  const { refreshUser } = useAuth();

  const logout = async () => {
    if (loading) return;

    setLoading(true);

    try {
      await fetch(`${API_BASE}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("logout failed", err);
    } finally {
      await refreshUser();

      router.push("/");
    }
  };

  return (
    <div>
      <button onClick={logout} disabled={loading}>
        {loading ? "退出中..." : "登出"}
      </button>
    </div>
  );
}
