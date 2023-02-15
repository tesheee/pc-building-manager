import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ onChangePage, currentPage }){
    return (
        <>
            <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            className="pagination"
            onPageChange={event => onChangePage(event.selected + 1)}
            pageRangeDisplayed={2}
            pageCount={3}
            previousLabel="<"
            forcePage={currentPage - 1}
            renderOnZeroPageCount={null}
            />
        </>
    )}
export default Pagination;