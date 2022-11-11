import QuoteList from '../components/quotes/QuoteList'
import useHttp  from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

export default function AllQuotes() {
  const {sendRequest, status,data:loadedQuote,error}=useHttp(getAllQuotes,true)

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  
  if(status === 'pending'){
    return (
      <div className='centered'>
        <LoadingSpinner/>
      </div>
    )
  }
  if(error)
  return <p className='centered focused'>{error}</p>
  if(status === 'completed'&&(!loadedQuote ||loadedQuote.length === 0))
    return <NoQuotesFound/>
  return <QuoteList quotes={loadedQuote}/>;
};
