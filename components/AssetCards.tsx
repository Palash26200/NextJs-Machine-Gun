'use client'
import AssetCard from "./AssetCard";
import Layout from "./Layout";
import assets from "@/data/assets";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";

export default function AssetCards() {
    const itemsPerPage = 6;
    // const [itemsPerPage, setItemsPerPage] = useState(6);
    const [pageNumber, setPageNumber] = useState(1);

    const startIndexFun = () => (pageNumber - 1) * itemsPerPage;
    const [startIndex, setStartIndex] = useState(startIndexFun());

    const endIndexFun = () => startIndex + itemsPerPage;
    const [endIndex, setEndIndex] = useState(endIndexFun());

    const pageDataFun = () => assets.slice(startIndex, endIndex);
    const [pageData, setPageData] = useState(pageDataFun());


    const onPrevious = () => {
        if (pageNumber > 1) {
            setPageNumber((prevPageNumber) => prevPageNumber - 1);
        }
    }

    const onNext = () => {
        const totalPages = Math.ceil(assets.length / itemsPerPage);
        if (pageNumber < totalPages) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
    }

    useEffect(() => {
        setStartIndex(startIndexFun());
    }, [pageNumber]);

    useEffect(() => {
        setEndIndex(endIndexFun());
    },[startIndex])

    useEffect(() => {
        setPageData(pageDataFun());
    }, [endIndex]);

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-semibold text-center">Assets</h1>
        <div className="mt-[25px] flex flex-wrap gap-4 justify-center hover:cursor">
          {pageData.map((data, idx) => (
            <div key={idx}>
                <AssetCard data={data} />
            </div>
          ))}
        </div>
        <Pagination>
            <PaginationContent>
              <PaginationPrevious className="hover:bg-yellow-100 cursor-pointer" onClick={onPrevious}/>
              <PaginationNext className="hover:bg-yellow-100 cursor-pointer" onClick={onNext}/>
            </PaginationContent>
        </Pagination>
      </div>
    </Layout>
  );
}
