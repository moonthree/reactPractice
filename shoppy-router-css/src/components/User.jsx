import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    // shrink-0 = 공간이 부족해져도 줄어들지 않음 - 이미지 줄어듬 방지위해 사용
    <div className="flex items-center shrink-0">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={photoURL}
        alt={displayName}
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
}
