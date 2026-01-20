// src\app\dashboard\page.tsx
"use client";

import LogoutBtn from "@/components/LogoutBtn";
import { useAuth } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user]);

  if (loading) {
    return <p>加载中...</p>;
  }

  if (!user) return null;

  return (
    <div className="p-22 text-amber-50">
      {user && (
        <div>
          <h1>欢迎 {user.username}</h1>
          <p>注册时间：{new Date(user.createdAt).toLocaleString()}</p>
        </div>
      )}

      <LogoutBtn></LogoutBtn>
    </div>
  );
}
