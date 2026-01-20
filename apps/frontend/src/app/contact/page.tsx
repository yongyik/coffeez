
"use client";

import { useAuth } from "@/contexts/UserContext";



export default function ContactPage() {
  const { user, loading } = useAuth(); 

 



  return (
    <main className="p-8">
      {user && (
        <div>
          <h1>欢迎 {user.username}</h1>
          <p>注册时间：{new Date(user.createdAt).toLocaleString()}</p>
        </div>
      )}
    </main>
  );
}
