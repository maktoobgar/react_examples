import styles from "./Error.module.css";
import ReactDom from "react-dom";

const ErrorContent = (props) => {
	return (
		<div
			className={`position-fixed vh-100 vw-100 ${styles.fixed} ${styles["medium-z-index"]}`}
		>
			<div
				className={`position-fixed h-100 w-100 bg-opacity-75 bg-dark ${styles.fixed} ${styles["high-z-index"]}`}
				onClick={props.removeError}
			></div>
			<div className="container h-100 px-4">
				<div className="row align-content-center h-100">
					<div
						className={`my-3 p-3 border border-info rounded bg-body ${styles["higher-z-index"]}`}
					>
						<header>
							<h2>{props.title}</h2>
						</header>
						<div className="pt-3">
							<p>{props.body}</p>
						</div>
						<footer>
							<button className="btn btn-info" onClick={props.removeError}>
								Okay
							</button>
						</footer>
					</div>
				</div>
			</div>
		</div>
	);
};

const Error = (props) => {
	return ReactDom.createPortal(
		<ErrorContent
			title={props.title}
			body={props.body}
			removeError={props.removeError}
		/>,
		document.getElementById("error")
	);
};

export default Error;
