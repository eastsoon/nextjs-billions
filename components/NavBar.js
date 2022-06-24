import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <img src="/dollar.png" />
      <h2>Show Me The Billionaire</h2>
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>List</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 3px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          background: radial-gradient(gold, #f9a40e);
        }
        h2{
          color : #222e62;
          margin : 0px;
        }
        img {
          max-width: 100px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: #ebebeb;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}