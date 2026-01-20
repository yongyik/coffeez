"use client";

import { useAuth } from "@/contexts/UserContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { refreshUser } = useAuth();

  const validateEmai = (v: string) => /\S+@\S+\.\S+/.test(v);

  const validate = () => {
    if (!email) {
      setError("请填写邮箱");
      return false;
    }

    if (!validateEmai(email)) {
      setError("请输入有效邮箱地址");
      return false;
    }

    if (!password) {
      setError("请填写密码");
      return false;
    }

    if (password.length < 6) {
      setError("密码长度至少为 6 位");
      return false;
    }

    setError(null);
    return true;
  };

  const handlerLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        await refreshUser();

        router.push("/dashboard");
      } else {
        const body = await res.json();

        setError(body?.error ?? "登录失败，请重试");
        console.log(error);
      }
    } catch (err) {
      setError("网络错误，请稍后再试");
      console.log(error);
    }
  };

  return (
    <div className="p-3">
      <h1 className="text-center text-3xl">登录</h1>
      <form
        onSubmit={handlerLogin}
        className="lg:px-28 flex flex-col gap-6 items-center w-full "
      >
        <div className=" px-2 w-full flex flex-col  items-center ">
          <label className="block text-sm font-medium p-3 w-full max-w-66">
            邮箱
          </label>
          <input
            className="border border-amber-50 p-2 rounded-xl w-full max-w-66"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="邮件"
          />
        </div>
        <div className=" px-2 w-full flex flex-col  items-center">
          <label className="block text-sm font-medium p-3 w-full max-w-66">
            密码
          </label>
          <div className="flex flex-row gap-2">
            <input
              className="border border-amber-50 p-2 rounded-xl w-full max-w-57"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="密码"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className=" text-sm w-13"
            >
              {showPassword ? "隐藏" : "显示"}
            </button>
          </div>
        </div>

        {error && <p className="text-red-400">{error}</p>}

        <button
          type="submit"
          className="bg-amber-50/20 py-1 px-3 border border-amber-50/55 rounded-lg w-22 text-center"
        >
          登录
        </button>
      </form>
      <div className="flex  justify-center py-11 ">
        <p>
          还没有账号？
          <Link className="text-blue-500" href={"/register"}>
            注册
          </Link>
        </p>
      </div>
    </div>
  );
}
