import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ onChangePage }){
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
            renderOnZeroPageCount={null}
            />
        </>
    )}
export default Pagination;