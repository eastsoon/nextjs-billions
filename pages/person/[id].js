import Seo from "../../components/Seo";

export default function Detail({results}){
    return (
        <div>
            <Seo title={results.name} />
            <div className="containerInfo">
                <img src={results.squareImage}/>
                <div>
                    <h1>{results.name}</h1>
                    <h4>Networth : {Math.round(results.netWorth / 1000)} Billion</h4>
                    <h4>Country : {results.country}</h4>
                    <h4>Industry : {results.industries}</h4>
                </div>
            </div>
            <div className="containerDetail">
                <h3> Detail </h3>
                <span>
                    {results.bio}
                </span>
            </div>
            
            <div className="containerFinancial">
                <h3> FinancialAssets </h3>
                <div className="containerFinancialDetail">
                    {results.financialAssets.map((fin) => (
                        <div>
                            <div>Company : {fin.companyName} <span>({fin.ticker})</span></div>
                            <div>Shares : {fin.numberOfShares.toLocaleString()}</div>
                            <div>Excersie Price : {fin.exerciseOptionPrice ? `$${fin.exerciseOptionPrice}` : "-"}</div>
                            <div>Current Price : {fin.currentPrice ? `$${fin.currentPrice}` : "-"}</div>
                            
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                h1{
                    margin : 0px 0px 25px 0px;
                    text-align: center;
                }
                h4{                    
                    font-size: 18px;
                    margin : 5px 0px 10px 0px;
                    text-align: left;
                }
                .containerInfo {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .containerDetail {
                    display: grid;
                    grid-template-columns: 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .containerFinancial {
                    display: grid;
                    grid-template-columns: 1fr;
                    padding: 20px;
                    margin-bottom : 100px;
                    gap: 20px;
                }
                .containerFinancialDetail {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    padding: 3px;
                    gap: 10px;
                }
                .containerFinancialDetail > div {
                    padding : 8px;
                    border-radius: 12px;
                    border : 1px solid #222e62;
                }
                
                .containerFinancialDetail div div{
                    font-size : 14px;
                }
                .containerFinancialDetail div div span{
                    font-size : 10px;
                }
            `}</style>
        </div>
    )

}

export async function getServerSideProps({params:{id}}) {
    const results = await (await fetch(`http://localhost:3000/api/billionaire/person/${id}`)).json();
    return {
      props : {
        results
      },
    }
  }