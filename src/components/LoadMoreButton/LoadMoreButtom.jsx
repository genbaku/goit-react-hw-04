import css from "./LoadMoreButtom.module.css"
export default function LoadMoreBtn({ onLoadMore, hasMoreImages }) {
    return (
        hasMoreImages && (
            <button className={css.btn} onClick={onLoadMore}>Load more</button>
        )
    );
}