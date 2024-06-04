import React from 'react';
import GridPostList from './GridPostList';
import Loader from './Loader';
import { Document as AppwriteDocument } from 'appwrite'; 

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: AppwriteDocument[]; 
};

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />;
  
  if (searchedPosts && searchedPosts.length > 0) {
    return <GridPostList posts={searchedPosts} />;
  }
  
  return <div>No results found.</div>;
};

export default SearchResults;
