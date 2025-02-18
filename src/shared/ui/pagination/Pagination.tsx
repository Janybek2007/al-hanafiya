'use client';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import scss from './Pagination.module.scss';
import React from 'react';
import { parseAsInteger, useQueryState } from 'nuqs';

interface PaginationProps {
	totalPages: number;
}

const Pagination = ({ totalPages = 10 }: PaginationProps) => {
	const [currentPage, setCurrentPage] = useQueryState(
		'page',
		parseAsInteger.withDefault(1)
	);

	const handlePageChange = React.useCallback(
		(page: number) => {
			if (page >= 1 && page <= totalPages) {
				setCurrentPage(page);
			}
		},
		[setCurrentPage, totalPages]
	);

	const renderPageNumbers = React.useCallback(() => {
		const pages = [];
		const maxVisiblePages = 5;
		let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
		const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

		if (endPage - startPage + 1 < maxVisiblePages) {
			startPage = Math.max(1, endPage - maxVisiblePages + 1);
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(
				<button
					key={i}
					className={`${scss.page_btn} ${currentPage === i ? scss.active : ''}`}
					onClick={() => handlePageChange(i)}
				>
					{i}
				</button>
			);
		}
		return pages;
	}, [currentPage, handlePageChange, totalPages]);

	return (
		<div className={scss.pagination}>
			<button
				className={scss.arrow_btn}
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<MdKeyboardArrowLeft size={24} />
			</button>

			{renderPageNumbers()}

			<button
				className={scss.arrow_btn}
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<MdKeyboardArrowRight size={24} />
			</button>
		</div>
	);
};

export default Pagination;
