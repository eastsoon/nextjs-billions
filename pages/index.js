import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";


export default function Home({results}) {
  const router = useRouter();
  const onClick = (id, personName) => {
    router.push({pathname : `/person/${id}`});
  }
  return (
    <div className="container">
      <Seo title="List" />
      {results?.map((person,index) => (
        <div onClick={() => onClick(person.id, person.name)} className="person" key={person.id}>
          <img src={person.squareImage} />
          <h4>
            <Link href={`/person/${person.id}`} >
              <a>{index+1}. {person.name}</a>
            </Link>
          </h4>
          <h5>{Math.round(person.netWorth / 1000)} Billion / {person.industries}</h5>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .person {
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          background: linear-gradient(180deg, #fec234, transparent);
        }
        .person img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .person:hover img {
          cursor: pointer;
          transform: scale(1.05) translateY(-10px);
        }
        .person h4 {
          margin-bottom : 3px;
          font-size: 15px;
          text-align: center;
        }
        .person h5 {
          margin-top : 0px;
          font-size: 11px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const results = await (await fetch(`http://localhost:3000/api/billionaire`)).json();
  return {
    props : {
      results
    },
  }
}