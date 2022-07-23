import styles from "./Error.module.css";

const Error = (props) => {
	return (
		<div
			className={`position-fixed vh-100 vw-100 bg-opacity-75 bg-dark ${styles.fixed}`}
			onClick={props.removeError}
		>
			<div className="container h-100 px-4">
				<div className="row align-content-center h-100">
					<div className="my-3 p-3 border border-info rounded bg-body">
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

export default Error;
