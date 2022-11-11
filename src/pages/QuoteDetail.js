import { useParams,Route,Link, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments'
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { getSingleQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";


export default function QuoteDetail() {
  const match  = useRouteMatch();
  const params = useParams()
  const {quoteId} = params;

  const {sendRequest,status, data: loadedQuote,error}=useHttp(getSingleQuote,true)

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if(status ==='spending'){
    return <>
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    </>
  }
  if(error){
    return <p className="centered">{error}</p>
  }

  if(!loadedQuote){
    return <p>No Quote Found</p>
  }
  return (
    <>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
      ></HighlightedQuote>
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn-flat" to={`${match.url}/comments`}>
            {" "}
            Load Comment
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </>
  );
  
};
