// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// interface User {
//   _id: string;
//   email: string;
//   username: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export function useAuth() {
//   const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

//   const router = useRouter();

//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMe = async () => {
//       try {
//         const res = await fetch(`${API_BASE}/api/user/me`, {
//           method: "GET",
//           credentials: "include",
//         });

//         if (!res.ok) {
//           throw new Error("未登录");
//         }

//         const data = await res.json();
//         setUser(data.user);
//       } catch (err) {
//         router.replace("/login");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMe();
//   }, [router]);

//   return { user, loading };
// }
