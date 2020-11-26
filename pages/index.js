import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router'

import MoviesList from '../components/MoviesList'

const Home = (props) => {
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    }
  }, [])

  const paginationHandler = (page) => {
    const currentPath = props.router.pathname;
    const currentQuery = { ...props.router.query };
    currentQuery.page = page.selected + 1;

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  if (isLoading) {
    <div>Loading...</div>
  }

  // To limit items per page
  // const perPage = 6;
  // const offset = props.currentPage * perPage;
  // const pageCount = Math.floor(props.posts.length / perPage);

  return (
    <div className="app-container">
      <div className="posts">
        <h2 className="section-title">Now Playing</h2>

        <ReactPaginate
          previousLabel={'←'}
          nextLabel={'→'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          containerClassName={'pagination'}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}

          initialPage={props.currentPage - 1}
          pageCount={props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={paginationHandler}
        />

        <MoviesList movies={props.posts} />
      </div>
    </div>
  );
};

Home.getInitialProps = async ({ query }) => {
  const page = query.page || 1;

  const posts = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=cf51a46c6ac26bd4f4c55018fdad298d&page=${page}`);

  return {
    totalCount: posts.data.total_results,
    pageCount: posts.data.total_pages,
    currentPage: posts.data.page,
    posts: posts.data.results,
    isLoading: false,
  };
}


export default withRouter(Home);
