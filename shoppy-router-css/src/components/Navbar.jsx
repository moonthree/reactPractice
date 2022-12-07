import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase"; // firebase에서 로그인 함수 불러옴
import User from "./User";

export default function Navbar() {
  const [user, setUser] = useState();
  // useState로 로그인 여부를 판단하고 있기 때문에 새로고침시 로그인여부를 판단하지 못하게 됨
  // 그러므로 useEffect를 사용하여 mount 될 때 마다 로그인여부를 불러옴
  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <BsFillPencilFill />
        </Link>
        {user && <User user={user} />}
        {/* 로그인 버튼 누르면 firebase의 로그인함수 실행 */}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}
