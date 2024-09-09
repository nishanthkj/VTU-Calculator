import React from "react";
import Link from "next/link";
import "./hero.css"; // Make sure the CSS file is correctly imported

function Page() {
  return (
    <div className="hero">
      <Link href="/PAC" passHref>
        <button className="button-6">P and C</button>
      </Link>
      <Link href="/Sem3" passHref>
        <button className="button-6">Sem 3</button>
      </Link>
      <Link href="/Sem4" passHref>
        <button className="button-6">Sem 4</button>
      </Link>
      <Link href="/Sem5" passHref>
        <button className="button-6">Sem 5</button>
      </Link>
      <Link href="/Sem6" passHref>
        <button className="button-6">Sem 6</button>
      </Link>
      <Link href="/Sem7" passHref>
        <button className="button-6">Sem 7</button>
      </Link>
      {/* <Link href="/Sem8" passHref>
        <button className="button-6">Sem 8</button>
      </Link> */}
    </div>
  );
}

export default Page;
