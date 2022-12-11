import React from "react";
import ReactPaginate from "react-paginate";

function Pagination(){
    return (
        <>
            <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            className="pagination"
            onPageChange={event => console.log(event)}
            pageRangeDisplayed={8}
            pageCount={4}
            previousLabel="<"
            renderOnZeroPageCount={null}
            />
        </>
    )}
export default Pagination;