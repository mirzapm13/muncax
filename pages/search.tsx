import React from "react";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
function Search() {
  const router = useRouter();
  console.log(router.query);
  const searchType = router.query.st;
  const query = router.query.q;
  return (
    <div className="searchPage__container">
      <div className="searchPage__queryInfo">
        <p>
          Menampilkan pencarian {searchType} untuk "{query}"
        </p>
        <div className="filter">Filter</div>
      </div>
      <div className="searchresult__box">
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
        <Skeleton height={300} width={220} />
      </div>
    </div>
  );
}

export default Search;
