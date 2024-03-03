import css from "./ImageGallerry.module.css"

export default function ImageGallery({ children }) {
    return (
        <ul className={css.gal}>
            {children && children.length > 0 ? (
                children.map((child, index) => (
                    <li key={index}>
                        <div>{child}</div>
                    </li>
                ))
            ) : (
                <div></div>
            )}
        </ul>
    );
}